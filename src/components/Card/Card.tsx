import React from "react";
import * as C from './styles'

interface ICard {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string
}

export const Card: React.FC<ICard> = ({tagColor, title, subtitle, amount}) => {
    return (
        <C.Container>
            <C.Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <p>{subtitle}</p>
            </div>
            <h3>{amount}</h3>
        </C.Container>
    )
}