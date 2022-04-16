import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', Helvetica, Sans-Serif;
        min-height: 100%;
        text-align: center;
        background-color: black;
        color: white;
    }
`;

export default GlobalStyle;
