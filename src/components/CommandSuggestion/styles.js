import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-itens: center;
  flex-wrap: wrap;

  gap: 10px;

  padding: 24px;
`;

export const Button = styled.button`
  padding: 5px 9px;

  background: transparent;

  border: 1px solid #333;
  border-radius: 5px;

  color: #888;

  font-family: inherit;
  font-size: 12px;

  cursor: pointer;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    border-color: ${({theme}) => theme.COLORS.PRIMARY};
    background: #171717;
  }
`;