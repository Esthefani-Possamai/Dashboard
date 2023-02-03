import React, { useMemo } from "react";
import * as C from './styles'
import emojs from '../../icons/Icons'
import { Toggle } from "../Toggle/Toggle";


export const MainHeader = () => {

    // Sortear um emoj cada vez que a tela é renderizada
    const emoj = useMemo (() => {
        const indice = Math.floor (Math.random () * emojs.length);
        return emojs[indice];
    }, []);

    return (
        <C.Container>
            <Toggle />
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