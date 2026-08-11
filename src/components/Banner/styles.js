import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 17rem;
  justify-content: space-around;
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    max-width: 46rem;
    padding-left: 2rem;

    h1,
    strong {
      font-size: 3rem;
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
      font-size: 1.6rem;
      width: 40rem;
    }
  }
  .perfil {
    .person {
      text-align: center;
      img {
        position: relative;
        max-width: 35rem;
      }
    }
    .above {
      margin: auto;
      width: 90%;
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
