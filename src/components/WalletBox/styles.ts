import styled from "styled-components";

interface IProps {
    color: string;
}

export const Container = styled.div<IProps> `
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0px;
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    cursor: pointer;
    
    :hover {
        transform: scale(1.05);
    }
    


    >img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -30px;
        opacity: 0.3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }
`;