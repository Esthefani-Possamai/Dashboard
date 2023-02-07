import React from "react";
import * as C from './styles'
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts'

interface IProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

export const PizzaGraf: React.FC<IProps> = ({ data }) => (
    <C.Container>
        <C.SideLeft>
            <h2>Relação</h2>
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
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

        </C.SideRight>
    </C.Container>
)
