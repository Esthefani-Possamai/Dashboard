import styled, {keyframes} from "styled-components";

const animate = keyframes `
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity:1;
    }
`;
interface ITag {
    color: string;
}

export const Container = styled.li `
    background-color: ${props => props.theme.colors.tertiary};
    list-style-type: none;
    border-radius: 10px;
    padding: 20px 20px 20px 30px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition:  all .4;
    position: relative;
    animation: ${animate} .5s ease;

    &:hover {
        transform: scale(1.01);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }

    > div span {
        font-weight: 200;
        font-size: 20px;
    }

`;


export const Tag = styled.span<ITag> `
    position: absolute;
    width: 10px;
    height: 100%;
    border-radius: 10px 0px 0px 10px ;
    background-color: ${props => props.color};
    left: 0;
`;