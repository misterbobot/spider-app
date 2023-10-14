import { TDepartment, TService } from "../models/deparment";

export const removeServicesWithNoDepartmentsAndSetOnlineFirst = (services:TService[], departments: TDepartment[]) => {

    const servicesWithDepartments = services.filter((service) => {
        const departmentsWithService = departments.filter((department) => {
            return department.services.includes(service.id);
        });
        return departmentsWithService.length > 0;
    });

    const onlineServices = servicesWithDepartments.filter((service) => {
        return service.onlineText !== null;
    });

    const offlineServices = servicesWithDepartments.filter((service) => {
        return !service.onlineText;
    });

    return [...onlineServices, ...offlineServices];
}