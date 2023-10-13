import React from "react";
import GoogleMapReact from 'google-map-react';
import activeIcon from './activeIcon.svg';
import defaultIcon from './defaultIcon.svg';

export function MapComponent(){
    const defaultProps = {
        center: {
            lat: 55.751715,
            lng: 37.583818
        },
        zoom: 11
    };

    const MARKERS = [
        {lat: 55.769233, lng: 37.573028, active: true},
        {lat: 55.758928, lng: 37.598745, active: false},
        {lat: 55.733842, lng: 37.588144, active: false},
        {lat: 55.752658, lng: 37.626332, active: false},
        {lat: 55.743326, lng: 37.567430, active: false},
    ]

    // @ts-ignore
    function renderMarkers(map, maps) {
        MARKERS.map(({active, ...position}) => {
            new maps.Marker({
                position,
                map,
                icon: active ? activeIcon : defaultIcon,
                title: 'Hello World!'
            });
        })
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>
        </div>
    );
}