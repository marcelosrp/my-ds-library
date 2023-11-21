import React from 'react';
import styled, { css } from 'styled-components';
//import clsx from 'clsx';

interface CardBodyProps {
  children: React.ReactNode;
  cardType: string;
}

type CardBodyStyledProps = {
  $cardType: string;
};

const Body = styled.div<CardBodyStyledProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  position: relative;

  ${props =>
    props.$cardType === 'square-editorial' &&
    css`
      padding: 24px;
    `}
`;

export default function CardBody({
  children,
  cardType,
  ...rest
}: CardBodyProps) {
  return (
    <Body $cardType={cardType} {...rest}>
      {children}
    </Body>
  );
}
