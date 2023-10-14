import React from 'react'

import TakeServiceButton from "../../components/buttons/takeServiceButton";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';

export const OfflinePage: React.FC = () => {

    const { id } = useParams();

    const servicesList = useAppSelector(state => state.services.services).all

    const service = servicesList.find((service) => service.id === Number(id))

    return (
        <div className="w-screen min-h-screen h-full relative bg-white px-6 pb-5 box-border">
            <Header />

            <div className="h-full relative flex flex-col gap-[50px]">
                <div>
                    <h1 className="text-primary text-heading-m ">{service?.name}</h1>
                    <p className="text-text-sm text-black">
                        {service?.description}
                    </p>
                </div>

                <div className="w-full h-[350px] rounded-4 shadow-card">

                </div>

                <div className="h-full relative flex flex-col gap-4 justify-between">
                    <div>
                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Ближайшее отделение:
                            </p>
                            <p className="text-black text-text-m">
                                Красная площадь, 3
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Приблизительное время ожидания в живой очереди:
                            </p>
                            <p className="text-black text-text-m">
                                10 - 15 минут
                            </p>
                        </div>
                    </div>

                    <TakeServiceButton color={'white'} background={'#3D6EFA'} title={'Проложить маршрут'} onClick={() => undefined} />
                </div>
            </div>
        </div>
    );
}