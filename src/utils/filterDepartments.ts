import { TDepartment } from "../models/deparment";

export const filterDepartments = (departments: TDepartment[], filters: {
    type: string | null;
    services: number[];
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
            const departmentServices = department.services.map((service) => service.id);
            const hasService = services.every((service) => departmentServices.includes(service));
            if (!hasService) {
                return false;
            }
        }
        return true;
    });
    return filteredDepartments;
}