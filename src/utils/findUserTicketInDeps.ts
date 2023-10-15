import { TDepartment, TTicket } from "../models/deparment";

export const findUserTicketInDeps = (departments: TDepartment[]) => {
    const uid = localStorage.getItem('uid');

    if (!uid) {
        return null;
    }

    let userTicket: TTicket | null = null;

    departments.forEach((dep) => {
        if (!dep.tickets || userTicket) {
            return;
        }
        dep.tickets.forEach((ticket) => {
            if (ticket.user_id === Number(uid)) {
                userTicket = ticket;
            }
        });
    });

    return userTicket;
}