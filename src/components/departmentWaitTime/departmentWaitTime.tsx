import React from "react";
import { TDepartment } from "../../models/deparment";
import { useAppSelector } from "../../hooks/store";
import { calculateDepartmentAvgWaitTime } from "../../utils/calculateDepartmentAvgWaitTime";

type DepartmentWaitTimeProps = {
    department: TDepartment;
    classNames?: string;
}

export const DepartmentWaitTime : React.FC<DepartmentWaitTimeProps> = ({department, classNames}) => {

    const services = useAppSelector(state => state.services.services).all;

    return (
        <>
            <div className={`text-text-m-semibold text-darkBlue ${classNames}`}>
                {`Примерно ${calculateDepartmentAvgWaitTime(department, services)} минут в очереди`}
            </div>
        </>
    );
}