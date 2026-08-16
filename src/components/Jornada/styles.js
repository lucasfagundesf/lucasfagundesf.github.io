import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .title {
        width: 40rem;
        margin-top: 5rem;
        margin-left: 5rem;
        font-size: 2rem;
        font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
        color: ${({ theme }) => theme.COLORS.TITLE};
        margin-bottom: 2rem;
    }
    
    .timeline {
        position: relative;
        margin-top: 5rem;
        margin-left: 10rem;
        width: 90%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        svg.line {
            max-width: none;
            max-height: none;
            width: 64rem; 
            position: absolute;
            display: block;
            top: 3.5rem;
            left: 15rem;
        }
    }
    .inicio {
        width: 30rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        z-index: 1;
        span {
            font-size: 1.5rem;
            font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
            color: ${({ theme }) => theme.COLORS.FONT};
        }
        .circle {
            width: 1.5rem;
            height: 1.5rem;
        }
        img {
            width: 6rem;
            height: 6rem;
        }
        h2 {
            font-size: 1.5rem;
            font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
        p {
            font-size: 1.6rem;
            line-height: 1.5;
            text-align: center;
            font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
            color: ${({ theme }) => theme.COLORS.FONT};
        }
        .topic {
            margin-left: 24rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            img {
                width: 6rem;
                height: 6rem;
            }
            .topic-text {
                width: 20rem;
                font-size: 1.6rem;
                line-height: 1.5;
                text-align: start;
                font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
                color: ${({ theme }) => theme.COLORS.TITLE};
            }
            .topic-point {
                margin-top: -1rem;
                width: 20rem;
                font-size: 3rem;
                line-height: 1.5;
                text-align: start;
                font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
                color: ${({ theme }) => theme.COLORS.PRIMARY};
            }
        }
    }
`;