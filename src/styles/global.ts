import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: transparent;
    box-shadow:0 0 0 2px ${(props) => props.theme.pallete.purple.main};
}
body {
    background: ${(props) => props.theme.pallete.background};
    color: ${(props) => props.theme.pallete.base.text};
    -webkit-font-smoothing: antialiased
}

body, input, textarea, button {
    font-family: 'Roboto', 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`
