import { setServices } from "../slices/servicesSlice"

export const fetchServices = () => async (dispatch: any) => {
    try {
        const response = await fetch('http://158.160.111.178:8000/services/')
        const data = await response.json()

        dispatch(setServices({ all: data}))
    } catch (error) {

    } finally {

    }
}