import { TDepartment, TService } from "../models/deparment";

export const filterDepartments = (departments: TDepartment[], filters: {
    type: string | null;
    services: TService[];
}) => {
    const { type, services } = filters;
    if (!type && !services.length) {
        return departments;
    }
    const filteredDepartments = departments.filter((department) => {
        if (type && department.type !== type) {
            return false;
        }
        if (services.length) {
            const departmentServices = department.services;
            const isDepartmentHasAllServices = services.every((service) => {
                return departmentServices.includes(service.id)
            });
            if (!isDepartmentHasAllServices) {
                return false;
            }
        }
        return true;
    });
    return filteredDepartments;
}