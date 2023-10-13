import React from "react";
import {MapComponent} from "../../components/map";
import {NavigationBar} from "../../components/navigationBar/navigationBar";

export const HomePage: React.FC = () => {
    return (
        <>
            <div className="absolute z-10 bottom-10 left-[calc(50vw-100px)]">
                <NavigationBar />
            </div>
            <MapComponent />
        </>
    );
}