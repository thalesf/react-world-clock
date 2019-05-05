import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
    font-family: 'Noto Sans', sans-serif;

  }
`;
export default GlobalStyles;
