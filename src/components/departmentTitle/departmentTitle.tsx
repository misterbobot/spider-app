import React from "react";

type DepartmentTitleProps = {
    title: string;
}

export const DepartmentTitle: React.FC<DepartmentTitleProps> = ({ title }) => {
    return (
        <>
            <div className="text-text-m-semibold text-black">{title}</div>
        </>
    );
}