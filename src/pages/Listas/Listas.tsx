import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from './Months'
import { v4 as uuidv4} from 'uuid';

interface IData {
    id: string;
    description: string;
    amount: string;
    frequency: string;
    date: string;
    tagColor: string;
}

export const Listas = () => {

    const [data, setData] = useState<IData[]>([])
    const [monthSelected, setMonth] = useState<string>(String(7));
    const [yearSelected, setYear] = useState<string>(String(2020))
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

    const { type } = useParams()

    //Formatações
    const formatCurrency = (current: number): string => {
        return current.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
    };

    const formatDate = (date: string): string => {
        const dateFormatted = new Date(date);
        const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
        const month = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`;
        const year = dateFormatted.getFullYear();

        return (
            `${day}/${month}/${year}`
        )
    };

    //fim das formatações

    const title = useMemo (() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])

    const lineColor = useMemo (() => {
        return type === 'entry-balance' ? '#e19a3b' : '#e2595c'
    }, [type])

    const listData = useMemo (() => {
        return type === 'entry-balance' ? gains  : expenses
    }, [type])

    
    const years = useMemo (() => {

        let uniqueYears: number[] = [];
        listData.forEach (item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return { 
                value: year, 
                label: year,
            }
        })
    }, [listData]);

    const months = useMemo (() => {
        return listOfMonths.map((month, index) => {
            return { 
                value: index + 1, 
                label: month,
            }
        })
    }, []);

    useEffect (() => {
        const filteredData = listData.filter (item =>{
            const date = new Date (item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map (item => {
            return {
                id: uuidv4(),
                description: item.description,
                amount: formatCurrency (Number(item.amount)),
                frequency: item.frequency,
                date: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#e2595c' : '#5d62ae',
            }
        })
        setData(formattedData)
    }, [listData, monthSelected, yearSelected, data.length, selectedFrequency])

    const handleClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex( item => item === frequency);

        if(alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered);
        }
        else {
            setSelectedFrequency((prev) => [...prev,frequency])
        }
    }

    //return geral da função
    return (
        <C.Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMonth(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYear(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <C.Filters>
                <button type="button" className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                onClick={() => handleClick('recorrente')}>
                    Recorrentes
                </button>

                <button type="button" className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                onClick={() => handleClick('eventual')}>
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
                    subtitle={item.date} 
                    amount={item.amount} />
                    ))
                }
            </C.Content>
        </C.Container>
    )
}
