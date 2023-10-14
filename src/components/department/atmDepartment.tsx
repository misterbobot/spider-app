import React from "react";
import { TDepartment } from "../../models/deparment";
import { DepartmentImage } from "../departmentImage/departmentImage";
import { DepartmentTitle } from "../departmentTitle/departmentTitle";
import { DepartmentWaitTime } from "../departmentWaitTime/departmentWaitTime";
import { DepartmentShortSchedule } from "../departmentShortSchedule/departmentShortSchedule";
import { DepartmentServicesLineList } from "../departmentServicesLineList/departmentServicesLineList";

type DepartmentProps = {
    department: TDepartment;
}

export const AtmDepartment: React.FC<DepartmentProps> = ({ department }) => {
    return (
        <>
            <DepartmentImage department={department} />
            <div className="px-6 py-4">
                <DepartmentTitle title={department.salePointName} />
                <DepartmentWaitTime department={department} />
                <div className="mt-3">
                    <DepartmentShortSchedule department={department} />
                </div>
                <div className="mt-3">
                    <DepartmentServicesLineList department={department} />
                </div>
            </div>
        </>
    );
}