import React, { useMemo } from "react";
import { TDepartment, TService } from "../../models/deparment";
import Sheet from 'react-modal-sheet';
import { ServiceWaitTimeLabel } from "../serviceWaitTimeLabel/serviceWaitTimeLabel";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { DepartmentsList } from "../departmentsList/departmentsList";
import { setFilters } from "../../store/slices/filtersSlice";
import { useNavigate } from "react-router-dom";
import { useSelectTravelOption } from "../useSelectTravelOption/useSelectTravelOption";
import { useDepartmentsWithTravelDistance } from "../../hooks/useDepartmentsWithTravelDistance";
import { useGeolocation } from "@uidotdev/usehooks";
import { firstNNearestDepartments } from "../../utils/firstNNearestDepartments";

type TNearestDepartmentsSheetProps = {
    service?: TService;
    onClose: () => void;
    isOpen: boolean;
}

export const NearestDepartmentsSheet: React.FC<TNearestDepartmentsSheetProps> = (
    {
        service,
        onClose,
        isOpen
    }
) => {

    const departments: TDepartment[] = useAppSelector((state) => state.departments.departments);

    const departmentsWithServiceProvided = useMemo(() => {
        return departments.filter(department => department.services.find(departmentService => departmentService === service?.id))
    }, [departments, service])

    const geolocation = useGeolocation();

    // todo: sort


    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {ThumbsRow, selected} = useSelectTravelOption();

    const travelMode = useMemo(() => {
        return selected === 0 ? 'BICYCLING' : selected === 1 ? 'DRIVING' : 'WALKING'
    }, [selected])

    const userLocation = useMemo(() => {
        return {
            lat: geolocation.latitude || 55.751715,
            lng: geolocation.longitude || 37.583818
        }
    }, [geolocation.latitude, geolocation.longitude])

    const firstNearestDepartments = useMemo(() => {
        return firstNNearestDepartments(departmentsWithServiceProvided, 15, {
          lat: userLocation.lat,  
          lng: userLocation.lng
        });
    }, [departmentsWithServiceProvided, userLocation.lat, userLocation.lng])

    const {loading, departmentsWithTravelDistance} = useDepartmentsWithTravelDistance({
        departments: firstNearestDepartments,
        userLocation:userLocation,
        travelMode: travelMode
    } );

    if (loading) {
        return null;
    }

    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Content >
                        <div className="py-4">
                            {service?.name && (
                                <div className="px-4">
                                    <div className="text-heading-m text-primary mb-2">
                                        {service.name}
                                    </div>
                                    <div className="mb-2">
                                        <ServiceWaitTimeLabel waitTime={service.averageWaitTime} />
                                    </div>
                                </div>
                            )}
                            <div className={`text-text-m-semibold text-black px-4 mb-3 ${!service?.name && '!text-heading-s text-primary'}`}>
                                Подобрали для вас ближайшие отделения
                            </div>
                            <div className="px-4 mb-3">
                                {ThumbsRow}
                            </div>
                            <DepartmentsList departments={departmentsWithTravelDistance} onDepartmentClick={(deparment) => {
                                if (service) {
                                    dispatch(setFilters({
                                        type: null,
                                        services: [service],
                                    }))
                                    navigate('/map', {
                                        state: {
                                            departmentId: deparment.id
                                        }
                                    })
                                    
                                }
                            }} />
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}