import React from "react";
import { TDepartment } from "../../models/deparment";

type DepartmentWaitTimeProps = {
    department: TDepartment;
    classNames?: string;
}

export const DepartmentWaitTime : React.FC<DepartmentWaitTimeProps> = ({department, classNames}) => {
    return (
        <>
            <div className={`text-text-m-semibold text-darkBlue ${classNames}`}>
                {`Примерно ${department.workLoad.avgWaitTimeMin} минут в очереди`}
            </div>
        </>
    );
}