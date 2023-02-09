import styled from "styled-components";

interface IProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media(max-width: 480px){
        flex-direction: column;
        gap: 15px;
        margin: 0px 0px 10px 0px;
    }
`;

export const Title = styled.div <IProps> `
    > h1 {
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 7px solid ${props => props.lineColor};
        }

        @media (max-width: 480px){
            font-size: 24px;
            align-items: center;
        }
        
    }
`;

export const Controllers = styled.div `
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media(max-width: 480px){
        justify-content: center;
    }

`