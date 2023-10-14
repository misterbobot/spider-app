import React from 'react'
import logo from './logo.svg';
import offline from '../../assets/offline.png';
import online from '../../assets/online.png';
import back from '../../assets/back.svg';

import TakeServiceButton from "../../components/buttons/takeServiceButton";
import {Link, useNavigate} from "react-router-dom";

export const OfflinePage: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-screen min-h-screen h-full relative bg-white px-6 pb-5 box-border">
            <div className="w-full h-[70px] flex gap-6 items-center mb-[20px]">
                <Link onClick={goBack} to={'/'} className="flex justify-center items-center h-8 w-8 cursor-pointer">
                    <img src={back} alt={'logo'} height={22} width={12} />
                </Link>
                <img src={logo} alt={'logo'} height={33} width={90} />
            </div>

            <div className="h-full relative flex flex-col gap-[50px]">
                <div>
                    <h1 className="text-primary text-heading-m ">Снять наличные</h1>
                    <p className="text-text-sm text-black">
                        Доллар евро и юани рубли
                    </p>
                </div>

                <div className="w-full h-[350px] rounded-4 shadow-card">

                </div>

                <div className="h-full relative flex flex-col gap-4 justify-between">
                    <div>
                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Ближайшее отделение:
                            </p>
                            <p className="text-black text-text-m">
                                Красная площадь, 3
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Приблизительное время ожидания в живой очереди:
                            </p>
                            <p className="text-black text-text-m">
                                10 - 15 минут
                            </p>
                        </div>
                    </div>

                    <TakeServiceButton color={'white'} background={'#3D6EFA'} title={'Найти ближайшее отделение'} onClick={() => undefined} />
                </div>
            </div>
        </div>
    );
}