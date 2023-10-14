import React from "react";
import { TDepartment } from "../../models/deparment";
import { ServiceThumb } from "../serviceThumb/serviceThumb";

type DepartmentServicesLineListProps = {
    department: TDepartment;
}
export const DepartmentServicesLineList: React.FC<DepartmentServicesLineListProps> = ({ department }) => {
    return (
        <>
            <div className="text-text-m-semibold text-black" >
                Услуги
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
                {department.services.map((service, index) => <ServiceThumb key={index} service={service} />)}
            </div>
        </>
    );
}