import React from "react";
import * as C from './styles'

interface Props {
    children?: React.ReactNode;
}

export const Content: React.FC<Props> = ({ children }) => {
    return (
        <C.Container>
            {children}
        </C.Container>
    )
}