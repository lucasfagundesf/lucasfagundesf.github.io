import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: .8rem 1rem;
    font-size: 2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TITLE};
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};

    img {
        max-width: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TITLE}
    }
   
    
`;