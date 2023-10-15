import React, {useEffect, useRef, useState} from 'react'
import { Header } from '../../components/header/header';
import {storage} from "../../utils/localStorage";
import {CHAT_LIST} from "../../consts/chat";
import { useLocation, useNavigate } from 'react-router-dom';
import TopArrow from '../../assets/top-arrow.png'

type TMsg = {
    isUserMsg: boolean;
    content: string;
}

export const ChatPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const location = useLocation();

    const navigate = useNavigate();

    const { state } = location;

    useEffect(() => {
        if (state?.msg) {
            setInputValue(state?.msg as string);
            navigate('/chat', {
                replace: true,
            });
        }
    }, [navigate, state?.msg]);

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, []);

    // @ts-ignore
    const [messages, setMessages] = useState<TMsg[]>(storage.get(CHAT_LIST, []));

    function handleSendNewMsg(msg: string) {
        if (!msg) return;

        const listOfMsgs = storage.get(CHAT_LIST, []);

        if (Array.isArray(listOfMsgs)) {
            // @ts-ignore
            const result: TMsg[] = [...(listOfMsgs as TMsg[]), {
                isUserMsg: true,
                content: msg,
            }];

            storage.set(CHAT_LIST, JSON.stringify(result));
            setMessages(result);
            setInputValue('');

            setTimeout(() => {
                handleSendAnswerMsg();
            }, 700);
        }
    }

    function handleSendAnswerMsg() {
        const listOfMsgs = storage.get(CHAT_LIST, []);

        if (Array.isArray(listOfMsgs)) {
            const msg = listOfMsgs[listOfMsgs.length-1];
            // @ts-ignore
            const result: TMsg[] = [...(listOfMsgs as TMsg[]), {
                isUserMsg: false,
                // @ts-ignore
                content: `А знаете: ${msg.content.toUpperCase()}`,
            }];

            storage.set(CHAT_LIST, JSON.stringify(result));
            setMessages(result);
        }
    }

    return (
        <div className="w-full fixed h-full bg-white px-6 box-border">
            <Header />

            <div className="h-[calc(100%-70px)] justify-between flex flex-col gap-3 pb-5 box-border">
                <div className="flex flex-col h-[calc(100%-50px)] gap-2 overflow-y-auto" ref={messagesContainerRef}>
                    {
                        messages.map(({isUserMsg, content}) => (
                            <>
                                {
                                    isUserMsg ? (
                                        <div className="flex w-full relative justify-end">
                                            <div className="w-[80%] rounded-t-3 px-3 py-5 rounded-bl-3 border-primary border border-solid">
                                                <p className="text-text-m text-black">
                                                    {content}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex w-full relative justify-start">
                                            <div className="w-[80%] rounded-t-3 px-3 py-5 rounded-br-3 border-primary border border-solid">
                                                <p className="text-text-m text-black">
                                                    {content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        ))
                    }
                </div>

                <div className="w-full border border-solid border-b-primary"></div>
                <div className="flex gap-4">
                    <input
                        value={inputValue}
                        onChange={(value) => setInputValue(value.target.value)}
                        className="w-full h-[50px] text-black p-4 border border-solid border-primary rounded-10"
                        type="text"
                        placeholder="Ваш запрос"
                    />
                    <button onClick={() => handleSendNewMsg(inputValue)} className="rounded-[25px] bg-primary w-[50px] h-[50px]">
                        <img src={TopArrow} className="w-[20px] h-[30px] m-auto" />
                    </button>
                </div>
            </div>
        </div>
    );
}