import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const departmentsSlice = createSlice({
    name: 'departments',
    initialState: {
        departments: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setDepartments: (state, action: PayloadAction<any>) => {
            state.departments = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        }
    }
})

export const selectDepartments = (state: RootState) => state.departments.departments
export const selectIsLoading = (state: RootState) => state.departments.isLoading
export const selectError = (state: RootState) => state.departments.error

export const { setDepartments, setIsLoading, setError } = departmentsSlice.actions;

export default departmentsSlice.reducer;