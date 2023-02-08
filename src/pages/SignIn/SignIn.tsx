import React, {useState} from "react";
import * as C from './styles'
import logoImg from '../../icons/logo.svg'
import { InputForm } from "../../components/Input/Input";
import { ButtonForm } from "../../components/Button/Button";
import { useAuth } from "../../Hooks/auth";


export const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    // const signIn = (email:string, password:string) => {

    //     if(email === 'esthefani@hotmail.com' && password === '123'){
    //         localStorage.setItem('@minha-carteira:logged', 'true');
    //         setLogged(true)
    //     }else{
    //         alert('E-mail ou senha inválidos')
    //     }
    // }

    return (
        <C.Container>
           <C.Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
           </C.Logo>

           <C.Form onSubmit={() => signIn(email, password)}>
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
                />

               <ButtonForm
               type="submit">
                Acessar
                </ButtonForm>

           </C.Form>
        </C.Container>
    )
}