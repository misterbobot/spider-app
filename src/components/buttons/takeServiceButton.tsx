import React from 'react';

type TTakeServiceButton = {
    background: string;
    color: string;
    title: string;
    onClick: () => void;
}

export default function TakeServiceButton({ title, onClick, background, color }: TTakeServiceButton) {

    return (
        <button
            type="submit"
            className="flex gap-4 shadow-card justify-center items-center w-full rounded-2 text-text-m-bold h-[74px]"
            style={{ background, color  }}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

/* Rectangle 3503 */