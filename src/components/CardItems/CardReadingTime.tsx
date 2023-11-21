import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface CardReadingTimeProps {
  children: string;
  className: string;
}

const Time = styled.time`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
`;

export default function CardReadingTime({
  children,
  className,
}: CardReadingTimeProps) {
  return (
    <Time dateTime="2023-11-20 22:00">
      <Text as="span" className={className}>
        {children}
      </Text>
    </Time>
  );
}
