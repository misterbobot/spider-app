import React from 'react'
import {ServiceCardWithIcon} from "../../components/cards/serviceCardWithIcon";
import {Link, useNavigate} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';

export const AllServicesPage: React.FC = () => {


    const servicesList = useAppSelector(state => state.services.services).all

    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <Header /> 

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5 flex-wrap justify-center">
                        {
                            servicesList.map((service) => (
                                <Link className="w-[calc(50%-10px)]" key={service.id} to={
                                    service.onlineOptions.isOnlineAvailable ? `/services/${service.id}/choose-service` : `/services/${service.id}/offline`
                                }>
                                    <ServiceCardWithIcon title={service.name} description={service.description || ''} icon={service.icon} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}