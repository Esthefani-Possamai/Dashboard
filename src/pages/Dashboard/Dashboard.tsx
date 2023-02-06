import React, { useMemo, useState } from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../Listas/Months'
import { WalletBox } from "../../components/WalletBox/WalletBox";
import { MessageBox } from "../../components/WalletBox/MessageBox/MesageBox";
import happyImg from '../../icons/happy.svg'
import sadImg from '../../icons/sad.svg'

export const Dashboard: React.FC = () => {

    const options = [
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ]

    const [monthSelected, setMonth] = useState<string>(String(7));
    const [yearSelected, setYear] = useState<string>(String(2020))

    const years = useMemo (() => {

        let uniqueYears: number[] = [];
        [...expenses, ...gains].forEach (item => {
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
    }, []);

    const months = useMemo (() => {
        return listOfMonths.map((month, index) => {
            return { 
                value: index + 1, 
                label: month,
            }
        })
    }, []);
    
    return (
        <C.Container>
            <ContentHeader title="Dashboard" lineColor="#e19a3b">
                <SelectInput options={months} onChange={(e) => setMonth(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYear(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <C.Content>
                <WalletBox title={"saldo"} amount={150} footerlabel={"atualizado com base nas entradas e saídas"} icon={"dollarImg"} color={"#5d62ae"} />
                
                <WalletBox title={"entradas"} amount={5000.00} footerlabel={"atualizado com base nas entradas e saídas"} icon={"arrowUpImg"} color={"#5d62ae"} />
                
                <WalletBox title={"saídas"} amount={1500.00} footerlabel={"atualizado com base nas entradas e saídas"} icon={"arrowDownImg"} color={"#5d62ae"} />

                <MessageBox title={"Muito bem!"} description={"Sua carteira está positiva"} footerText={"Continue assim."} icon={happyImg} />

            </C.Content>
        </C.Container>
    )
}
