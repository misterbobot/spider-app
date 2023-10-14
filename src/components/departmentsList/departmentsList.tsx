import React from "react";
import { TDepartment, TDepartmentWithTravelTimeInfo } from "../../models/deparment";
import { WideDepartmentCard } from "../wideDepartmentCard/wideDepartmentCard";
import { Divider } from "../divider/divider";
import { sortDeparmentsByMinimumAwaitTime } from "../../utils/sortDeparmentsByMinimumAwaitTime";
import { useAppSelector } from "../../hooks/store";

type TDepartmentsListProps = {
    departments: TDepartmentWithTravelTimeInfo[];
    onDepartmentClick?: (department: TDepartmentWithTravelTimeInfo) => void;
}

export const DepartmentsList: React.FC<TDepartmentsListProps> = ({departments, onDepartmentClick}) => {

    const services = useAppSelector(state => state.services.services).all;

    const sortedDepartments = sortDeparmentsByMinimumAwaitTime(departments, services);

    return (
        <div className="max-h-[60vh] overflow-scroll">
            {sortedDepartments.map((department) => (
                <>
                    <Divider />
                    <div className="py-3 px-4" onClick={() => onDepartmentClick?.(department)}>
                        <WideDepartmentCard department={department} />
                    </div>
                </>
            ))}
        </div>
    );
} 