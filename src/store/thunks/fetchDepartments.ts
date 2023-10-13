// thunk that fetches departments from the server, now return mock

import { departmentMock, departmentMock2 } from '../../mocks/departments'
import { departmentsSlice } from '../slices/departmentsSlice'

export const fetchDepartments = () => async (dispatch: any) => {
    dispatch(departmentsSlice.actions.setIsLoading(true))
    try {
        //const response = await fetch('http://localhost:3001/departments')
        //const data = await response.json()

        const data = [
            departmentMock,
            departmentMock2
        ]
        dispatch(departmentsSlice.actions.setDepartments(data))
    } catch (error) {
        dispatch(departmentsSlice.actions.setError(error))
    } finally {
        dispatch(departmentsSlice.actions.setIsLoading(false))
    }
}
