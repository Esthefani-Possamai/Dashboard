import React from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

export const Aside = () => {
    return (
        <C.Container>
            <C.Header>
                <C.LogImg src={logoImg} alt="Logo Minha Carteira" />
                <C.Title>Minha Carteira</C.Title>
            </C.Header>

            <C.MenuContainer>
                <C.MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </C.MenuItemLink>
                <C.MenuItemLink href="#">
                    <MdArrowUpward />
                    Entradas
                </C.MenuItemLink>
                <C.MenuItemLink href="#">
                    <MdArrowUpward />
                    Saídas
                </C.MenuItemLink>
                <C.MenuItemLink href="#">
                    Sair
                </C.MenuItemLink>
            </C.MenuContainer>
        </C.Container>

        
    )
}