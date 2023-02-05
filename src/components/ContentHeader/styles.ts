import styled from "styled-components";

interface IProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const Title = styled.div <IProps> `
    > h1 {
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 7px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div `
    display: flex;
    flex-direction: row;
    gap: 15px
`;