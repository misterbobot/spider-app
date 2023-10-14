import React from 'react'
import logo from './logo.svg';
import offline from '../../assets/offline.png';
import online from '../../assets/online.png';
import back from '../../assets/back.svg';

import TakeServiceButton from "../../components/buttons/takeServiceButton";
import {Link, useNavigate} from "react-router-dom";

export const ChooseServicePage: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-screen bg-white px-6 pb-5 box-border">
            <div className="w-full h-[70px] flex gap-6 items-center mb-[20px]">
                <Link onClick={goBack} to={'/'} className="flex justify-center items-center h-8 w-8 cursor-pointer">
                    <img src={back} alt={'logo'} height={22} width={12} />
                </Link>
                <img src={logo} alt={'logo'} height={33} width={90} />
            </div>

            <div className="flex flex-col gap-[50px]">
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-primary text-heading-m ">Снять наличные</h1>
                        <p className="text-text-sm text-black">
                            Доллар евро и юани рубли
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={online} alt={'online'} height={162} width={162} />

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Услугу можно оформить из дома
                            </p>
                            <p className="text-black text-text-m">
                                Оформите карту не выходя из дома, привезем за 3 дня, в удобное время
                            </p>
                        </div>

                        <TakeServiceButton color={'black'} background={'white'} title={'Оформить онлайн'} onClick={() => undefined} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={offline} alt={'offline'} height={162} width={162} />

                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-black text-text-m-bold">
                                Услугу можно оформить из дома
                            </p>
                            <p className="text-black text-text-m">
                                Оформите карту не выходя из дома, привезем за 3 дня, в удобное время
                            </p>
                        </div>

                        <Link to={'/service/offline'}>
                            <TakeServiceButton color={'white'} background={'#3D6EFA'} title={'Найти ближайшее отделение'} onClick={() => undefined} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}