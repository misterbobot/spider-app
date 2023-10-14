import React from "react";
import { TDepartment } from "../../models/deparment";

import Office from '../../assets/office.jpeg';
import Atm from '../../assets/vtb.jpg';

type DepartmentImageProps = {
    department: TDepartment;
}

export const DepartmentImage: React.FC<DepartmentImageProps> = ({ department }) => {

    return (
        <div className="text-black h-40 overflow-hidden rounded-xl -mt-2">
            <img src={ department.type === 'atm' ? Atm : Office } className="w-full  bg-cover" />
        </div>
    );
}