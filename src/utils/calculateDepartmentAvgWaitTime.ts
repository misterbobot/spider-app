import { TDepartment, TService } from "../models/deparment";

export const calculateDepartmentAvgWaitTime = (department: TDepartment, services: TService[]) => {
    if (!department.tickets) {
        return 0;
    }

    const departmentTickets = department.tickets;

    const waitSum = departmentTickets.reduce((acc, ticket) => {
        const service = services.find((service) => service.id === ticket.service);
        if (!service) {
            return acc;
        }
        return acc + service.averageWaitTime;
    }, 0);

    return waitSum / department.serviceStaffAmount;

}