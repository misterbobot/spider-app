import { TDepartment } from "../models/deparment";

export const getDayName = (day: number): string => {
    switch (day) {
        case 0:
            return 'вс';
        case 1:
            return 'пн';
        case 2:
            return 'вт';
        case 3:
            return 'ср';
        case 4:
            return 'чт';
        case 5:
            return 'пт';
        case 6:
            return 'сб';
        default:
            return '';
    }
}

export const getCurrentDaySchedule = (department: TDepartment): string => {
    const today = new Date().getDay();
    if (!department.openHours) {
        return 'Работает как обычно'
    }
    const currentDaySchedule = department.openHours.find((item) => {
        return item.days.toLowerCase().includes(getDayName(today));
    });

    return (currentDaySchedule ? currentDaySchedule.hours : '').replace('-', ' - ');
}