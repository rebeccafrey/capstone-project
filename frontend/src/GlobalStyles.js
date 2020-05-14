import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
    --primary-dark: #011B1F;
    --secondary: #344C54;
    --secondary-40: #AEB7BB;
    --primary-light: #C9B59E;
    --primary-light-40: #E6DDD3;
    --primary-light-8: #FBF9F8;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: var(--primary-dark);
    background: var(--primary-light-8);
    font-size: 18px;
    font-weight: 300;
    display: grid;
    grid-template-rows: 48px auto 48px;
}

main {
    overflow: scroll;
    line-height: 1.5;
    display:grid;
    padding: 72px 24px;
}

p{
    margin-bottom: 24px;
    
}

a:link, a:visited {
    color: var(--primary-light);    
}

li {
    margin: 12px 24px;
}
  
h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
}

h3 {
    font-size: 18px;
    font-weight: 500;
}
`
