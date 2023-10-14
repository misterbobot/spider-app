import React from "react";
import { TDepartment } from "../../models/deparment";
import { getCurrentDaySchedule } from "../../utils/getCurrentDayScheduleForDepartment";
import Arrow from '../../assets/arrow-right-blue.svg';

type TDepartmentShortScheduleProps = {
    department: TDepartment;
}

export const DepartmentShortSchedule: React.FC<TDepartmentShortScheduleProps> = ({ department }) => {
    return (
        <div className="flex items-center">
            <div className="flex-1 flex flex-col">
                <div className="text-black text-text-m-semibold">
                    Сегодня
                </div>
                <div className="text-text-m-medium text-black">
                    {getCurrentDaySchedule(department)}
                </div>
            </div>
            <div>
                <img src={Arrow} />
            </div>
        </div>
    );
}