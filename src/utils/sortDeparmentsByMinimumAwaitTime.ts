import { TDepartmentWithTravelTimeInfo, TService } from "../models/deparment";
import { calculateDepartmentAvgWaitTime } from "./calculateDepartmentAvgWaitTime";

export const sortDeparmentsByMinimumAwaitTime = (departments:TDepartmentWithTravelTimeInfo[], services: TService[]) => {
    return (
        departments.sort((a, b) => {
            const aAwaitTime = calculateDepartmentAvgWaitTime(a, services);
            const bAwaitTime = calculateDepartmentAvgWaitTime(b, services);

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