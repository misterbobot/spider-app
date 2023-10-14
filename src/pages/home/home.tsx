import React, { useEffect, useState } from 'react'
import {NavigationBar} from "../../components/navigationBar/navigationBar";
import { Map } from '../../components/map';
import {ServicesPage} from "../services";
import { useDispatch } from 'react-redux';
import { fetchServices } from '../../store/thunks/fetchServices';

export const HomePage: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [showMap, setShowMap] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchServices())
    }, [dispatch]);


    return (
        <>
            <div className="absolute z-10 bottom-10 left-[calc(50vw-100px)]">
                <NavigationBar onClickInfo={() => setShowMap(false)} onClickMap={() => setShowMap(true)} />
            </div>
            {
                showMap ? (
                    <Map />
                ) : (
                    <ServicesPage />
                )
            }
        </>
    );
}