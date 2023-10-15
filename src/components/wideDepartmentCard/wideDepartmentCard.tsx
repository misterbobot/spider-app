import React from "react";
import { TDepartment, TDepartmentWithTravelTimeInfo } from "../../models/deparment";
import { DepartmentShortSchedule } from "../departmentShortSchedule/departmentShortSchedule";
import { DepartmentWaitTime } from "../departmentWaitTime/departmentWaitTime";
import { RouteToDepartmentButton } from "../routeToDepartmentButton/routeToDepartmentButton";
import { TravelTimeToDepartment } from "../travelTimeToDepartment";

type TWideDepartmentCardProps = {
    department: TDepartment & {
        distance?: number;
        duration?: number;
    };
}
export const WideDepartmentCard: React.FC<TWideDepartmentCardProps> = ({department}) => {
    return (
        <div className="flex items-center w-full justify-between">
            <div className="flex-1">
                <div className="w-full text-black">
                    {department.type === 'atm' ? 'Банкомат ВТБ' : department.salePointName}
                </div>
                <div className="my-1">
                    <DepartmentShortSchedule department={department} />
                </div>
                <div className="w-[150px]">
                    <DepartmentWaitTime department={department} classNames="leading-5" />
                </div>
            </div>
            <div className="flex flex-col items-end">
                {typeof department.distance !=='undefined' && typeof department.duration !=='undefined' && <div className="mb-2">
                    {/** @ts-ignore */}
                    <TravelTimeToDepartment department={department} />
                </div>}
                <RouteToDepartmentButton department={department} />
            </div>
        </div>
    );
}