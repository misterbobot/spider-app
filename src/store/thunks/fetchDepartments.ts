import { TDepartment } from '../../models/deparment'
import { findUserTicketInDeps } from '../../utils/findUserTicketInDeps'
import { departmentsSlice } from '../slices/departmentsSlice'

export const fetchDepartments = () => async (dispatch: any) => {
    dispatch(departmentsSlice.actions.setIsLoading(true))
    try {
        const response = await fetch('http://158.160.111.178:8000/get-departments/')
        const data = await response.json() as TDepartment[];

        const userTicket = findUserTicketInDeps(data);

        dispatch(departmentsSlice.actions.setDepartments(data))
        dispatch(departmentsSlice.actions.setUserTicket(userTicket))
    } catch (error) {
        dispatch(departmentsSlice.actions.setError(error))
    } finally {
        dispatch(departmentsSlice.actions.setIsLoading(false))
    }
}
