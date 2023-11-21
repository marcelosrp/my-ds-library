import React from 'react';
import Text from '../Text';

interface CardTitleProps {
  postTitle: string;
  className: string;
}

export default function CardTitle({
  postTitle,
  className,
  ...rest
}: CardTitleProps) {
  return (
    <Text as="h3" className={className} {...rest}>
      {postTitle}
    </Text>
  );
}
