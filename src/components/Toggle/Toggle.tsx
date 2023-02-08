
import { useState } from 'react';
import * as C from './styles'

interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

export const Toggle: React.FC<IToggleProps> = ({labelLeft, labelRight, checked, onChange}) => {

    const [ativo, setAtivo] = useState(true);
    
    return (
        <C.Container>
            <C.ToggleLabel>
                {labelLeft}
            </C.ToggleLabel>
            <C.ToggleSelector
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
            ></C.ToggleSelector>
            <C.ToggleLabel>
                {labelRight}
            </C.ToggleLabel>
            
        </C.Container>
    )
}