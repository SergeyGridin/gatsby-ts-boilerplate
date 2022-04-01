import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { DynamicPageQuery } from '../../gatsby-graphql';
import Navbar from './molecules/Navbar';
import Footer from './molecules/Footer';
// import NotificationBanner from './molecules/NotificationBanner';

export interface PageContext {
  slug: string;
  id: string | number;
  locale: string;
  locales?: string[];
  localizedPaths?: { locale: string; href: string };
  // localizations: (StrapiPageLocalizations | null)[] | null;
  defaultLocale: string;
}
interface ILayoutProps {
  children: React.ReactNode;
  global: DynamicPageQuery['strapiGlobal'];
  // pageContext: PageContext;
}

interface INavbarProps {
  data: {
    strapi_component: keyof typeof navbarComponents;
    __component?: keyof typeof navbarComponents;
  };
}

const navbarComponents = {
  'navigation.navbar': Navbar,
};

const Navigation = ({ data }: INavbarProps) => {
  // Prepare the component
  const NavigationComponent = navbarComponents[data.strapi_component || data.__component];

  if (!NavigationComponent) {
    // No matching component for this page section
    return null;
  }

  // Display the section
  // TODO: see if any can be fixed
  return <NavigationComponent {...(data as any)} />;
};

const Layout = ({ children, global }: ILayoutProps) => {
  if (!global) {
    throw new Error('no global data');
  }

  return (
    <StyledLayout>
      {/* Aligned to the top */}
      <Main>
        <Navbar {...(global.navigation as any)} />
        <div>{children}</div>
      </Main>
      {/* Aligned to the bottom */}
      <Footer {...global.footer} />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${theme.colors.gray[100]};
  overflow: hidden;
`;

const Main = styled.div`
  flex: 1 1 0%;
`;

export default Layout;
