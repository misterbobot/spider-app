import React, { useState } from 'react'
import { Map } from '../../components/map';

export const HomePage: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Map />
        </>
    )
}