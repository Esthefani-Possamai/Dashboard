import React from "react";
import * as C from './styles'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

import { formateCurrency } from './Formatter'

interface IProps {
    data: {
        month: string;
        amountInput: number;
        amountOutput: number;
    }[],
    lineColorAmountInput: string;
    lineColorAmountOutput: string;
}

export const HistoryBox: React.FC<IProps>= ({data, lineColorAmountInput, lineColorAmountOutput}) => (

        <C.Container>
            <C.Header>
                <h2>Histórico de saldo</h2>
                <C.LegendContainer>
                    <C.Legend color={lineColorAmountInput}>
                        <div></div>
                        <span>Entradas</span>
                    </C.Legend>
                    <C.Legend color={lineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </C.Legend>
                </C.LegendContainer>
            </C.Header>
            
            <C.ElementContainer>
                <ResponsiveContainer>
                    <LineChart margin={{top: 5, right: 20, left: 20, bottom: 5}} data={data}>
                        <CartesianGrid strokeDasharray=" 3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece"/>
                        <Tooltip 
                        formatter={(value) => formateCurrency(Number(value))} 
                        />    
                        <Line
                            type="monotone"
                            dataKey="amountInput"
                            name="Entradas"
                            stroke={lineColorAmountInput}
                            strokeWidth={5}
                            dot={{ r: 5}}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas"
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5}}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </C.ElementContainer>
        </C.Container>
)

