import React from 'react';

type TPrimaryButton = {
    disabled: boolean;
    title: string;
    onClick: () => void;
}

export default function PrimaryButton({ title, onClick }: TPrimaryButton) {

    return (
        <button
            type="submit"
            className="flex gap-4 bg-primary justify-center items-center w-full rounded-8 text-heading-ss-bold h-[60px]"
            onClick={onClick}
        >
            {title}

            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.1251 13.0607C32.7109 12.4749 32.7109 11.5251 32.1251 10.9393L22.5792 1.3934C21.9934 0.807611 21.0436 0.807611 20.4578 1.3934C19.8721 1.97919 19.8721 2.92893 20.4578 3.51472L28.9431 12L20.4578 20.4853C19.8721 21.0711 19.8721 22.0208 20.4578 22.6066C21.0436 23.1924 21.9934 23.1924 22.5792 22.6066L32.1251 13.0607ZM0 13.5H31.0645V10.5H0V13.5Z" fill="white"/>
            </svg>
        </button>
    )
}