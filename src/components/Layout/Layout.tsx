import React, { ReactNode } from "react";
import * as C from './styles'
import { Content } from "../Content/Content";
import { MainHeader } from "../MainHeader/MainHeader";
import { Aside } from "../Aside/Aside";

interface Props {
    children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <C.Container>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </C.Container>
    )
}