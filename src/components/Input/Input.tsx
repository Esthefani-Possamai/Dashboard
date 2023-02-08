import React, { InputHTMLAttributes } from "react";
import * as C from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputForm: React.FC <InputProps> = ({...rest }) => (
        <C.Container {...rest}/>
)