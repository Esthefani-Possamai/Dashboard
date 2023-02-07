import React from "react";
import * as C from './styles'


interface IMessageProps {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

export const MessageBox: React.FC <IMessageProps> = ({
    title, description, footerText, icon
}) => {

    return (
        <C.Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt="{title}" />
                </h1>
                <p>
                    {description}
                </p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </C.Container>
    )
}