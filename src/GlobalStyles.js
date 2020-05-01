import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #011B1F;
    background: #FBF9F8;
    font-size: 18px;
}

main {
    overflow: scroll;
    line-height: 1.5;
    margin-top: 40px;
    margin-left: 24px;
    margin-right: 24px;
}
`
