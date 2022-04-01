import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /** Colors **/
  body[data-theme='main'] {
    /* Primary */
    --clr-primary-100: #D6EAF5;
    --clr-primary-300: #85C0E0;
    --clr-primary-500: #3496CB;
    --clr-primary-700: #1F5A7A;
    --clr-primary-900: #0A1E29;

     /* Secondary */
    --clr-secondary-100: #FBDBD0;
    --clr-secondary-300: #F5A589;
    --clr-secondary-500: #EF6C3F;
    --clr-secondary-700: #B2380E;
    --clr-secondary-900: #3B1205;

    /* Grayscale */
    --clr-gray-50: #F9FAFB;
    --clr-gray-100: #F3F4F6;
    --clr-gray-200: #E5E7EB;
    --clr-gray-300: #D1D5DB;
    --clr-gray-400: #9CA3AF;
    --clr-gray-500: #6B7280;
    --clr-gray-600: #4B5563;
    --clr-gray-700: #374151;
    --clr-gray-800: #1F2937;
    --clr-gray-900: #111827;

    /* Utility */
    --clr-danger: #F63939;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
        box-sizing: inherit;
  }

  h1,h2,h3,h4,h5,p{
    margin: 0
  }

  p {
    padding: 0;
    margin: 0
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  ul {
    padding: 0;
  }

  a {
    text-decoration: none
  }

  textarea, input { outline: none; border: none}

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

`;

export default GlobalStyles;
