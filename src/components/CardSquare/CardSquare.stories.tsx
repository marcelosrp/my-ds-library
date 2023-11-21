import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardSquare from './CardSquare';

const meta: Meta<typeof CardSquare> = {
  component: CardSquare,
  title: 'Card/CardSquare',
  argTypes: {
    postLink: {
      table: { disable: true },
    },
    cardType: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardSquare>;

export const Editorial: Story = args => (
  <div style={{ width: '416px', height: '156px' }}>
    <CardSquare {...args} />
  </div>
);

Editorial.args = {
  postLink: 'https://www.exame.com',
  cardType: 'square-editorial',
  postTag: 'exame alpha',
  postTitle:
    'Eficiência e regulação: as palavras-chave do Investor Day da Sabesp',
};
