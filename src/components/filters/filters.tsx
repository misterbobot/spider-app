import React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setFilters } from "../../store/slices/filtersSlice";

export const Filters: React.FC = () => {

    const filters = useAppSelector(state => state.filters.filters);
    const services = useAppSelector(state => state.services.services).all;
    const dispatch = useAppDispatch();

    return (
        <div className="px-4">
            <div className="text-text-m-semibold text-black">Тип</div>
            <div className="mt-2 flex gap-2 flex-wrap">
                <Checkbox label="Банкоматы" checked={filters.type === 'atm'} onChange={() => {
                    dispatch(setFilters({
                        type: filters.type === 'atm' ? null : 'atm'
                    }))
                }} />
                <Checkbox label="Отделения" checked={filters.type === 'office'} onChange={() => {
                    dispatch(setFilters({
                        type: filters.type === 'office' ? null : 'office'
                    }))
                }} />
            </div>
            <div className="text-text-m-semibold text-black mt-4">Услуги</div>
            <div className="mt-2 flex gap-2 flex-wrap mb-6 max-h-[300px] overflow-scroll">
                {services?.map((service, index) => <Checkbox key={index} label={service.name} checked={
                    filters.services.find(x => x.id === service.id) ? Boolean(filters.services.find(x => x.id === service.id)) : false
                } onChange={() => {
                    dispatch(setFilters({
                        services: filters.services.find(x => x.id === service.id) ? filters.services.filter(x => x.id !== service.id) : [...filters.services, service]
                    }))
                }} />)}
            </div>
        </div>
    );
}