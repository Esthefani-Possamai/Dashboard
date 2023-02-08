import React, { ButtonHTMLAttributes } from "react";
import * as C from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonForm: React.FC <ButtonProps> = ({children, ...rest}) => (
        <C.Container {...rest}>
                {children}
        </C.Container>
)