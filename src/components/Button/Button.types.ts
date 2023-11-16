export type ButtonStyledProps = {
  $variant: string;
};

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

export type ButtonTypes = {
  [key: string]: string;
};

export interface ButtonProps {
  as?: React.ElementType;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  target?: string;
  type: string;
}
