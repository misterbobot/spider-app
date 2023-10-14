import { TService } from "../models/deparment";

export const AllServicesMock: TService[] = [
    {
        id: 1,
        name: 'Выдача наличных',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    },  
    {
        id: 2,
        name: 'Пополнение счета',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    },
    {
        id: 3,
        name: 'Платежи',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    },
    {
        id: 4,
        name: 'Погашение кредита',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    },
    {
        id: 5,
        name: 'Обмен валюты',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    },
    {
        id: 6,
        name: 'Прием наличных',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
    }
];