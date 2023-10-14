import React from "react";

type SmallButtonProps = {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

export const SmallButton: React.FC<SmallButtonProps> = (
    {
        title,
        onClick,
        disabled
    }    
) => {
    return (
        <div className="py-3 px-7 bg-darkBlue rounded-xl w-min whitespace-nowrap text-text-sm-semibold">
            {title}
        </div>
    );
}