import React from "react";

type TMarker = {
    lat: number;
    lng: number;
}

export function Marker({ lat, lng }: TMarker){

    // @ts-ignore
    return (<div lat={lat} lng={lng} style={{ height: '100vh', width: '100%' }}></div>);
}