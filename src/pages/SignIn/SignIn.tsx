import React from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { InputForm } from "../../components/Input/Input";

export const SignIn = () => {
    return (
        <C.Container>
           <C.Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
           </C.Logo>

           <C.Form onSubmit={() => {}}>
                <C.FormTitle>
                    Entrar
                </C.FormTitle>
                <InputForm 
                type="email"
                required/>
                <InputForm 
                type="password"
                required

                />

                <button type="submit">Acessar</button>
           </C.Form>
        </C.Container>
    )
}