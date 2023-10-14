import { TDepartmentWithTravelTimeInfo } from "../models/deparment";

export const sortDeparmentsByMinimumAwaitTime = (departments:TDepartmentWithTravelTimeInfo[]) => {
    return (
        departments.sort((a, b) => {
            const aAwaitTime = a.duration + a.workLoad.avgWaitTimeMin;
            const bAwaitTime = b.duration + b.workLoad.avgWaitTimeMin;

            if (aAwaitTime < bAwaitTime) {
                return -1;
            }
            if (aAwaitTime > bAwaitTime) {
                return 1;
            }
            return 0;
        })
    );
}