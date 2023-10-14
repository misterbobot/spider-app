import React from "react";

import BoxChecked from '../../assets/box-checked.svg';
import BoxUnchecked from '../../assets/box-unchecked.svg';

type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
    label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <>
            <div className="rounded-lg border-darkBlue py-2 px-2 text-black text-text-sm border-[0.5px] flex" onClick={onChange}>
                <div className="mr-1">
                    <img src={checked ? BoxChecked : BoxUnchecked} alt="box"  />
                </div>
                {label}
            </div>
        </>
    );
}