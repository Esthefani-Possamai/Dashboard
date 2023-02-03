import React, { ReactNode } from "react";
import * as C from './styles'

type Props = {
    children: React.ReactNode
}

export const ContentHeader:React.FC <Props> =({ children }: Props) => {
    return (
        <C.Container>
            {children}
        </C.Container>
    )
}