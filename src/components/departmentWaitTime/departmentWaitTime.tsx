import React from "react";
import { TDepartment } from "../../models/deparment";

type DepartmentWaitTimeProps = {
    department: TDepartment;
}

export const DepartmentWaitTime : React.FC<DepartmentWaitTimeProps> = ({department}) => {
    return (
        <>
            <div className="text-text-m-semibold text-darkBlue">
                {`ожидание примерно ${department.workLoad.avgWaitTimeMin} минут`}
            </div>
        </>
    );
}