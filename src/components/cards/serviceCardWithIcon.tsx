import React from 'react';

type TServiceCardWithIcon = {
    title: string;
    description: string;
    icon: string;
}

export const ServiceCardWithIcon = ({ title, description, icon }: TServiceCardWithIcon) => {
    return (
        <div className="flex flex-col relative overflow-hidden p-3 gap-[10px] rounded-5 h-[175px] border border-solid border-primary">
            <p className="text-primary text-text-m-bold m-0">
                {title}
            </p>

            <p className="text-black text-text-sm">
                {description}
            </p>

            <img className="absolute bottom-[-5px] right-[-10px]" src={icon} alt={'icon'} width={62} height={62} />
        </div>
    )
}