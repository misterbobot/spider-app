import React from 'react'
import logo from './logo.svg';
import {ServiceCard} from "../../components/cards/serviceCard";
import PrimaryButton from "../../components/buttons/primaryButton";

const SERVICES = [
    {
        title: 'Оформить карту',
        description: 'Обновить старую карту или выпустить новую'
    },
    {
        title: 'Снять наличные',
        description: 'Доллар евро и юани рубли'
    }
]

export const ServicesPage: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-white px-6 box-border">
            <div className="w-full h-[60px] flex items-center mb-[50px]">
                <img src={logo} alt={'logo'} height={33} width={90} />
            </div>

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-heading-m">Услуги</h1>

                    <div className="flex gap-5">
                        {
                            SERVICES.map((card) => (
                                <ServiceCard key={card.title} {...card} />
                            ))
                        }
                    </div>

                    <PrimaryButton disabled={false} title={"Смотреть все"} onClick={() => undefined} />
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-black text-heading-m m-0">
                            Получить услугу
                        </h2>

                        <p className="text-text-m text-black m-0">
                            Наш искуственный интеллект поможет решить любую вашу проблему
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <input className="w-full h-[60px] p-4 border border-solid border-primary rounded-10" type="text" placeholder="Ваш запрос"/>
                        <PrimaryButton disabled={false} title={"Смотреть все"} onClick={() => undefined} />
                    </div>
                </div>
            </div>
        </div>
    );
}