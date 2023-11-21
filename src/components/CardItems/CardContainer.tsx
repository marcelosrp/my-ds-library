import React from 'react';
import styled from 'styled-components';

interface CardContainerProps {
  as?: React.ElementType;
  children: React.ReactNode;
  href?: string;
  className?: string;
  cardType: string;
}

const Container = styled.a`
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: 100%;

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;

export default function CardContainer({
  as = 'a',
  children,
  className,
  href,
  cardType,
}: CardContainerProps) {
  return (
    <Container as={as} href={href} className={className} cardType={cardType}>
      {children}
    </Container>
  );
}
