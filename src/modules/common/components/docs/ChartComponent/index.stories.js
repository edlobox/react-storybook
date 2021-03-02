import React from 'react';
import { storiesOf } from '@storybook/react';
import ChartComponent from '../../ChartComponent';

const propData = [
  {
    mind: 10,
    body: 9,
    soul: 10,
    work: 9,
    play: 10,
    love: 9,
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
];

const dummyText = 'With a partner account, you can be able to see this chart.';

storiesOf('ChartComponent', module)
  .add('Show ChartComponent component with sample data', () => (
    <ChartComponent propData={propData} sample />
  ))
  .add('Show ChartComponent component with Blurry effect and a Text sample', () => (
    <ChartComponent propData={propData} text={dummyText} sample disable />
  ))
  .add('Show ChartComponent component of 12 months', () => (
    <ChartComponent propData={propData} />
  ))
  .add('Show ChartComponent component of 9 months', () => (
    <ChartComponent propData={propData.slice(0, 9)} />
  ))
  .add('Show ChartComponent component of 4 months', () => (
    <ChartComponent propData={propData.slice(0, 4)} />
  ))
  .add('Show ChartComponent component of 2 months', () => (
    <ChartComponent propData={propData.slice(0, 2)} />
  ))
  .add('Show ChartComponent component of 1 months', () => (
    <ChartComponent propData={[{
      mind: 8,
      body: 7,
      soul: 5,
      work: 3,
      play: 1,
      love: 4,
    }]}
    />
  ));
