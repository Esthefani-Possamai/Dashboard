
import { useState } from 'react';
import * as C from './styles'

export const Toggle = () => {

    const [ativo, setAtivo] = useState(true);
    
    return (
        <C.Container>
            <C.ToggleLabel>
                Light
            </C.ToggleLabel>
            <C.ToggleSelector
            checked={ativo}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => setAtivo (!ativo)}
            ></C.ToggleSelector>
            <C.ToggleLabel>
                Dark
            </C.ToggleLabel>
            
        </C.Container>
    )
}