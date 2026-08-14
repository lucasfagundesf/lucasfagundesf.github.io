import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  margin: auto;
  margin-top: 4.8rem;
  max-width: 30rem;
  max-height: 45rem;
  color: ${({ theme }) => theme.COLORS.FONT};
  border: 1px solid ${({ theme }) => theme.COLORS.FONT};

  a {
    text-decoration: none;
  }
  .preview {
    width: 100%;
    max-height: 20.1rem;
  }
  img {
    width: 100%;
  }
    .boxImg {
    width: 100%;
    height: 20.1rem;
    object-fit: cover;
    object-position: left;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.FONT};
}
  .tags {
    padding: 0.5rem 0rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.FONT};
    
  }

  .cont {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TITLE};
  }
  p {
    font-size: 1.6rem;
    padding-bottom: 1.6rem;
  }
  .btn {
    display: flex;
    gap: 1.6rem;
  }
  button:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_PRIMARY};
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 0;
    margin-top: 4.8rem;
  }
`;
