import { TDepartment } from "../models/deparment";

export const departmentMock : TDepartment = {
    id: 1,
    salePointName: "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
    address: "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
    serviceStaffAmount: 1,
    openHours: [
        {
            days: "пн",
            hours: "09:00-20:00"
        },
        {
            days: "вт",
            hours: "09:00-20:00"
        },
        {
            days: "ср",
            hours: "09:00-20:00"
        },
        {
            days: "чт",
            hours: "09:00-20:00"
        },
        {
            days: "пт",
            hours: "09:00-20:00"
        },
        {
            days: "сб",
            hours: "10:00-17:00"
        },
        {
            days: "вс",
            hours: "выходной"
        }
    ],
    latitude: 55.733842,
    longitude: 37.588144,
    type: 'office',
    services: [],
}

export const departmentMock2 : TDepartment = {
    id: 2,
    salePointName: "Сочный банкоматик № 7701 Банка ВТБ (ПАО)",
    address: "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
    serviceStaffAmount: 3,
    openHours: [
        {
            days: "пн",
            hours: "09:00-20:00"
        },
        {
            days: "вт",
            hours: "09:00-20:00"
        },
        {
            days: "ср",
            hours: "09:00-20:00"
        },
        {
            days: "чт",
            hours: "09:00-20:00"
        },
        {
            days: "пт",
            hours: "09:00-20:00"
        },
        {
            days: "сб",
            hours: "10:00-17:00"
        },
        {
            days: "вс",
            hours: "выходной"
        }
    ],
    latitude: 55.743326,
    longitude:  37.567430,
    type: 'atm',
    services: [1,2,3],
}