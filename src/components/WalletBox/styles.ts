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

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 16px;

            > strong {
                display: inline-block;
                width: 100%;
                font-size: 14px;
            }
        }
        
        @media (max-width: 420px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 40px;

            > h1 {
                font-size: 22px;
                display: flex;
                gap: 10px;

            > strong {
                width: auto;
                font-size: 22px;
            }
        }

        }
    }
`;