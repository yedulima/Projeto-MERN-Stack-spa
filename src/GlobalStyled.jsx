import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        color: #697077;
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    body {
        background-color: #FFF;
    }

    #root {
        display: flex;
        background-color: #FFF;
    }
`;
