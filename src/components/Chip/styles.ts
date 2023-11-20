import styled from 'styled-components';
import { ChipStylesProps } from './Chip.types';

export const Chip = styled.span<ChipStylesProps>`
  align-items: center;
  background-color: ${props => props.$bgColor};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  justify-content: center;
  padding: ${props => (props.$size ? '4px 8px' : '4px')};
  width: fit-content;

  svg {
    height: 16px;
    width: 16px;
  }

  img {
    height: 16px;
    object-fit: cover;
    width: 16px;
  }
`;
