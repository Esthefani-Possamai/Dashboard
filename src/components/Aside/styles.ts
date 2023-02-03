import styled from "styled-components";
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

export const Container = styled.div `
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
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

export const MenuItemLink = styled.a `
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    transition: opacity .3;

    &:hover {
        opacity: 0.7;
    }
`;
