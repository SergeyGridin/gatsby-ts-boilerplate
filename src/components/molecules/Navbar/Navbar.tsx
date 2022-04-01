import React from 'react';
import styled from 'styled-components';
import WrapperContainer from '@atoms/WrapperContainer';
import Text from '@atoms/Text';
import Logo from 'assets/svg/logo.svg';

type NavbarProps = {
  links: { url: string; text: string }[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <StyledNavbar>
      <WrapperContainer>
        <InnerNavbar>
          <Logo />
          {links.map(link => {
            return (
              <a key={link.url} href={link.url}>
                <Text as="span" variant="paragraph">
                  {link.text}
                </Text>
              </a>
            );
          })}
        </InnerNavbar>
      </WrapperContainer>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: absolute;
  width: 100vw;
  z-index: 10;
  a {
    ${Text} {
      color: white;
    }
  }
`;

const InnerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export default Navbar;
