import React from "react"
import { Link, useNavigate } from "react-router-dom";
import back from '../../assets/back.svg';
import logo from './logo.svg';

type THeaderProps = {
    hideBackButton?: boolean
}

export const Header: React.FC<THeaderProps> = ({
    hideBackButton = false
}) => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }
    
    return (
        <div className="w-full h-[70px] flex gap-1 items-center justify-between">
            <Link onClick={goBack} to={'/'} className={`flex justify-center items-center h-8 w-8 cursor-pointer -ml-2 ${hideBackButton && 'opacity-0'}`}>
                <img src={back} alt={'logo'} height={22} width={12} />
            </Link>
            <img src={logo} alt={'logo'} height={23} width={70} className="mr-1" />
        </div>
    )
}