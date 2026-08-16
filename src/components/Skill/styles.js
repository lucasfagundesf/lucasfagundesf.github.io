import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 19.6rem;
    

    h2{
        border: 1px solid ${({theme}) => theme.COLORS.FONT};
        border-bottom: none;
        padding: 0.8rem;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.TITLE};
    }
    p{
        border: 1px solid ;
        color: ${({theme}) => theme.COLORS.FONT};
        padding: 0.8rem;
        font-size: 1.6rem;
    }
        ul {
      list-style: circle;
      display: flex;
      justify-content: start;
      gap: 2rem;
      li {  
        padding: 0.5rem 1rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FONT};
        &:hover {
          cursor: default;
          color: ${({ theme }) => theme.COLORS.PRIMARY};
        }
      }
`;