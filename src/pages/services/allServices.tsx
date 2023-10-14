import React from 'react'
import logo from './logo.svg';
import wallet from '../../assets/wallet.png';
import cards from '../../assets/cards.png';
import house from '../../assets/house.png';
import report from '../../assets/report.png';
import {ServiceCardWithIcon} from "../../components/cards/serviceCardWithIcon";
import {Link, useNavigate} from "react-router-dom";
import back from "../../assets/back.svg";

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
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <div className="w-full h-[70px] flex gap-6 items-center mb-[20px]">
                <Link onClick={goBack} to={'/'} className="flex justify-center items-center h-8 w-8 cursor-pointer">
                    <img src={back} alt={'logo'} height={22} width={12} />
                </Link>
                <img src={logo} alt={'logo'} height={33} width={90} />
            </div>

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5 flex-wrap justify-center">
                        {
                            SERVICES.map((card) => (
                                <Link className="w-[calc(50%-10px)]" key={card.title} to={'/choose-service'}>
                                    <ServiceCardWithIcon {...card} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}