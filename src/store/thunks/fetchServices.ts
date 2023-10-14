import { AllServicesMock } from "../../mocks/services"
import { setServices } from "../slices/servicesSlice"

export const fetchServices = () => async (dispatch: any) => {
    try {
        //const response = await fetch('http://localhost:3001/departments')
        //const data = await response.json()
        const data = AllServicesMock;
        dispatch(setServices({ all: data}))
    } catch (error) {

    } finally {

    }
}