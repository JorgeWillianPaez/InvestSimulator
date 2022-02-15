import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100vh;
  }

  :root {
    --gray: #8C8C8C;
    --lightGray: #EFEFEF;
    --salmon: #F29057;
    --black: ##000000;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

`

