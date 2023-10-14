import React from 'react';

type TServiceCard = {
    title: string;
    description: string;
}

export const ServiceCard = ({ title, description }: TServiceCard) => {
    return (
        <div className="flex flex-col p-3 gap-[10px] rounded-5 w-[153px] h-[135px] border border-solid border-primary">
            <p className="text-primary text-text-m-bold m-0">
                {title}
            </p>

            <p className="text-black text-text-sm">
                {description}
            </p>
        </div>
    )
}