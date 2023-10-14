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
        onlineText: 'Пополнение счета',
        averageWaitTime: 4

    },  
    {
        id: 2,
        name: 'Пополнение счета',
        description: 'Привет! я использую redux-toolkit',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    },
    {
        id: 3,
        name: 'Платежи',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    },
    {
        id: 4,
        name: 'Погашение кредита',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    },
    {
        id: 5,
        name: 'Обмен валюты',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    },
    {
        id: 6,
        name: 'Прием наличных',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    },
    {
        id: 7,
        name: 'Секстинг',
        onlineText: 'Пополнение счета',
        averageWaitTime: 4
    }
];