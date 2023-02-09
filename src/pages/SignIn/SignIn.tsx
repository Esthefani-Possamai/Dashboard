import React, {useState} from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { InputForm } from "../../components/Input/Input";
import { ButtonForm } from "../../components/Button/Button";
import { useAuth } from "../../Hooks/auth";
import { Link } from 'react-router-dom'


export const SignIn: React.FC = () => {

    const { signIn } = useAuth();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <C.Container>
           <C.Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
           </C.Logo>

           <C.Form onSubmit={(e) => {
            e.preventDefault()
            signIn(email, password)
            }
            }>
                <C.FormTitle>
                    Entrar
                </C.FormTitle>

                <InputForm 
                type="email"
                required
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                
                />

                <InputForm 
                type="password"
                required
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                />


                {/* comentar o Link se for para teste do hook de autenticação */}
                {/* <Link to={"/dash"}> */}
                <ButtonForm
               type="submit">
                Acessar
                </ButtonForm>
                {/* </Link> */}
           </C.Form>
        </C.Container>
    )
}