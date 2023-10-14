import React from "react";
import { TDepartment, TDepartmentWithTravelTimeInfo } from "../../models/deparment";
import { WideDepartmentCard } from "../wideDepartmentCard/wideDepartmentCard";
import { Divider } from "../divider/divider";
import { sortDeparmentsByMinimumAwaitTime } from "../../utils/sortDeparmentsByMinimumAwaitTime";

type TDepartmentsListProps = {
    departments: TDepartmentWithTravelTimeInfo[];
    onDepartmentClick?: (department: TDepartmentWithTravelTimeInfo) => void;
}

export const DepartmentsList: React.FC<TDepartmentsListProps> = ({departments, onDepartmentClick}) => {

    const sortedDepartments = sortDeparmentsByMinimumAwaitTime(departments);

    return (
        <>
            {sortedDepartments.map((department) => (
                <>
                    <Divider />
                    <div className="py-3 px-4" onClick={() => onDepartmentClick?.(department)}>
                        <WideDepartmentCard department={department} />
                    </div>
                </>
            ))}
        </>
    );
} 