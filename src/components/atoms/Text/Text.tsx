import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

type TextProps = {
  variant: keyof typeof theme.typography;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
  color?: string;
  children: React.ReactNode;
  className?: string;
};

const Text = styled(TextBase)<TextProps>`
  font-family: ${({ variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ variant }) => theme.typography[variant].fontSize};
  font-weight: ${({ variant }) => theme.typography[variant].fontWeight};
  line-height: ${({ variant }) => theme.typography[variant].lineHeight};
  color: ${({ as }) => (as.startsWith('h') ? theme.colors.gray[900] : theme.colors.gray[900])};
`;

function TextBase({ as: Component, children, className }: TextProps): JSX.Element {
  return <Component className={className}>{children}</Component>;
}

export default Text;
