import React, { FormEventHandler, useMemo, useState } from 'react'
import {ServiceCard} from "../../components/cards/serviceCard";
import PrimaryButton from "../../components/buttons/primaryButton";
import {Link, useNavigate} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import { removeServicesWithNoDepartmentsAndSetOnlineFirst } from '../../utils/removeServicesWithNoDepartmentsAndOnlineFirst';
import { TService } from '../../models/deparment';
import { NearestDepartmentsSheet } from '../../components/nearestDepartmentsSheet/nearestDepartmentsSheet';

export const ServicesPage: React.FC = () => {

    const services = useAppSelector(state => state.services.services).all
    const [activeService, setActiveService] = React.useState<undefined | TService>(undefined)

    const navigate = useNavigate();

    const departments = useAppSelector(state => state.departments.departments)
    const [isNearestDepartmentSheetOpened, setIsNearestDepartmentSheetOpened] = React.useState(false)
    const filteredServices = useMemo(() => {
        return removeServicesWithNoDepartmentsAndSetOnlineFirst(services,departments)
    }, [services, departments])

    const [inputText, setInputText] = useState('')

    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <Header hideBackButton />

            <NearestDepartmentsSheet onClose={() => setIsNearestDepartmentSheetOpened(false)} isOpen={isNearestDepartmentSheetOpened} service={activeService} />
            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5">
                        {
                            filteredServices.slice(0,2).map((service) => (
                                <Link to={service.onlineText ? `/services/${service.id}/choose-service` : ''} onClick={service.onlineText? undefined: ( ) => {
                                    setActiveService(service)
                                    setTimeout(() => setIsNearestDepartmentSheetOpened(true), 300)
                                }} >
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

                    <div className="flex flex-col gap-4 mb-[120px]">
                        <input
                            value={inputText}
                            onChange={(value) => setInputText(value.target.value)}
                            className="w-full text-black h-[60px] p-4 border border-solid border-primary rounded-10" type="text" placeholder="Ваш запрос"/>
 
                            <PrimaryButton disabled={false} title={"Далее"} onClick={() => {
                                                            navigate('/chat', {
                                                                state: {
                                                                    msg: inputText
                                                                }
                                                            });
                            }} />

                    </div>
                </div>
            </div>
        </div>
    );
}