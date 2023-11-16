import React from 'react';
import Text from '../Text';
import { ButtonProps, ButtonType, ButtonTypes } from './Button.types';
import * as S from './styles';

const BUTTON_TYPES: ButtonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const Button: React.FC<ButtonProps> = ({
  as = 'button',
  children,
  disabled = false,
  type,
  ...rest
}) => {
  return (
    <S.Button
      as={as}
      $variant={BUTTON_TYPES[type as ButtonType]}
      disabled={disabled}
      {...rest}
    >
      <Text as="span" fontColor="inherit" className="label-large">
        {children}
      </Text>
    </S.Button>
  );
};

export default Button;
