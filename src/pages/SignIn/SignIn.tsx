import React from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { InputForm } from "../../components/Input/Input";
import { ButtonForm } from "../../components/Button/Button";

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
                required
                placeholder="E-mail"
                />
                <InputForm 
                type="password"
                required
                placeholder="Senha"
                />

               <ButtonForm
               type="submit"
               >Acessar</ButtonForm>
           </C.Form>
        </C.Container>
    )
}