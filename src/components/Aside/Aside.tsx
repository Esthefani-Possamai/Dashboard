import React from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'
import { Link } from "react-router-dom";

export const Aside = () => {
    return (
        <C.Container>
            <C.Header>
                <C.LogImg src={logoImg} alt="Logo Minha Carteira" />
                <C.Title>Minha Carteira</C.Title>
            </C.Header>

            <C.MenuContainer>
                <Link to="/dashboard">
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
                <Link to="/">
                    <MdExitToApp />
                    Sair
                </Link>
            </C.MenuContainer>
        </C.Container>

        
    )
}