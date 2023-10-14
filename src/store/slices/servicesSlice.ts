import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TService } from '../../models/deparment';

type ServicesSliceState = {
    services: {
        all: TService[];
    };
}

const initialState: ServicesSliceState = {
    services: {
        all: [],
    },
};

export const ServicesSlice = createSlice({
    name: 'services',
    initialState: initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload
        },
    }
});

export const selectServices = (state: RootState) => state.services.services;

export const { setServices } = ServicesSlice.actions;

export default ServicesSlice.reducer;
