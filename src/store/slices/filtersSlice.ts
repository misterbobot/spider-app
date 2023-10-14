import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TService } from '../../models/deparment';

type FiltersSliceState = {
    filters: {
        type: string | null;
        services: TService[];
    };
}

const initialState: FiltersSliceState = {
    filters: {
        type: null,
        services: [],
    },
};

export const FiltersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },
        clearFilters: (state) => {
            state.filters = {
                type: null,
                services: [],
            };
        }
    }
});

export const selectFilters = (state: RootState) => state.filters.filters;

export const { setFilters, clearFilters } = FiltersSlice.actions;

export default FiltersSlice.reducer;
