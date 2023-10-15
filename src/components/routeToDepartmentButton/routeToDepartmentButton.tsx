import React from "react";
import { TDepartment } from "../../models/deparment";
import { SmallButton } from "../buttons/smallButton/smallButton";

type RouteToDepartmentButtonProps = {
    department: TDepartment;
}

export const RouteToDepartmentButton: React.FC<RouteToDepartmentButtonProps> = (
    {
        department
    }
) => {
    return (
        <SmallButton onClick={() => {
            window.open(`http://www.google.com/maps/place/${department.latitude},${department.longitude}`)
        }} title="Маршрут" disabled={false} />
    );
}