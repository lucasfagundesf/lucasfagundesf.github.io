import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    main{
        margin: auto;
        max-width:100rem;
        height: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    }
    .title{
        display: flex;
        align-items: center;
    }
    .btnGray{
        padding: .6rem 1rem;
    }
    section{
        margin: 4.8rem 2rem;
        svg{
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.PRIMARY};
        }
        h1{
            font-size: 2.2rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        }
        p{
            margin-top: 2rem;
            color: ${({ theme }) => theme.COLORS.FONT};
            font-size: 1.6rem;
        }
            .projetos{
                display: flex;
                flex-direction: row;
                
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        .projetos{
            gap: 1.6rem;
            display: flex;
            justify-content: left;
            flex-wrap: wrap;
        }
    }
`;