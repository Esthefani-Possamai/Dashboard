import styled from "styled-components";

interface ILegend {
    color: string;
}

export const Container = styled.div `
    width: 48%;
    min-height: 260px;
    margin: 10px 0px;
    border-radius: 7px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    display: flex;
`;

export const SideLeft = styled.div `
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h2 {
        margin-bottom: 10px;
    }
`;

export const SideRight = styled.div `
    height: 100%;
    flex: 1;
    padding: 30px 20px;
    width: 100px;
    display: flex;
    align-items: flex-end;


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