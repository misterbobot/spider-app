import React, {useEffect, useState} from "react";
import infoIcon from './info.svg';
import mapIcon from './map.svg';
import blueInfoIcon from './info-blue.svg';
import blueMapIcon from './map-blue.svg';
import ticketIcon from '../../assets/ticket.png';
import blueTicketIcon from '../../assets/ticket-blue.png';

type TNavigationBar = {
    onClickInfo: () => void;
    onClickMap: () => void;
    onClickQueue: () => void;
    activeTab?: string;
}

export const NavigationBar = ({ onClickInfo, onClickMap,onClickQueue, activeTab:activeTabByProps }: TNavigationBar) => {
    const [activeTab, setActiveTab] = useState(activeTabByProps ? activeTabByProps : 'map');

    useEffect(() => {
        if (activeTabByProps) {
            setActiveTab(activeTabByProps);
        }
    }, [activeTabByProps])

    function handleClickIcon(callBack: () => void, icon: string) {
        setActiveTab(icon);
        callBack();
    }

    return (
        <div className="flex justify-around items-center rounded-10 px-5 w-[200px] h-[60px] bg-black">
            <div className="flex justify-center" onClick={() => handleClickIcon(onClickInfo, 'info')}>
                {
                    activeTab === 'info' ? (
                        <img className="cursor-pointer" src={blueInfoIcon} alt={'active info icon'} width={28} height={28}/>
                    ) : (
                        <img className="cursor-pointer" src={infoIcon} alt={'info icon'} width={28} height={28}/>
                    )
                }
            </div>

            <div className="flex justify-center" onClick={() => handleClickIcon(onClickMap, 'map')}>
                {
                    activeTab === 'map' ? (
                        <img className="cursor-pointer" src={blueMapIcon} alt={'active map icon'} width={28} height={28}/>
                    ) : (
                        <img className="cursor-pointer" src={mapIcon} alt={'map icon'} width={28} height={28} />
                    )
                }
            </div>

            <div className="flex justify-center items-start bg-black" onClick={() => handleClickIcon(onClickQueue, 'queue')}>
                {
                    activeTab === 'queue' ? (
                        <img className="cursor-pointer h-[28px] bg-black" src={blueTicketIcon} alt={'active map icon'} width={28} height={28}/>
                    ) : (
                        <img className="cursor-pointer h-[28px] bg-black" src={ticketIcon} alt={'map icon'} width={28} height={28} />
                    )
                }
            </div>
        </div>
    )
}