import React from "react";
import { TDepartment } from "../../models/deparment";
import { DepartmentImage } from "../departmentImage/departmentImage";
import { DepartmentTitle } from "../departmentTitle/departmentTitle";
import { DepartmentWaitTime } from "../departmentWaitTime/departmentWaitTime";
import { DepartmentShortSchedule } from "../departmentShortSchedule/departmentShortSchedule";
import { DepartmentServicesLineList } from "../departmentServicesLineList/departmentServicesLineList";
import { RouteToDepartmentButton } from "../routeToDepartmentButton/routeToDepartmentButton";
import { DepartmentTicketStatus } from "../departmentTicketStatus/departmentTicketStatus";

type DepartmentProps = {
    department: TDepartment;
    isInjected?: boolean;
}

export const Department: React.FC<DepartmentProps> = ({
    department,
    isInjected
}) => {

    return (
        <>
            <DepartmentImage department={department} />
            <div className="px-6 py-4">
                <DepartmentTitle title={department.salePointName} />
                <DepartmentWaitTime department={department} />
                {department.type ==='office' &&!isInjected && <div className="mt-3">
                <DepartmentTicketStatus department={department} />
                    </div>}
                <div className="mt-3">
                    <DepartmentShortSchedule department={department} />
                </div>
                <div className="mt-3">
                    <DepartmentServicesLineList department={department} />
                </div>
                <div className="mt-15">
                    <RouteToDepartmentButton department={department} />
                </div>
            </div>
        </>
    );
}