import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.colors.text};
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        cursor: default;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 700;
    }
    
    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    li {
        list-style: none;
    }
`;
export default GlobalStyles;
