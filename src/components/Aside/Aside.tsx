import React, { useState } from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { useAuth } from '../../Hooks/auth'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'
import { Link } from "react-router-dom";

export const Aside = () => {

    const { signOut } = useAuth();

    return (
        <C.Container menuIsOpen={true}>
            <C.Header>
                <C.LogImg src={logoImg} alt="Logo Minha Carteira" />
                <C.Title>Minha Carteira</C.Title>
            </C.Header>

            <C.MenuContainer>
                <Link to="/">
                    <MdDashboard />
                    Dashboard
                </Link>
                <Link to="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </Link>
                <Link to="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </Link>

                <C.MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </C.MenuItemButton>
            </C.MenuContainer>
        </C.Container>
    )
}