import styled, { css } from "styled-components";

interface IContainerProps{
    menuIsOpen:boolean;
}

export const Container = styled.div <IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 30px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    transition: opacity .3;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 25px;
    }
    }

    position: relative;

    @media(max-width: 770px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        width: 60%;
        
        ${props => !props.menuIsOpen && css `
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray}
        `}
    }
`;

export const Title = styled.h3 `
    margin-left: 10px;
`;

export const Header = styled.header `
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogImg = styled.img `
height: 40px;

`;

export const MenuContainer = styled.nav `
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    gap: 30px
`;


export const MenuItemButton = styled.button `

    color: ${props => props.theme.colors.white};
    transition: opacity .3;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    background: none;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 25px;
    }
`;
