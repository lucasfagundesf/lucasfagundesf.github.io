import styled from "styled-components";

export const List = styled.div`
  margin: 4px 0 20px 18px;
  font-size:1.6rem;

  color: ${({theme}) => theme.COLORS.FONT};
`;

export const Item = styled.div`
  white-space: nowrap;
  color: ${({theme}) => theme.COLORS.FONT};
`;