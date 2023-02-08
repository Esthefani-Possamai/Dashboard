import styled from "styled-components";

export const Container = styled.input `
    width: 100%;
    height: 30px;
    margin: 7px 0px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
`;