import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled.div`
  padding: 0 20px;
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
`;

function WrapperContainer({ className, children }: ContainerProps): JSX.Element {
  return <Container className={className}>{children}</Container>;
}

export default WrapperContainer;
