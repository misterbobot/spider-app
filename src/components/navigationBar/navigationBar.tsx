import React, {useState} from "react";
import infoIcon from './info.svg';
import mapIcon from './map.svg';
import blueInfoIcon from './info-blue.svg';
import blueMapIcon from './map-blue.svg';

export const NavigationBar = () => {
    const [activeTab, setActiveTab] = useState('map');

    return (
        <div className="flex justify-around rounded-10 px-5 w-[200px] h-[60px] bg-black">
            <div className="flex justify-center" onClick={() => setActiveTab('info')}>
                {
                    activeTab === 'info' ? (
                        <img className="cursor-pointer" src={blueInfoIcon} alt={'active info icon'} width={28} height={28}/>
                    ) : (
                        <img className="cursor-pointer" src={infoIcon} alt={'info icon'} width={28} height={28}/>
                    )
                }
            </div>
            <div className="flex justify-center" onClick={() => setActiveTab('map')}>
                {
                    activeTab === 'map' ? (
                        <img className="cursor-pointer" src={blueMapIcon} alt={'active map icon'} width={28} height={28}/>
                    ) : (
                        <img className="cursor-pointer" src={mapIcon} alt={'map icon'} width={28} height={28} />
                    )
                }
            </div>
        </div>
    )
}