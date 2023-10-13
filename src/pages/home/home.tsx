import React, { useState } from 'react'
import {NavigationBar} from "../../components/navigationBar/navigationBar";
import { Map } from '../../components/map';

export const HomePage: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="absolute z-10 bottom-10 left-[calc(50vw-100px)]">
                <NavigationBar />
            </div>
            <Map />
        </>
    );
}