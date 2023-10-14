import React from "react";
import Filters from "../../../assets/filter.png";

type FiltersButtonProps = {
    onClick: () => void;
}

export const FiltersButton: React.FC<FiltersButtonProps> = (
    {
        onClick
    }
) => {

    return (
            <div className="h-12 w-12 box-border bg-white rounded-full relative" onClick={onClick}>
                <img src={Filters} className="h-10 w-8 pt-2 ml-2"  />
            </div>
    );
};