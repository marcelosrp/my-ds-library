import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Chip/Chip',
  argTypes: {
    children: {
      table: { disable: true },
    },
    icon: {
      table: { disable: true },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Label: Story = args => <Chip {...args} />;

Label.args = {
  children: 'AD Chip',
  bgColor: '#F9B600',
  fontColor: '#161616',
};

export const Icon: Story = args => <Chip {...args} />;

Icon.args = {
  bgColor: '#EA2300',
  icon: <img src="/src/assets/images/exame-icon.svg" alt="Exame" />,
};

export const LabelWithIcon: Story = args => <Chip {...args} />;

LabelWithIcon.args = {
  bgColor: '#EA2300',
  children: 'AD Chip',
  fontColor: '#FFFFFF',
  icon: <img src="/src/assets/images/exame-icon.svg" alt="Exame" />,
  iconPosition: 'left',
};
