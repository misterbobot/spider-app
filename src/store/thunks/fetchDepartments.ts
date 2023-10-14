import { departmentsSlice } from '../slices/departmentsSlice'

export const fetchDepartments = () => async (dispatch: any) => {
    dispatch(departmentsSlice.actions.setIsLoading(true))
    try {
        const response = await fetch('http://84.252.129.66:8000/get-departments/')
        const data = await response.json()

        dispatch(departmentsSlice.actions.setDepartments(data))
    } catch (error) {
        dispatch(departmentsSlice.actions.setError(error))
    } finally {
        dispatch(departmentsSlice.actions.setIsLoading(false))
    }
}
