import { TDepartment } from "../models/deparment";

/*
{
        "salePointName": "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",        "status": "открытая",
        "openHours": [
            {
                days: "пн",
                hours: "09:00-18:00"
            },
            {
                days: "вт",
                hours: "09:00-18:00"
            },
            {
                days: "ср",
                hours: "09:00-18:00"
            },
            {
                days: "чт",
                hours: "09:00-18:00"
            },
            {
                days: "пт",
                hours: "09:00-17:00"
            },
            {
                days: "сб",
                hours: "выходной"
            },
            {
                days: "вс",
                hours: "выходной"
            }
        ],
        "rko": "есть РКО",        "openHoursIndividual": [
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
        "officeType": "Да (Зона Привилегия)",
        "salePointFormat": "Универсальный",
        "suoAvailability": "Y",
        "hasRamp": "N",
        "latitude": 56.184479,
        "longitude": 36.984314,
        "metroStation": null,
        "distance": 62105,
        "kep": true,
        "myBranch": false
    },
*/

export const departmentMock : TDepartment = {
    salePointName: "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
    address: "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
    openHours: [
        {
            days: "пн",
            hours: "09:00-18:00"
        }
    ],
    rko: "есть РКО",
    openHoursIndividual: [
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
    officeType: "Да (Зона Привилегия)",
    salePointFormat: "Универсальный",
    suoAvailability: "Y",
    hasRamp: "N",
    latitude: 55.733842,
    longitude: 37.588144,
    metroStation: null,
    distance: 62105,
    kep: true,
    myBranch: false,
    status: "открытая",
    type: 'department',
    services: [],
    workLoad: {
        avgWaitTimeMin: 10
    }
}

export const departmentMock2 : TDepartment = {
    salePointName: "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
    address: "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
    openHours: [
        {
            days: "пн",
            hours: "09:00-18:00"
        }
    ],
    rko: "есть РКО",
    openHoursIndividual: [
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
    officeType: "Да (Зона Привилегия)",
    salePointFormat: "Универсальный",
    suoAvailability: "Y",
    hasRamp: "N",
    latitude: 55.743326,
    longitude:  37.567430,
    metroStation: null,
    distance: 62105,
    kep: true,
    myBranch: false,
    status: "открытая",
    type: 'atm',
    services: [
        {
            id: 1,
            name: 'Выдача наличных'
        },
        {
            id: 2,
            name: 'Пополнение счета'
        },
        {
            id: 3,
            name: 'Платежи'
        },
        {
            id: 4,
            name: 'Погашение кредита'
        },
        {
            id: 5,
            name: 'Обмен валюты'
        },
        {
            id: 6,
            name: 'Прием наличных'
        }
    ],
    workLoad: {
        avgWaitTimeMin: 5
    }
}