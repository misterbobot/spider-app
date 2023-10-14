import React from "react";
import { SmallButton } from "../smallButton/smallButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { clearFilters } from "../../../store/slices/filtersSlice";

export const ClearFiltersButton:React.FC = () => {

    const filters = useAppSelector(state => state.filters.filters);
    const dispatch = useAppDispatch();

    const hasActiveFilters = filters.type !== null || filters.services.length > 0;

    const onButtonClick = () => {
        dispatch(clearFilters())
    }

    if (!hasActiveFilters) {
        return null
    }

    return (
        <SmallButton onClick={onButtonClick} classNames="h-min !rounded-3xl" title="Сбросить фильтры" />
    );
}