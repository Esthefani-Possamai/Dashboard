
import * as C from './styles'

export const Toggle = () => {
    return (
        <C.Container>
            <C.ToggleLabel>
                Light
            </C.ToggleLabel>
            <C.ToggleSelector
            checked={true}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log ('mudou')}
            ></C.ToggleSelector>
            <C.ToggleLabel>
                Dark
            </C.ToggleLabel>
            
        </C.Container>
    )
}