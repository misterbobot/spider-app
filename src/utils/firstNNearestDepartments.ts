import { TDepartment } from "../models/deparment";
import { distanceBetween2Points } from "./distanceBetween2Points";

export const firstNNearestDepartments = (departments: TDepartment[], n: number, userLocation: {
    lat: number;
    lng: number;
}) => {
    const sortedDepartments = [...departments].sort((a, b) => {
        const aDistance = distanceBetween2Points(a.latitude, a.longitude, userLocation.lat, userLocation.lng);
        const bDistance = distanceBetween2Points(b.latitude, b.longitude, userLocation.lat, userLocation.lng);
        if (aDistance < bDistance) {
            return -1;
        }
        if (aDistance > bDistance) {
            return 1;
        }
        return 0;
    });
    return sortedDepartments.slice(0, n);
}