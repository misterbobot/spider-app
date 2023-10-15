import React, { useEffect } from 'react'
import {NavigationBar} from "../../components/navigationBar/navigationBar";
import { Map } from '../../components/map';
import {ServicesPage} from "../services";
import { useDispatch } from 'react-redux';
import { fetchServices } from '../../store/thunks/fetchServices';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { EQueuePage } from '../equeue/equeue';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchServices())
    }, [dispatch]);

    const isInfoPage = location.pathname === '/info';
    const isQueuePage = location.pathname === '/queue';
    return (
        <>
            <div className="fixed z-10 bottom-10 left-[calc(50vw-100px)]">
                <NavigationBar
                    onClickInfo={() => navigate('/info', {replace: true})}
                    onClickMap={() => navigate('/map', {replace: true})}
                    onClickQueue={() => navigate('/queue', {replace: true})}
                    activeTab={isInfoPage ? 'info' : isQueuePage? 'queue' : 'map'}
                />
            </div>
            <Routes>
                <Route path='/info' element={<ServicesPage />} />
                <Route path='/queue' element={<EQueuePage />} />
                <Route path={'*'} element={ <Map />} />
            </Routes>
        </>
    );
}