import { injectGlobal } from 'styled-components';
import { bgColor, mainColor, red, white, mSize } from './variables';
import media from './media';

/* esint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&amp;subset=cyrillic');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-size: ${mSize};
    line-height: 1.2;
    color: ${mainColor};
    font-family: Lora, serif;
    background-color: ${bgColor};
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-weight: 300;
  }

  figure {
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    outline: 0;
    text-decoration: none;
    color: ${mainColor};

    &:hover {
      text-decoration: none;
    }
  }

  label {
    user-select: none;
  }

  input {
    outline: none;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`;
