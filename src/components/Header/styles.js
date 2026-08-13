import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    a{
        text-decoration: none; 
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FONT};
    }
    li{
        display: none;
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;

        img {
            width: 1.6rem;
            height: 1.6rem;
        }
        h1{
            font-size: 1.6rem;
            font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
    }
    .menu{
        display: block;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        
        ul{
        display: flex;
        text-align: center;
        justify-content: space-between;
        gap: 3.2rem;        
        list-style: none;

        li {
            display: flex;
            align-items: center;
           svg {
            width: 1.6rem;
            height: 1.6rem;
            fill: ${({ theme }) => theme.COLORS.PRIMARY};

            a{
                display: flex;
                align-items: center;
            }
        } 

        
        }
        li>a:hover{
            color: ${({ theme }) => theme.COLORS.PRIMARY};
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        }
        
    }
        .menu{
            display: none;
        }
    }
   
`;
