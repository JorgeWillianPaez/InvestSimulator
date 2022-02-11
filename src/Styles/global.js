import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --gray: #8C8C8C;
    --lightGray: #F2F2F2;
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

