const theme = {
  // https://epicreact.dev/css-variables/
  // https://material-ui.com/customization/default-theme/
  // https://github.com/diegohaz/arc/blob/master/src-example/components/themes/default.js
  // https://blog.prototypr.io/css-variables-90cc4cdf41e9
  colors: {
    primary: {
      100: 'var(--clr-primary-100)',
      300: 'var(--clr-primary-300)',
      500: 'var(--clr-primary-500)',
      700: 'var(--clr-primary-700)',
      900: 'var(--clr-primary-900)',
    },
    secondary: {
      100: 'var(--clr-secondary-100)',
      300: 'var(--clr-secondary-300)',
      500: 'var(--clr-secondary-500)',
      700: 'var(--clr-secondary-700)',
      900: 'var(--clr-secondary-900)',
    },
    gray: {
      50: 'var(--clr-gray-50)',
      100: 'var(--clr-gray-100)',
      200: 'var(--clr-gray-200)',
      300: 'var(--clr-gray-300)',
      400: 'var(--clr-gray-400)',
      500: 'var(--clr-gray-500)',
      600: 'var(--clr-gray-600)',
      700: 'var(--clr-gray-700)',
      800: 'var(--clr-gray-800)',
      900: 'var(--clr-gray-900)',
    },
    utility: {
      danger: 'var(--clr-danger)',
    },
  },
  typography: {
    /**
     * font-size: 4.6rem / 74px
     * font-weight: 700
     * line-height: 120% / 88px
     */
    hero: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-11xl)',
      fontWeight: 'var(--font-weight-700)',
      lineHeight: '120%',
    },
    /**
     * font-size: 4.08rem / 65px
     * font-weight: 700
     * line-height: 120% / 78px
     */
    h1: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-10xl)',
      fontWeight: 'var(--font-weight-700)',
      lineHeight: '120%',
    },
    /**
     * font-size: 3.625rem / 58px
     * font-weight: 700
     * line-height: 120% / 38px
     */
    h2: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-9xl)',
      fontWeight: 'var(--font-weight-700)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.812rem / 29px
     * font-weight: 600
     * line-height: 120% / 35px
     */
    h3: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-3xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.438rem / 23px
     * font-weight: 600
     * line-height: 120% / 28px
     */
    h4: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.25rem / 20px
     * font-weight: 600
     * line-height: 120% / 24px
     */
    h5: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-lg)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.125rem / 18px
     * font-weight: 600
     * line-height: 120% / 22px
     */
    h6: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-md)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.438rem / 23px
     * font-weight: 400
     * line-height: 120% / 28px
     */
    paragraph: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-400)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1rem / 16px
     * font-weight: 400
     * line-height: 120% / 19px
     */
    smallParagraph: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-400)',
      lineHeight: '120%',
    },
    /**
     * font-size: 0.812 / 13px
     * font-weight: 600
     * line-height: 120% / 16px
     */
    link: {
      fontFamily: 'BeVietnamPro, sans-serif',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1220px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  /** 320px */
  mobileS: `(min-width: ${size.mobileS})`,
  /** 375px */
  mobileM: `(min-width: ${size.mobileM})`,
  /** 425px */
  mobileL: `(min-width: ${size.mobileL})`,
  /** 768px */
  tablet: `(min-width: ${size.tablet})`,
  /** 1024px */
  laptop: `(min-width: ${size.laptop})`,
  /** 1220px */
  laptopM: `(min-width: ${size.laptopM})`,
  /** 1440px */
  laptopL: `(min-width: ${size.laptopL})`,
  /** 2560px */
  desktop: `(min-width: ${size.desktop})`,
};

export { theme, device };
