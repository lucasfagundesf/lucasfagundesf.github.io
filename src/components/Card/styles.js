import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  margin: auto;
  margin-top: 4.8rem;
  padding-bottom: 2rem;
  max-width: 50rem;
  height: 55rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.FONT};
  border: 1px solid ${({ theme }) => theme.COLORS.FONT};

  a {
    text-decoration: none;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
  }
    .boxImg {
      border-radius: 24px 24px 0 0;
      width: 100%;
      height: 27rem;
      object-fit: cover;
      object-position: center;
    }
    hr {
      width: 20rem;
    }
  .tags {
    padding: 0.5rem 0rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.FONT};
    
  }

  .cont {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding-left: 4rem;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TITLE};
  }
  p {
    font-weight: ${({ theme}) => theme.WEIGHT.SEMIBOLD};
    font-size: 1.6rem;
    padding-bottom: 1.6rem;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }
  .btn {
    display: flex;
    gap: 1.6rem;
    
  }
  button:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 0;
    margin-top: 4.8rem;
  }
`;
