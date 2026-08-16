import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  margin-top: 20rem;
  justify-content: space-around;
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    padding-left: 2rem;

    h1,
    strong {
      width: 100%;
      font-size: 4.5rem;
      font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
    }
    h1 {
      color: ${({ theme }) => theme.COLORS.TITLE};
    }
    strong {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
    p {
      color: ${({ theme }) => theme.COLORS.FONT};
      font-size: 2.5rem;
      width: 87%;
    }
      
      .CTA {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        .icon {
          width: 2rem;
          height: 2rem;
        }
          a {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.6rem;
          padding: 0.8rem 2.5rem;
          border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.TITLE};
          &:hover {
            background-color: ${({ theme }) => theme.COLORS.PRIMARY};
            color: ${({ theme }) => theme.COLORS.TITLE};
          }
        }
      }  
    
        
    }
  }
  .perfil {
    .person {
      margin-top: 0px;
      img {
        position: relative;
        max-width: 50rem;
      }
    }
    .above {
      margin: auto;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 0.8rem 2.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.FONT};
    }
    .box {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      width: 1.6rem;
      height: 1.6rem;
    }
    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.FONT};
      strong {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        font-size: 1.6rem;
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;

    .perfil {
      .above {
        width: 100%;
      }
    }
  }
`;
