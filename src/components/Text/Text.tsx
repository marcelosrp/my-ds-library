import React from 'react';
import { TextProps, TextVariant, TextVariants } from './Text.types';
import * as S from './styles';

const TEXT_VARIANTS: TextVariants = {
  upper: 'uppercase',
  lower: 'lowercase',
  capitalize: 'capitalize',
};

const HTML_MARKUP_OPTIONS = [
  'a',
  'article',
  'b',
  'button',
  'div',
  'em',
  'figcaption',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label',
  'li',
  'ol',
  'p',
  'span',
  'strong',
  'textarea',
  'ul',
];

const Text: React.FC<TextProps> = ({
  as = 'p',
  children,
  className,
  fontColor = '#161616',
  html = false,
  variant = 'unitial',
}) => {
  if (!HTML_MARKUP_OPTIONS.includes(as as string)) {
    console.error('Tag HTML inválida', children);
    return null;
  }

  if (html) {
    return (
      <S.Text
        as={as}
        className={className}
        dangerouslySetInnerHTML={{
          __html: children,
        }}
        $color={fontColor}
        $variant={TEXT_VARIANTS[variant as TextVariant]}
      />
    );
  }

  return (
    <S.Text
      as={as}
      className={className}
      $color={fontColor}
      $variant={TEXT_VARIANTS[variant as TextVariant]}
    >
      {children}
    </S.Text>
  );
};

export default Text;
