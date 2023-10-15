import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TDepartment, TTicket } from '../../models/deparment';

type DepartmentsSliceState = {
    departments: TDepartment[];
    isLoading: boolean;
    error: any;
    userTicket: TTicket | null;
}

const initialState: DepartmentsSliceState = {
    departments: [],
    isLoading: false,
    error: null,
    userTicket: null
};

export const departmentsSlice = createSlice({
    name: 'departments',
    initialState: initialState,
    reducers: {
        setDepartments: (state, action: PayloadAction<any>) => {
            state.departments = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        },
        setUserTicket: (state, action: PayloadAction<TTicket | null>) => {
            state.userTicket = action.payload
        }
    }
})

export const selectDepartments = (state: RootState) => state.departments.departments
export const selectIsLoading = (state: RootState) => state.departments.isLoading
export const selectError = (state: RootState) => state.departments.error

export const { setDepartments, setIsLoading, setError, setUserTicket } = departmentsSlice.actions;

export default departmentsSlice.reducer;