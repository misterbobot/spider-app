import { TService } from "../models/deparment";
import wallet from '../assets/wallet.png';
import cards from '../assets/cards.png';
import house from '../assets/house.png';
import report from '../assets/report.png';

export const AllServicesMock: TService[] = [
    {
        id: 1,
        name: 'Выдача наличных',
        description: 'возьмите-ка в рот!',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        icon: wallet,
        avgWaitTimeMin: 4

    },  
    {
        id: 2,
        name: 'Пополнение счета',
        description: 'Привет! я использую redux-toolkit',
        onlineOptions: {
            isOnlineAvailable: false,
            onlineText: 'Пополнение счета'
        },
        icon: cards,
        avgWaitTimeMin: 4
    },
    {
        id: 3,
        name: 'Платежи',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        icon: house,
        avgWaitTimeMin: 4
    },
    {
        id: 4,
        name: 'Погашение кредита',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        icon: report,
        avgWaitTimeMin: 4
    },
    {
        id: 5,
        name: 'Обмен валюты',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        avgWaitTimeMin: 4
    },
    {
        id: 6,
        name: 'Прием наличных',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        avgWaitTimeMin: 4
    },
    {
        id: 7,
        name: 'Секстинг',
        onlineOptions: {
            isOnlineAvailable: true,
            onlineText: 'Пополнение счета'
        },
        avgWaitTimeMin: 4
    }
];