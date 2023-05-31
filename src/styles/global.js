import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: black;

        -webkit-font-smoothing: antialiased;
    }

    .hidden {//desktop
        display: none;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background:white;
    }

    ::-webkit-scrollbar-thumb { 
        border-radius: 10px;
        background: gray;
    }
`;