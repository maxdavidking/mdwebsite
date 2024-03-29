import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
    scroll-behavior: smooth;

    @media(max-width: 768px) {
      font-size: 12px;
    }

    @media(max-width: 364px) {
      font-size: 10px;
    }
  }

  p {
    font-family: Rubik;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.4;
    color: #000000;
    padding: 0 20%;
    margin: 0;

    @media (max-width: 1000px) {
      padding: 0 10%;
      font-size: 2.5rem;
    }
  }

  h1 {
    font-family: Rubik;
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.4;
    color: #FF0032;
  }

  a {
    font-family: Rubik;
  }
`;
