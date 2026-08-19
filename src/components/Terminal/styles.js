import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;

  background: ${({theme}) => theme.COLORS.TERMINAL};
  color: #fff;

  border: 1px solid #2a2a2a;
  border-radius: 12px;

  overflow: hidden;

  font-family:
    "SFMono-Regular",
    "SF Mono",
    Menlo,
    Monaco,
    Consolas,
    monospace;
`;