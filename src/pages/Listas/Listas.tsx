import React from "react";
import { Card } from "../../components/Card/Card";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'

export const Listas = () => {

    const months= [
        { value: 1, label: "Janeiro" },
        { value: 2, label: "Fevereiro" },
        { value: 3, label: "Março" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Maio" },
        { value: 6, label: "Junho" },
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
        { value: 10, label: "Outubro" },
        { value: 11, label: "Novembro" },
        { value: 12, label: "Dezembro" }
    ]

    const years= [
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 }
    ]

    return (
        <C.Container>
            <ContentHeader title="Saídas" lineColor="#e2595c">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <C.Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>

            </C.Filters>

            <C.Content>
                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />

                <Card 
                tagColor={"#e2595c"} 
                title={"Conta de luz"} 
                subtitle={"28/03/2003"} 
                amount={"R$ 130,00"} />
            </C.Content>
        </C.Container>
    )
}