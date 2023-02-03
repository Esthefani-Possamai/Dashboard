import React from "react";
import * as C from './styles'
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";


export const Dashboard: React.FC<any> = () => {
    return (
        <C.Container>
            <ContentHeader/>
        </C.Container>
    )
}

// Resolver a questão do children passado por props - verificar as perguntas no fórum do curso