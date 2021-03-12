import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid #66b8da !important;
}

html, body {
    font-size: 0.65vw;
    font-family: "Sarabun", sans-serif;

    @media screen and (max-width: 800px) {
        font-size: 1vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 1.1vw;
    }
}
`;

export default GlobalStyles;
