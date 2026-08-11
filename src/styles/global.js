import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        font-family: ${({ theme }) => theme.FONTS.FIRA_CODE};
        margin: 0;
        font-size: 62.5%;
        padding: 0;
        box-sizing: border-box;
    }

    .char,
    .word,
    .line {
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
    }
`;