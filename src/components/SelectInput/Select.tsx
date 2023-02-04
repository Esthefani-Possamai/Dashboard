import React from "react";
import * as C from './styles'

interface IOptions {
    options: {
        value?: string | number;
        label?: string | number;
    }[]
}

export const SelectInput: React.FC<IOptions> = ({options}:IOptions) => {
    return (
        <C.Container>
            <select>
                {
                options.map(option => (
                    <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </C.Container>
    )
}