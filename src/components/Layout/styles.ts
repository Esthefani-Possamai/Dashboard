import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
    'AS MH'
    'AS CT'
    ;
    height: 100vh;
    min-height: 265px;

    @media(max-width: 750px) {
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;

        grid-template-areas: 
        'MH'
        'CT'
        ;
    }
`;