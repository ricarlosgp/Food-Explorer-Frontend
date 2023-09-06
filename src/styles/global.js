import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body, input, textarea {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .hidden {
        display: none;
    }
`
