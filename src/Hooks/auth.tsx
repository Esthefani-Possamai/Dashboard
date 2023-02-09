import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
    children?: React.ReactNode,
    logged: boolean,
    signIn(email:string, password: string): void,
    signOut(): void,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: any) => {
    const[logged, setLogged] = useState<boolean>(()=>{
        const iLogged = localStorage.getItem('@minha-carteira:logged');
        return !!iLogged;
    });

    function signIn (email:string, password:string) {
        if(email === 'e@h.c' && password === '123'){
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        }else{
            alert('E-mail ou senha inválidos')
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira: logged');
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext{
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };