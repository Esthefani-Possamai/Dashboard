import React, { useMemo, useState } from "react";
import * as C from './styles'
import emojs from '../../icons/Icons'
import { Toggle } from "../Toggle/Toggle";
import { useTheme } from '../../Hooks/theme'


export const MainHeader = () => {

    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
    const handleTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    // Sortear um emoj cada vez que a tela é renderizada
    const emoj = useMemo (() => {
        const indice = Math.floor (Math.random () * emojs.length);
        return emojs[indice];
    }, []);

    return (
        <C.Container>
            <Toggle
            labelLeft="Light"
            labelRight="Dark"
            checked={darkTheme}
            onChange={handleTheme}
            
            />


            <C.Profile>
                <C.Welcome>
                    Olá, {emoj} 
                </C.Welcome>
                <C.UserName>
                    Esthéfani!
                </C.UserName>
            </C.Profile>

        </C.Container>
    )
}