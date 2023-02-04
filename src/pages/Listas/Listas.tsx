import React from "react";
import { Card } from "../../components/Card/Card";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'

export const Listas = () => {

    const options = [
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ]

    return (
        <C.Container>
            <ContentHeader title="Saídas" lineColor="#e2595c">
                <SelectInput options={options}/>
            </ContentHeader>

            <C.Content>
                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                cardColor={"#5d62ae"} 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />
            </C.Content>
        </C.Container>
    )
}