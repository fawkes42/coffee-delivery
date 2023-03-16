import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 800;
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme.colors.title};
    }

    :focus {
        outline: 0;
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
        html {
            font-size: 70%;
        }
    }

`;