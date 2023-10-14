import React from "react";
import { TDepartment } from "../../models/deparment";
import PrimaryButton from "../buttons/primaryButton";
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
        <SmallButton onClick={() => {}} title="Маршрут" disabled={false} />
    );
}