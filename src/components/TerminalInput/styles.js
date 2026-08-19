import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  padding-bottom: 3rem; 
  gap: 8px;

`;

export const Prompt = styled.span`
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-size: 1.4rem;
  white-space: nowrap;
`;

export const Input = styled.input`
  flex: 1;

  min-width: 0;

  background: transparent;

  border: none;
  outline: none;

  color: ${({theme}) => theme.COLORS.FONT};

  font-family: inherit;
  font-size: 1.4rem;

  caret-color: ${({theme}) => theme.COLORS.FONT};
`;