import styled, {keyframes} from "styled-components";

const animate = keyframes `
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity:1;
    }
`;


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
    animation: ${animate} .5s;
    @media (max-width: 1280px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 400px;
    }

    @media (max-width: 360px) {
        min-height: 500px;
    } 

`;

export const SideLeft = styled.div `
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h2 {
        margin-bottom: 10px;
        padding-bottom: 0px;
    }

   
`;

export const SideRight = styled.div `
    height: 100%;
    flex: 1;
    padding: 30px 20px;
    width: 100px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 1280px){
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        padding-top: 0px;
    }

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

    @media (max-width: 1345px) {
        display: flex;
        padding: 0px;
        width: 100%;
        height: auto;
        gap: 15px;
        justify-content: center;
    } 

    @media (max-width: 360px) {
        flex-direction: column;
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
        margin: 10px 0px;
        padding: 5px;
    }

    @media (max-width: 1345px){
        font-size: 14px;
        margin: 3px 0;

        > div {
            height: 45px;
            width: 45px;
            font-size: 12px;
            line-height: 30px;
        }
    }

`;