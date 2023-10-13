import React, { useState } from 'react'
import {NavigationBar} from "../../components/navigationBar/navigationBar";
import { Map } from '../../components/map';

export const HomePage: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [showMap, setShowMap] = useState(true);


    return (
        <>
            <div className="absolute z-10 bottom-10 left-[calc(50vw-100px)]">
                <NavigationBar onClickInfo={() => setShowMap(false)} onClickMap={() => setShowMap(true)} />
            </div>
            {
                showMap ? (
                    <Map />
                ) : (
                    <div className="w-screen h-screen bg-white">

                    </div>
                )
            }
        </>
    );
}