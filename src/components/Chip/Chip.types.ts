import React from 'react';

type IconPosition = 'left' | 'right';

export type ChipStylesProps = {
  $bgColor: string;
  $size: any;
};

export interface ChipProps {
  children?: React.ReactNode;
  bgColor: string | any;
  fontColor: string | any;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}
