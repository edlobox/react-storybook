import React from 'react';
import { storiesOf } from '@storybook/react';
import ChartComponent from '../../ChartComponent';

const data = [
  {
    mind: 10,
    body: 6,
    soul: 2,
    work: 1,
    play: 4,
    love: 8,
  },
  {
    mind: 9,
    body: 7,
    soul: 5,
    work: 3,
    play: 1,
    love: 4,
  },
  {
    mind: 7,
    body: 3,
    soul: 1,
    work: 1,
    play: 5,
    love: 9,
  },
  {
    mind: 4,
    body: 7,
    soul: 4,
    work: 7,
    play: 4,
    love: 7,
  },
  {
    mind: 8,
    body: 4,
    soul: 10,
    work: 1,
    play: 2,
    love: 6,
  },
  {
    mind: 5,
    body: 9,
    soul: 5,
    work: 9,
    play: 5,
    love: 9,
  },
  {
    mind: 5,
    body: 1,
    soul: 7,
    work: 5,
    play: 9,
    love: 3,
  },
  {
    mind: 6,
    body: 3,
    soul: 6,
    work: 3,
    play: 6,
    love: 3,
  },
  {
    mind: 2,
    body: 4,
    soul: 6,
    work: 8,
    play: 10,
    love: 7,
  },
];

storiesOf('ChartComponent', module)
  .add('Show ChartComponent component', () => (
    <ChartComponent propData={data} />
  ));
