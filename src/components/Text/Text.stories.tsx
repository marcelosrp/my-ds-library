import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Typography/Text',
  argTypes: {
    className: {
      options: [
        'display-large',
        'display-medium',
        'display-small',
        'headline-large',
        'headline-medium',
        'headline-small',
        'headline-extra-small',
        'title-large',
        'title-medium',
        'title-small',
        'title-extra-small',
        'label-large',
        'label-medium',
        'label-small',
        'body-extra-large',
        'body-large',
        'body-medium',
        'body-small',
      ],
      control: { type: 'select' },
    },
    variant: {
      options: ['initial', 'upper', 'lower', 'capitalize'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Typography: Story = args => <Text {...args} />;

Typography.args = {
  as: 'h1',
  className: 'display-large',
  html: false,
  variant: 'initial',
  fontColor: '#161616',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
