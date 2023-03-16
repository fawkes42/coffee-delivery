import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        transition: all 0.5s ease-in-out;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;

        max-width: calc(100vw - 3rem);

        margin: 0 auto;
        
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 800;
        font-family: 'Baloo 2', cursive;
        color: ${props => props.theme.colors.title};
    }

    a:hover, button:hover {
        ${props => props.theme.variant === "dark" ? `
            backdrop-filter: brightness(1.9);
        `
        : `
            backdrop-filter: brightness(0.9);
        `}
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