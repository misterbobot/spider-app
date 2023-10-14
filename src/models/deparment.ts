/**
 *     {
        "salePointName": "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",        "status": "открытая",
        "openHours": [
            {
                "days": "пн",
                "hours": "09:00-18:00"
            },
            {
                "days": "вт",
                "hours": "09:00-18:00"
            },
            {
                "days": "ср",
                "hours": "09:00-18:00"
            },
            {
                "days": "чт",
                "hours": "09:00-18:00"
            },
            {
                "days": "пт",
                "hours": "09:00-17:00"
            },
            {
                "days": "сб",
                "hours": "выходной"
            },
            {
                "days": "вс",
                "hours": "выходной"
            }
        ],
        "rko": "есть РКО",        "openHoursIndividual": [
            {
                "days": "пн",
                "hours": "09:00-20:00"
            },
            {
                "days": "вт",
                "hours": "09:00-20:00"
            },
            {
                "days": "ср",
                "hours": "09:00-20:00"
            },
            {
                "days": "чт",
                "hours": "09:00-20:00"
            },
            {
                "days": "пт",
                "hours": "09:00-20:00"
            },
            {
                "days": "сб",
                "hours": "10:00-17:00"
            },
            {
                "days": "вс",
                "hours": "выходной"
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

export type TOpenHours = {
    days: string;
    hours: string;
}

export type TService = {
    id: number;
    name: string;
    description?: string;
    onlineOptions: {
        isOnlineAvailable: boolean;
        onlineText?: string;
    };
    icon?: string;
    avgWaitTimeMin: number;
}

export type TDepartmentWorkLoad = {
    avgWaitTimeMin: number;
}

export type TDepartment = {
    salePointName: string;
    address: string;
    status: string;
    openHours: TOpenHours[];
    rko: string;
    openHoursIndividual: TOpenHours[];
    officeType: string;
    salePointFormat: string;
    suoAvailability: string;
    hasRamp: string;
    latitude: number;
    longitude: number;
    metroStation: null;
    distance: number;
    kep: boolean;
    myBranch: boolean;
    type: 'department' | 'atm';
    services: TService[];
    workLoad: TDepartmentWorkLoad;
}

export type TDepartmentWithTravelTimeInfo = TDepartment & {
    distance: number;
    duration: number;
};