import styled, { keyframes} from 'styled-components';

const animate = keyframes `
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity:1;
    }
`

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
    padding: 0px;
    animation: ${animate} .5s;
   
    @media(max-width: 770px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h2 {
        margin: 0px 0px 20px 0px;
        
    }

    @media(max-width: 1345px) {
        margin-bottom: 7px;
        padding: 0px 0px 0px 20px;
        justify-content: center;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media (max-width: 1345px){
        height: 100%;}
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
        flex-direction: column;
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
        }
    }

`;