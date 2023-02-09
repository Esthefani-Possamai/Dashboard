import React, { useMemo } from "react";
import * as C from './styles'
import dollarImg from '../../icons/dollar.svg';
import arrowUpImg from '../../icons/arrow-up.svg';
import arrowDownImg from '../../icons/arrow-down.svg';
import CountUp from 'react-countup'

interface IWallBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dollarImg' | 'arrowUpImg' | 'arrowDownImg';
    color: string;
}

export const WalletBox: React.FC<IWallBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dollarImg': 
            return dollarImg;      
            case 'arrowUpImg': 
            return arrowUpImg;
            case 'arrowDownImg': 
            return arrowDownImg;      
        }
    }, [icon])


    return (
        <C.Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>
                    R$ 
                </strong>
                <CountUp
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            {iconSelected && <img src={iconSelected} alt="image-card" />}

        </C.Container>
    )
}