import styled from "styled-components";

export const Container = styled.div `
    gap: 10px;
    > select {
        padding: 7px 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color: ${props => props.theme.colors.white};
    }

    > options {
        cursor: pointer;
    }
`;