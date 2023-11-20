import styled from 'styled-components';
import { ChipStylesProps } from './Chip.types';

export const Chip = styled.span<ChipStylesProps>`
  border-radius: 4px;
  padding: ${props => (props.$size ? '4px 8px' : '4px')};
  background-color: ${props => props.$bgColor};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

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
