import React, { useState } from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { useAuth } from '../../Hooks/auth'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md'
import { Link } from "react-router-dom";
import { useTheme } from "../../Hooks/theme";
import { Toggle } from "../Toggle/Toggle";

export const Aside = () => {

    const { signOut } = useAuth();
    const {toggleTheme, theme} = useTheme();
    const [Open, setOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme();
    }

    return (
        <C.Container menuIsOpen={Open}>
            <C.Header menuIsOpen={Open}>
                <C.ToggleMenu onClick={() => {setOpen(!Open)}}>
                    { Open ? <MdClose/> : <MdMenu/>}

                </C.ToggleMenu>
                <C.LogImg src={logoImg} alt="Logo Minha Carteira" />
                <C.Title>Minha Carteira</C.Title>

                <C.ThemeToggle menuIsOpen={Open}>
                <Toggle 
                labelLeft={"Light"} 
                labelRight={"Dark"} 
                checked={darkTheme} 
                onChange={handleChangeTheme} />
                </C.ThemeToggle>
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