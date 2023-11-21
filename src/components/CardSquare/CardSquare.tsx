import React from 'react';
import { Card } from '../CardItems';
import Chip from '../Chip';
import { CardSquareProps } from './CardSquare.types';

const CardSquare: React.FC<CardSquareProps> = ({
  cardType,
  postLink,
  postTitle,
  postTag,
}) => {
  return (
    <Card.Container cardType={cardType} href={postLink}>
      <Card.Body cardType={cardType}>
        <Card.Header>
          <Chip bgColor="#EA2300" fontColor="#FFFFFF">
            {postTag}
          </Chip>
        </Card.Header>
        <Card.Title postTitle={postTitle} className="headline-extra-small" />
        <Card.ReadingTime className="title-extra-small">
          02 de Outubro, 2023
        </Card.ReadingTime>
      </Card.Body>
    </Card.Container>
  );
};

export default CardSquare;
