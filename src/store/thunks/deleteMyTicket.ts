import { AppDispatch, RootState } from "../store";

export const deleteMyTicketThunk = (ticketId: number) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {

        fetch('http://84.252.129.66:8000/tickets/'+ticketId+'/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })


    };
}