import React from "react";
import * as C from './styles'

interface ICard {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string
}

export const Card: React.FC<ICard> = ({cardColor, tagColor, title, subtitle, amount}) => {
    return (
        <C.Container color={cardColor}>
            <C.Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <p>{subtitle}</p>
            </div>
            <h3>{amount}</h3>
        </C.Container>
    )
}