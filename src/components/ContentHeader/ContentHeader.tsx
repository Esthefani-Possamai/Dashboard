import React, { ReactNode } from "react";
import { SelectInput } from "../SelectInput/Select";
import * as C from './styles'

interface IProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

export const ContentHeader: React.FC<IProps> = ({title, lineColor, children}) => {

    return (
        <C.Container >
            <C.Title lineColor={lineColor}>
                <h1>{title}</h1>
            </C.Title>
            <C.Controllers>
                {children}
            </C.Controllers>
        </C.Container>
    )
}