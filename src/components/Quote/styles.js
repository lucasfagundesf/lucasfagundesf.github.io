import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: center;
    margin: auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
    max-width: 70rem;
    color: ${({ theme }) => theme.COLORS.FONT};

    img{
        width: 2rem;
        height: 2.5rem;
    }
    .quote{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        width: 3.5rem;
    }
    #quote1{
        left: 15%;
        top: -8%;
    }
    #quote2{
        right: 3%;
        bottom: 27%;
    }

    > h2{
        font-size: 1.8rem;
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        padding: 2.5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        height: 9.5rem;
        max-width: 78rem;
    }
    .author{
        padding: 1.6rem;
        max-width: 20rem;        
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        border-top: none;
    }
    p {
        font-size: 1.6rem;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

    > h2{
        padding: 3.2rem;
    }
    p {
        font-size: 1.6rem;
    }
    }
    
`;