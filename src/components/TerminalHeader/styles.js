import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 42px;

  display: flex;
  align-items: center;

  padding: 0 16px;

  background: ${({theme}) =>theme.COLORS.NAV_TERMINAL};

  border-bottom: 1px solid #2a2a2a;


.buttons {
  display: flex;
  align-items: center;

  gap: 7px;
}

.button {
  width: 10px;
  height: 10px;

  border-radius: 50%;
}


.title {
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  margin: 0;

  color: #888;

  font-size: 13px;
;
`;