import React from 'react';
import { ChipProps } from './Chip.types';
import Text from '../Text';
import * as S from './styles';

const Chip: React.FC<ChipProps> = ({
  children,
  bgColor,
  fontColor,
  icon,
  iconPosition,
  ...rest
}) => {
  return (
    <S.Chip $bgColor={bgColor} $size={children} {...rest}>
      {icon && iconPosition === 'left' && icon}
      {children ? (
        <Text
          as="span"
          className="label-small"
          fontColor={fontColor}
          variant="upper"
        >
          {children}
        </Text>
      ) : (
        icon
      )}
      {icon && iconPosition === 'right' && icon}
    </S.Chip>
  );
};

export default Chip;
