import React from "react";
import { TDepartment, TDepartmentWithTravelTimeInfo } from "../models/deparment";

type TravelTimeToDepartmentProps = {
    department: TDepartmentWithTravelTimeInfo;
}

export const TravelTimeToDepartment: React.FC<TravelTimeToDepartmentProps> = ({
    department,
}) => {

    return (
        <>
            <div className="text-black text-text-s-light">
                {Math.round(department.distance)} км; {Math.round(department.duration)} минут(ы)
            </div>
        </>
    );
}