import React from 'react'
import logo from './logo.svg';
import PrimaryButton from "../../components/buttons/primaryButton";
import wallet from '../../assets/wallet.png';
import cards from '../../assets/cards.png';
import house from '../../assets/house.png';
import report from '../../assets/report.png';
import {ServiceCardWithIcon} from "../../components/cards/serviceCardWithIcon";

const SERVICES = [
    {
        title: 'Снять наличные',
        description: 'Доллар евро и юани рубли',
        icon: wallet
    },
    {
        title: 'Оформить карту',
        description: 'Обновить старую карту или выпустить новую',
        icon: report
    },
    {
        title: 'Восстановить доступ',
        description: 'Потеряли карту или забыли пароль',
        icon: cards
    },
    {
        title: 'Взять ипотеку',
        description: 'Купить квартиру, дом или апартаменты',
        icon: house
    }
]

export const AllServicesPage: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <div className="w-full h-[60px] flex items-center mb-[50px]">
                <img src={logo} alt={'logo'} height={33} width={90} />
            </div>

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5 flex-wrap justify-center">
                        {
                            SERVICES.map((card) => (
                                <ServiceCardWithIcon key={card.title} {...card} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}