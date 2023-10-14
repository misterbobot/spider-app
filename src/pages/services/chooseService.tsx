import React from 'react'
import offline from '../../assets/offline.png';
import online from '../../assets/online.png';

import TakeServiceButton from "../../components/buttons/takeServiceButton";
import {Link, useParams} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import { NearestDepartmentsSheet } from '../../components/nearestDepartmentsSheet/nearestDepartmentsSheet';

export const ChooseServicePage: React.FC = () => {

    const { id } = useParams();

    const servicesList = useAppSelector(state => state.services.services).all

    const service = servicesList.find((service) => service.id === Number(id))

    const [isNearestDepartmentSheetOpened, setIsNearestDepartmentSheetOpened] = React.useState(false)

    console.log('!!!!!')

    return (
        <>
        <div className="w-screen bg-white px-6 pb-5 box-border">
             <Header />

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-primary text-heading-m ">{service?.name}</h1>
                        <p className="text-text-sm text-black">
                            {service?.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={online} alt={'online'} height={162} width={162} />

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Услугу можно оформить из дома
                            </p>
                            <p className="text-black text-text-m">
                                {service?.onlineOptions.onlineText || 'Заполните коротку форму и получите услугу в удобное время'}
                            </p>
                        </div>

                        <TakeServiceButton color={'#3D6EFA'} background={'white'} title={'Оформить онлайн'} onClick={() => undefined} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={offline} alt={'offline'} height={162} width={162} />

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Оформить в отделении сегодня
                            </p>
                            <p className="text-black text-text-m">
                                Подберем ближайшее отделение с небольшой загрузкой
                            </p>
                        </div>

                        <Link to={``} onClick={() => setIsNearestDepartmentSheetOpened(true)}>
                            <TakeServiceButton color={'white'} background={'#3D6EFA'} title={'Найти ближайшее отделение'} onClick={() => undefined} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <NearestDepartmentsSheet onClose={() => setIsNearestDepartmentSheetOpened(false)} isOpen={isNearestDepartmentSheetOpened} service={service} />
        </>
    );
}