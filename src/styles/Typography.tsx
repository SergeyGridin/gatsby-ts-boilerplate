/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import BeVietnamProBoldRegular from 'assets/fonts/BeVietnamPro-Regular.ttf';
import BeVietnamProBold from 'assets/fonts/BeVietnamPro-Bold.ttf';
import BeVietnamProSemiBold from 'assets/fonts/BeVietnamPro-SemiBold.ttf';

const Typography = createGlobalStyle`


  /* BeVietnamPro 400 normal */
  @font-face {
    font-family: 'BeVietnamPro';
    font-style: normal;
    font-weight: 400;
    src: local(''), url(${BeVietnamProBoldRegular}) format('ttf'),
  }


  /* BeVietnamPro 600 normal */
  @font-face {
    font-family: 'BeVietnamPro';
    font-style: normal;
    font-weight: 600;
    src: local(''), url(${BeVietnamProSemiBold}) format('ttf')
  }

  /* BeVietnamPro 700 normal */
  @font-face {
    font-family: 'BeVietnamPro';
    font-style: normal;
    font-weight: 700;
    src: local(''), url(${BeVietnamProBold}) format('ttf')
  }

  :root {
    /* FONT SIZE */
    --font-size-xs: 0.812rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-md: 1.125rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.438rem;
    --font-size-2xl: 1.625rem;
    --font-size-3xl: 1.812rem;
    --font-size-4xl: 2rem;
    --font-size-5xl: 2.25rem;
    --font-size-6xl: 2.562rem;
    --font-size-7xl: 2.876rem;
    --font-size-8xl: 3.25rem;
    --font-size-9xl: 3.625rem;
    --font-size-10xl: 4.08rem;
    --font-size-11xl: 4.6rem;

    /* FONT WEIGHT */
    --font-weight-normal: normal;
    --font-weight-bold: bold;
    --font-weight-100: 100;
    --font-weight-200: 200;
    --font-weight-300: 300;
    --font-weight-400: 400;
    --font-weight-500: 500;
    --font-weight-600: 600;
    --font-weight-700: 700;
    --font-weight-800: 800;
    --font-weight-900: 900;
  }


  /* easier to calculate font size*/
  html {
    font-size: 100%;
  }


  body {
    font-size: 1rem;
  }


`;

export default Typography;
