import React from "react";
import { TService } from "../../models/deparment";

type TServiceThumbProps = {
    service: TService;
}

export const ServiceThumb: React.FC<TServiceThumbProps> = ({ service }) => {
    return (
        <div className="rounded-3xl border-darkBlue py-1 px-5 text-darkBlue text-text-s-medium border-[0.5px] whitespace-nowrap ">
            {service.name}
        </div>
    )
}