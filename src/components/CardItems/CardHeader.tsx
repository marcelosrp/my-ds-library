import React from 'react';
import styled from 'styled-components';

interface CardHeaderProps {
  children: React.ReactNode;
}

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function CardHeader({ children }: CardHeaderProps) {
  return <Header>{children}</Header>;
}
