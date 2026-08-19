import styled from "styled-components";

export const Container = styled.div`
  
  height: 30rem;
  max-height: 350px;
  padding-left: 3rem;

  overflow-y: auto;

  font-size: 2.4rem;
  scrollbar-width: thin;
  scrollbar-color: #444 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
.command {
  font-size: 2rem;
  color:  ${({theme}) => theme.COLORS.FONT};

  span {
    color:  ${({theme}) => theme.COLORS.PRIMARY};
    font-size: 2rem;
  }
}
  `;