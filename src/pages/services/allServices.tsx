import React, { useMemo } from 'react'
import {ServiceCardWithIcon} from "../../components/cards/serviceCardWithIcon";
import {Link, useNavigate} from "react-router-dom";
import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import { NearestDepartmentsSheet } from '../../components/nearestDepartmentsSheet/nearestDepartmentsSheet';
import { TService } from '../../models/deparment';
import { removeServicesWithNoDepartmentsAndSetOnlineFirst } from '../../utils/removeServicesWithNoDepartmentsAndOnlineFirst';

export const AllServicesPage: React.FC = () => {

    const navigate = useNavigate();

    const [isNearestDepartmentSheetOpened, setIsNearestDepartmentSheetOpened] = React.useState(false)
    const servicesList = useAppSelector(state => state.services.services).all
    

    const [activeService, setActiveService] = React.useState<undefined | TService>(undefined)

    const departments = useAppSelector(state => state.departments.departments)
    const filteredServices = useMemo(() => {
        return removeServicesWithNoDepartmentsAndSetOnlineFirst(servicesList,departments)
    }, [servicesList, departments])

    return (
        <>
        <div className="w-screen h-screen bg-white px-6 box-border">
            <Header /> 

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>
                    <NearestDepartmentsSheet onClose={() => setIsNearestDepartmentSheetOpened(false)} isOpen={isNearestDepartmentSheetOpened} service={activeService} />
                    <div className="flex gap-5 flex-wrap justify-center">
                        {
                            filteredServices.map((service) => (
                                <Link className="w-[calc(50%-10px)]" key={service.id} to={''} onClick={() => {
                                    if (service.onlineText) {
                                        navigate(`/services/${service.id}/choose-service`);
                                        return;
                                    }
                                    setActiveService(service)
                                    setTimeout(() => setIsNearestDepartmentSheetOpened(true), 300)
                                }}>
                                    <ServiceCardWithIcon title={service.name} description={service.description || ''} icon={''} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
        
        </>
    );
}