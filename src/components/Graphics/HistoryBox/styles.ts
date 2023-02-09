import styled from "styled-components";

interface ILegend {
    color: string;
}

export const Container = styled.div `
    width: 100%;
    height: 360px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0px;
    padding: 30px 20px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ElementContainer = styled.div `
    height: 400px;
    margin-top: 15px;
`;

export const Header = styled.header `
    width: 100%;
    display: flex;
    justify-content: space-between;

> h2 {
        margin-bottom: 20px;
    }

    @media (max-width: 1280px){
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-right: 18px;

    @media (max-width: 1280px){
        padding: 0px;
    }
`;

export const Legend = styled.li<ILegend>`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    > div {
        background-color:  ${props => props.color};
        width: 30px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 5px;
    }

    @media (max-width: 1280px){
        > div {
            width: 20px;
            height: 20px;
        }
    }
`;