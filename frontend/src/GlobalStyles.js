import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
    --primary-dark: #011B1F;
    --secondary: #344C54;
    --secondary-40: #AEB7BB;
    --primary-light: #C9B59E;
    --primary-light-40: #E6DDD3;
    --primary-light-8: #FBF9F8;

    scroll-behavior: smooth;
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
    height: 100%;
}

header {
    position: fixed;
    z-index: 1;
    height: 48px;
}

.header.shadow {
    box-shadow: 0 9px 9px -9px rgba(67, 86, 100, 0.12);
  }
  
.header.hidden {
    transform: translateY(-110%);
  }

.footer.shadow {
    box-shadow: 0 -9px -9px 9px rgba(67, 86, 100, 0.12);
  }

.footer.hidden {
    transform: translateY(110%);
  }

main {
    overflow: scroll;
    line-height: 1.5;
    display: grid;
    padding: 72px 24px 24px;
    height: 100%;

    .input__style {
        font-size: 16px;
        font-weight: 300;
        color: var(--primary-dark);
        width: 95%;
        border-radius: 8px;
        border: solid 1px var(--secondary-40);
        padding: 12px;
    
        ::placeholder {
          color: var(--primary-light);
        }
      }
}

footer {
    position: fixed;
    bottom: 0;
    z-index: 1;
    height: 48px;
}

input {
    line-hight: 1.5em;
    height: 48px;
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
  
h1, h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
}

h3 {
    font-size: 18px;
    font-weight: 500;
}
`
