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

    @media(max-width: 750px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.menuIsOpen ? '100vh' : '60px'};
        overflow: hidden;
        width: 60%;
        
        ${props => !props.menuIsOpen && css `
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray}
            width: 20px;
        `}
    }
`;

export const ToggleMenu = styled.button `
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.warning};
    display: none;

    @media(max-width: 750px) {
        display: flex;
        justify-content: MdCenterFocusStrong;
        align-items: center;
    }
`;

export const Title = styled.h3 `
    margin-left: 10px;

    @media(max-width: 750px){
        display: none;
    }
`;

export const Header = styled.header <IContainerProps>`
    display: flex;
    align-items: center;
    height: 70px;
    
    @media(max-width: 750px){
        justify-content: space-between;
    }
`;

export const LogImg = styled.img `
height: 40px;

@media(max-width: 750px){
    height: 30px;
    display: none;
}

`;

export const MenuContainer = styled.nav `
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    gap: 30px;

    
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


export const ThemeToggle = styled.div<IContainerProps>`
display: none;
@media(max-width: 750px){
    display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    justify-content: space-around;
    padding-right: 10px;
    font-size: 14px;
}
`;