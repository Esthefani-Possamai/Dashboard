import React, { ReactNode } from "react";
import * as C from './styles'
import { Content } from "../Content/Content";
import { MainHeader } from "../MainHeader/MainHeader";
import { Aside } from "../Aside/Aside";
import { ContentHeader } from "../ContentHeader/ContentHeader";

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC <Props> = ({children}: Props) => {
    return (
        <C.Container>
            <MainHeader />
            <Aside />
            <ContentHeader>
                {children}    
            </ContentHeader>
        </C.Container>
    )
}