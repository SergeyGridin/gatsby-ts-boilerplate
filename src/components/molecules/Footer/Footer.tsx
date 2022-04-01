import Button from '@atoms/Button';
import Text from '@atoms/Text';
import WrapperContainer from '@atoms/WrapperContainer';
import React from 'react';
import styled from 'styled-components';
import { device, theme } from 'styles/theme';

type FooterProps = {
  copyright?: string | null;
  largeText?: string | null;
};
function Footer({ copyright, largeText }: FooterProps) {
  return (
    <StyledFooter>
      <WrapperContainer>
        <CTA id="cta">
          <Text as="span" variant="h2">
            {largeText}
          </Text>
          <form action="mailto:support@ridinapp.com">
            <Button appearance="secondary">support@ridinapp.com</Button>
          </form>
        </CTA>
        <Copyright>
          <Text as="span" variant="smallParagraph">
            &copy; RidinApp {copyright}
          </Text>
        </Copyright>
      </WrapperContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 125px;
  background-color: ${theme.colors.primary[700]};
  ${Text} {
    color: white;
  }
`;

const CTA = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
  width: 100%;
  margin: auto;
  padding: 64px 0px;
  text-align: center;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  text-align: center;
`;
export default Footer;
