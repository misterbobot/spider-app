import React, { useCallback, useMemo } from "react";

type TSelectableThumbProps = {
    icon: string;
    activeIcon: string;
    isSelected: boolean;
    onSelect: () => void;
}

export const SelectableThumb: React.FC<TSelectableThumbProps> = ({
    icon,
    isSelected,
    onSelect,
    activeIcon
}) => {
    return (
        <div className={`rounded-2xl px-2 border-2 border-primary ${!isSelected ? 'bg-white border-solid  ' : 'bg-primary ' } `} onClick={onSelect}>
            <img src={ !isSelected ? activeIcon : icon } height={24} width={24} />
        </div>
    );
}


type TuseSelectableThumbsRowProps = {
    options: {
        icon: string,
        activeIcon: string;
    }[]
}

type TThumbsRowProps = {
    options: {
        icon: string,
        activeIcon: string;
    }[],
    selected: number;
    onSelect: (index: number) => void;
}

const ThumbsRow: React.FC<TThumbsRowProps> = (props:TThumbsRowProps ) => {
    return (
        <div className="flex gap-2">
            {props.options.map((option, index) => {
                return (
                    <SelectableThumb
                        key={index}
                        icon={option.icon}
                        isSelected={props.selected === index}
                        onSelect={() => props.onSelect(index)}
                        activeIcon={option.activeIcon}
                    />
                );
            })}
        </div>
    );
}


export const useSelectableThumbsRow = (props: TuseSelectableThumbsRowProps) => {
    const [selected, setSelected] = React.useState(0);

    const select = useCallback((index: number) => {
        setSelected(index);
    }, []);

    const ThumbsRw = useMemo(() => <ThumbsRow
        options={props.options}
        selected={selected}
        onSelect={select}
    />, [props.options, select, selected]);

    return {
        ThumbsRw,
        selected
    }
}