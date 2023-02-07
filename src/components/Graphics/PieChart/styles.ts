import styled from 'styled-components';

interface ILegend {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0px;
    background-color: ${props =>props.theme.colors.tertiary};
    color: ${props =>props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h2 {
        margin: 0px 0px 20px 0px;
        
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const LegendContainer = styled.ul`
    list-style-type: none;
    max-height: 170px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }

`;

export const Legend = styled.li<ILegend>`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    > div {
        background-color:  ${props => props.color};
        width: 50px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-bottom: 10px;
        padding: 5px;
    }

`;