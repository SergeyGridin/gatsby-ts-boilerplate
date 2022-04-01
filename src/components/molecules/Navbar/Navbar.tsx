import React from 'react';
import styled from 'styled-components';
import WrapperContainer from '@atoms/WrapperContainer';
import Text from '@atoms/Text';
import Logo from 'assets/svg/logo.svg';

type NavbarProps = {
  links: { url: string; text: string }[];
};

function Navbar({ links }: NavbarProps) {
  const link = links[0];
  console.log(link);
  return (
    <StyledNavbar>
      <WrapperContainer>
        <InnerNavbar>
          <Logo />
          <a
            href={link.url}
            onClick={() => {
              document
                .getElementById('cta')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <Text as="span" variant="paragraph">
              {link.text}
            </Text>
          </a>
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
