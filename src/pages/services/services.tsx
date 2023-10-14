import React from 'react'
import {ServiceCard} from "../../components/cards/serviceCard";
import PrimaryButton from "../../components/buttons/primaryButton";
import {Link} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';

export const ServicesPage: React.FC = () => {

    const services = useAppSelector(state => state.services.services).all

    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <Header hideBackButton />

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5">
                        {
                            services.slice(0,2).map((service) => (
                                <Link to={
                                    service.onlineOptions.isOnlineAvailable ? `/services/${service.id}/choose-service` : `/services/${service.id}/offline`
                                } >
                                    <ServiceCard title={service.name} description={service.description || ''} />
                                </Link>
                            ))
                        }
                    </div>

                    <Link to={'/services'}>
                        <PrimaryButton disabled={false} title={"Смотреть все"} onClick={() => undefined} />
                    </Link>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-black text-heading-m m-0">
                            Получить услугу
                        </h2>

                        <p className="text-text-m text-black m-0">
                            Наш искуственный интеллект поможет решить любую вашу проблему
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <input className="w-full h-[60px] p-4 border border-solid border-primary rounded-10" type="text" placeholder="Ваш запрос"/>
                        <PrimaryButton disabled={false} title={"Далее"} onClick={() => undefined} />
                    </div>
                </div>
            </div>
        </div>
    );
}