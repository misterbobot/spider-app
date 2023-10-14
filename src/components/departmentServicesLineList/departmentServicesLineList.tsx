import React from "react";
import { TDepartment } from "../../models/deparment";
import { ServiceThumb } from "../serviceThumb/serviceThumb";
import { useAppSelector } from "../../hooks/store";

type DepartmentServicesLineListProps = {
    department: TDepartment;
}
export const DepartmentServicesLineList: React.FC<DepartmentServicesLineListProps> = ({ department }) => {

    const services = useAppSelector(state => state.services.services).all;

    return (
        <>
            <div className="text-text-m-semibold text-black" >
                {department.services.length > 0 && "Услуги"}
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
                {department.services.map((service, index) => {
                    const sss = services.find(x => x.id === service);

                    if (!sss) return null;
                    return <ServiceThumb key={index} service={sss} />
                })}
            </div>
        </>
    );
}