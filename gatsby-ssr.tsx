import * as React from 'react';
import type { GatsbySSR, GatsbyBrowser } from 'gatsby';
import { CookiesProvider } from 'react-cookie';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import { PageContextProvider, IPageContext } from './src/context/pageContext';
import './src/styles/global.css';

type ReactProps<T extends Element> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

const BodyAttributes = {
  'data-theme': 'main',
} as ReactProps<HTMLBodyElement>;

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setBodyAttributes }) => {
  setBodyAttributes(BodyAttributes);
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <CookiesProvider>{element}</CookiesProvider>
    </>
  );
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <PageContextProvider pageContextProp={props.pageContext as IPageContext}>
      {element}
    </PageContextProvider>
  );
};
