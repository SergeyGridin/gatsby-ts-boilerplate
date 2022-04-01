import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import Text from '@atoms/Text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
  compact?: boolean;
  loading?: boolean;
  icon?: any;
  size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled(Button)`
  display: flex;
  gap: 16px;
  align-items: center;
  width: max-content;
  padding: ${({ size }) => {
    if (size === 'sm') {
      return '14px 26px';
    } else if (size === 'md') {
      return '14px 26px';
    } else {
      return '14px 26px';
    }
  }};
  background-color: ${({ appearance }) =>
    appearance === 'secondary' ? theme.colors.secondary[500] : theme.colors.primary[500]};

  ${Text} {
    font-size: 16px;
    color: ${({ appearance }) =>
      appearance === 'secondary' ? theme.colors.gray[900] : theme.colors.primary[900]};
  }
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
`;

function Button({ className, type, onClick, icon: Icon, ...props }: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick} {...props}>
      {Icon ? <Icon /> : null}
      <Text as="span" variant="link">
        {props.children}
      </Text>
    </button>
  );
}

export default StyledButton;
