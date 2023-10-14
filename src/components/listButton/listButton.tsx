import React from "react";
import List from "../../assets/list.png";

type ListButtonProps = {
    onClick: () => void;
}

export const ListButton: React.FC<ListButtonProps> = (
    {
        onClick
    }
) => {

    return (
            <div className="h-12 w-12 box-border bg-white rounded-full relative" onClick={onClick}>
                <img src={List} className="h-10 w-8 pt-2 ml-2"  />
            </div>
    );
};