export type TextStyledProps = {
  $color: string;
  $variant: string;
};

export type TextVariant = 'upper' | 'lower' | 'capitalize';

export type TextVariants = {
  [key: string]: string;
};

export interface TextProps {
  as: React.ElementType;
  children: React.ReactNode;
  className: string;
  fontColor?: string | any;
  html?: boolean;
  variant?: string;
}
