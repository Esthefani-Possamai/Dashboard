import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IData {
    id: string;
    description: string;
    amount: string;
    frequency: string;
    data: string;
    tagColor: string;
}

export const Listas = () => {

    const [data,setData] = useState<IData[]>([])

    const { type } = useParams()

    const title = useMemo (() => {
        return type === 'entry' ? 'Entradas' : 'Saídas'
    }, [type])

    const lineColor = useMemo (() => {
        return type === 'entry' ? '#e19a3b' : '#e2595c'
    }, [type])

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

    const listData = useMemo (() => {
        return type === 'entry-balance' ? gains  : expenses
    }, [type])

    useEffect (() => {

        const response = listData.map (item => {
            return {
                id: String(Math.random () * data.length),
                description: item.description,
                amount: item.amount,
                frequency: item.frequency,
                data: item.date,
                tagColor: item.frequency === 'recorrente' ? '#e2595c' : '#5d62ae',
            }
        })
        setData(response)
    }, [type])


    return (
        <C.Container>
            <ContentHeader title={title} lineColor={lineColor}>
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
                {
                    data.map (item => (             
                    <Card 
                    key={item.id}
                    tagColor={item.tagColor} 
                    title={item.description} 
                    subtitle={item.data} 
                    amount={item.amount} />
                    ))
                }
            </C.Content>
        </C.Container>
    )
}