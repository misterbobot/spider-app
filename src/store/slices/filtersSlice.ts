import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const FiltersSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            type: null,
            services: [],
        },
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
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
