import React, { useMemo } from "react";
import Sheet from 'react-modal-sheet';
import { TDepartment } from "../../models/deparment";
import { useDepartmentsWithTravelDistance } from "../../hooks/useDepartmentsWithTravelDistance";
import { useGeolocation } from "@uidotdev/usehooks";
import { useSelectTravelOption } from "../useSelectTravelOption/useSelectTravelOption";
import { DepartmentsList } from "../departmentsList/departmentsList";
import { firstNNearestDepartments } from "../../utils/firstNNearestDepartments";

type DepartmentsListBottomSheetProps = {
    departments: TDepartment[];
    isOpen: boolean;
    onClose: () => void;
    openDepartmentSheet?: (department: TDepartment) => void;
}

export const DepartmentsListBottomSheet: React.FC<DepartmentsListBottomSheetProps> = (
    {
        departments,
        isOpen,
        onClose,
        openDepartmentSheet
    }
) => {

    const geolocation = useGeolocation();

    const userPosition = useMemo(() => {
        return {
            lat: geolocation.latitude || 55.751715,
            lng: geolocation.longitude || 37.583818
        }
    }
    , [geolocation.latitude, geolocation.longitude])

    const {ThumbsRow, selected} = useSelectTravelOption();

    const travelMode = useMemo(() => {
        return selected === 0 ? 'BICYCLING' : selected === 1 ? 'DRIVING' : 'WALKING'
    }, [selected])

    const firstNearestDepartments = useMemo(() => {
        return firstNNearestDepartments(departments, 15, {
          lat: userPosition.lat,  
          lng: userPosition.lng
        });
    }, [departments, userPosition.lat, userPosition.lng])
        

    const {loading, departmentsWithTravelDistance} = useDepartmentsWithTravelDistance({
        departments: firstNearestDepartments,
        userLocation: userPosition,
        travelMode: travelMode
    })

    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Content >
                        <div className="py-4">
                            <div className="text-black text-heading-s px-3 mb-3">
                                Отделения списком. Если так удобнее
                            </div>
                            <div className="px-3 mb-3">
                                {ThumbsRow}
                            </div>
                            <DepartmentsList departments={departmentsWithTravelDistance} onDepartmentClick={(deparment) => {
                                    onClose();
                                    openDepartmentSheet?.(deparment)
                                }} />
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
};