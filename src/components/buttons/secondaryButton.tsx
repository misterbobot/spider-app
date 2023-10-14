import React from 'react';

type TPrimaryButton = {
    disabled: boolean;
    title: string;
    onClick: () => void;
}

export default function SecondaryButton({ disabled, title, onClick }: TPrimaryButton) {

    function handleClick() {
        if (!disabled) onClick();
    }

    return (
        <button
            type="submit"
            className="flex justify-center items-center w-full rounded-2 h-[50px] bg-primary text-red border border-solid border-secondary"
            onClick={handleClick}
        >
            {title}
        </button>
    )
}