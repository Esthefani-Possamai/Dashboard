import React from "react";
import * as C from './styles'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
} from 'recharts'
import { formateCurrency } from "../HistoryBox/Formatter";

interface IPropsBar {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

export const BarChartG: React.FC<IPropsBar> = ({title, data}) => {

    return (
        <C.Container>
            <C.SideLeft>
                <h2>{title}</h2>

                <C.LegendContainer>
                {
                    data.map(indicator => (
                    <C.Legend key={indicator.percent} color={indicator.color}>
                        <div>{indicator.percent}%</div>
                        <span>{indicator.name}</span>
                    </C.Legend>
                    ))
                } 
                </C.LegendContainer>
            </C.SideLeft>

            <C.SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                            data.map ((indicador) => (
                            <Cell
                                key={indicador.name}
                                fill={indicador.color}
                            />
                            ))}
                        </Bar>
                        <Tooltip 
                        formatter={(value) => formateCurrency(Number(value))} 
                        cursor={{fill: 'none'}}
                        />
                    </BarChart>
                </ResponsiveContainer>

            </C.SideRight>
        </C.Container>
    )
}