import { createGlobalStyle } from "styled-components"
import { themes } from "./colors"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes[0].backgroundColor};
        @media (prefers-color-scheme: dark) {
            background: ${themes[1].backgroundColor}
        }
    }
`