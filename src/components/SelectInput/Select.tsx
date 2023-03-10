import React from "react";
import * as C from './styles'

interface IOptions {
    options: {
        value?: string | number;
        label?: string | number;
    }[],
    onChange (event: React.ChangeEvent<HTMLSelectElement>) : void | undefined;
    defaultValue?: string | number;
}

export const SelectInput: React.FC<IOptions> = ({options, onChange, defaultValue}:IOptions) => {
    return (
        <C.Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                options.map(option => (
                    <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </C.Container>
    )
}