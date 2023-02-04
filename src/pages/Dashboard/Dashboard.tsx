import React from "react";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SelectInput } from "../../components/SelectInput/Select";
import * as C from './styles'


export const Dashboard: React.FC = () => {

    const options = [
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ]
    
    return (
        <C.Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options}/>
            </ContentHeader>
        </C.Container>
    )
}
