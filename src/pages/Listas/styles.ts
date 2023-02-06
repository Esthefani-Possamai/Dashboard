import styled from "styled-components";

export const Container = styled.div `
`;

export const Content = styled.main `
`;

export const Filters = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0px;
        padding: 0px;
        transition: opacity 0.2s;
        opacity: 0.5;

        :hover {
            opacity: 1;
        }
    }

    .tag-filter-recurrent::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 7px solid ${props => props.theme.colors.warning};
            transition: opacity 0.2s;

            :hover {
            opacity: 0.8;
            }
        }

    .tag-filter-eventual::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 7px solid ${props => props.theme.colors.sucess};
        transition: opacity 0.2s;

        :hover {
        opacity: 0.8;
        }
    }

    .tag-actived {
        opacity: 1;
    }
`;