import styled from 'styled-components';
import { breakpoint } from '../../styles/GlobalStyles';
import { TextStyledProps } from './Text.types';

export const Text = styled.p<TextStyledProps>`
  color: ${props => props.$color};
  margin: 0;
  padding: 0;
  text-transform: ${props => props.$variant};

  &.display-large {
    font-family: 'IBM Plex Serif', serif;
    font-size: 57px;
    font-weight: bold;
    line-height: 64px;

    ${breakpoint(768)} {
      font-size: 45px;
      line-height: 52px;
    }
  }

  &.display-medium {
    font-family: 'IBM Plex Serif', serif;
    font-size: 45px;
    font-weight: bold;
    line-height: 52px;

    ${breakpoint(768)} {
      font-size: 36px;
      line-height: 44px;
    }
  }

  &.display-small {
    font-family: 'IBM Plex Serif', serif;
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;

    ${breakpoint(768)} {
      font-size: 21px;
      line-height: 40px;
    }
  }

  &.headline-large {
    font-family: 'IBM Plex Serif', serif;
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;

    ${breakpoint(768)} {
      font-size: 28px;
      line-height: 36px;
    }
  }

  &.headline-medium {
    font-family: 'IBM Plex Serif', serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;

    ${breakpoint(768)} {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &.headline-small {
    font-family: 'IBM Plex Serif', serif;
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;

    ${breakpoint(768)} {
      font-size: 18px;
      line-height: 26px;
    }
  }

  &.headline-extra-small {
    font-family: 'IBM Plex Serif', serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;

    ${breakpoint(768)} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.title-large {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 22px;
    font-weight: normal;
    line-height: 28px;

    ${breakpoint(768)} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.title-medium {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;

    ${breakpoint(768)} {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &.title-small {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  }

  &.title-extra-small {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
  }

  &.label-large {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
  }

  &.label-medium {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }

  &.label-small {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
  }

  &.body-extra-large {
    font-family: 'IBM Plex Serif', serif;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;

    ${breakpoint(768)} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.body-large {
    font-family: 'IBM Plex Serif', serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;

    ${breakpoint(768)} {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &.body-medium {
    font-family: 'IBM Plex Serif', serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;

    ${breakpoint(768)} {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &.body-small {
    font-family: 'IBM Plex Serif', serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
  }
`;
