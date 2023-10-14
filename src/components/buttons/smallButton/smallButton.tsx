import React from "react";

type SmallButtonProps = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
    classNames?: string;
}

export const SmallButton: React.FC<SmallButtonProps> = (
    {
        title,
        onClick,
        disabled,
        classNames
    }    
) => {
    return (
        <div onClick={onClick} className={`py-3 px-7 bg-darkBlue rounded-xl w-min whitespace-nowrap text-text-sm-semibold ${classNames}` }>
            {title}
        </div>
    );
}