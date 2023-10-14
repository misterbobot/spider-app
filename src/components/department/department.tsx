import React from "react";
import { TDepartment } from "../../models/deparment";
import { AtmDepartment } from "./atmDepartment";

type DepartmentProps = {
    department: TDepartment;
}

export const Department: React.FC<DepartmentProps> = ({
    department
}) => {

    if (department.type === 'atm') {
        return <AtmDepartment department={department} />
    }

    return (
        <>
            {department.type}
        </>
    );
}