import React from "react";
import * as C from './styles'
import { Content } from "../Content/Content";
import { MainHeader } from "../MainHeader/MainHeader";
import { Aside } from "../Aside/Aside";

export const Layout
 = () => {
    return (
        <C.Container>
            <MainHeader />
            <Aside />
            <Content />
        </C.Container>
    )
}