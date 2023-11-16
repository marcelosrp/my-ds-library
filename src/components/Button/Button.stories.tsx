import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    as: {
      table: { disable: true },
    },
    href: {
      table: { disable: true },
    },
    target: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    onClick: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = args => <Button {...args} />;

Primary.args = {
  as: 'button',
  children: 'Primary Button',
  type: 'primary',
  disabled: false,
};

export const Secondary: Story = args => <Button {...args} />;

Secondary.args = {
  as: 'button',
  children: 'Secondary Button',
  type: 'secondary',
  disabled: false,
};

export const Tertiary: Story = args => <Button {...args} />;

Tertiary.args = {
  as: 'button',
  children: 'Tertiary Button',
  type: 'tertiary',
  disabled: false,
};
