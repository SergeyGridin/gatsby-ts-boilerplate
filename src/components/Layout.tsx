import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import Navbar from './molecules/Navbar';
import Footer from './molecules/Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  if (!global) {
    throw new Error('no global data');
  }

  return (
    <StyledLayout>
      {/* Aligned to the top */}
      <Main>
        <Navbar links={[{ url: 'home', text: 'Home' }]} />
        <div>{children}</div>
      </Main>
      {/* Aligned to the bottom */}
      <Footer />
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
