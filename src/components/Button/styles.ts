import styled, { css } from 'styled-components';
import { ButtonStyledProps } from './Button.types';

export const Button = styled.button<ButtonStyledProps>`
  align-items: center;
  border-radius: 3rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem 2.4rem;
  transition: all 0.3s linear;

  &:disabled {
    background-color: #f4f4f4;
    border-color: #c6c6c6;
    color: #c6c6c6;
    pointer-events: none;
  }

  ${props =>
    props.$variant === 'primary' &&
    css`
      background-color: #ea2300;
      border: 1px solid #ea2300;
      color: #f4f4f4;

      &:hover {
        background-color: #ff6139;
        border-color: #ff6139;
      }

      &:active {
        background-color: #d20200;
        border-color: #d20200;
      }
    `};

  ${props =>
    props.$variant === 'secondary' &&
    css`
      background-color: #161616;
      border: 1px solid #161616;
      color: #f4f4f4;

      &:hover {
        background-color: #e5e5e5;
        border-color: #e5e5e5;
        color: #161616;
      }

      &:active {
        background-color: #161616;
        border: 1px solid #161616;
        color: #f4f4f4;
      }
    `};

  ${props =>
    props.$variant === 'tertiary' &&
    css`
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      color: #ea2300;

      &:hover {
        background-color: #fee8e6;
      }

      &:active {
        border-color: #ea2300;
      }
    `};
`;
