import React, { useState } from 'react';
import { Line, defaults } from 'react-chartjs-2';
// import PropTypes from 'prop-types';
import '../styles/ChartComponent.css';

// styles for the Chart
defaults.global.defaultFontFamily = 'Nunito';
defaults.global.defaultColor = '#FFF';
defaults.global.defaultFontColor = '#727272';
defaults.global.legend.position = 'bottom';
defaults.global.legend.labels.padding = 40;
defaults.global.legend.labels.boxWidth = 20;
defaults.scale.gridLines.display = false;
defaults.scale.gridLines.drawBorder = false;
defaults.scatter.scales.yAxes = [{ display: false }];

// default months array used for labels in the chart
const listMonth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// the Data configuration for charts
const dataChart = (propData, monthLabels, lengthArray) => ({
  labels: monthLabels,
  datasets: [
    {
      label: 'MIND',
      fill: false,
      pointRadius: 0,
      borderColor: '#5065CB',
      data: propData.mind.slice(0, lengthArray).reverse(),
    },
    {
      label: 'BODY',
      fill: false,
      pointRadius: 0,
      borderColor: '#CB50C4',
      data: propData.body.slice(0, lengthArray).reverse(),
    },
    {
      label: 'SOUL',
      fill: false,
      pointRadius: 0,
      borderColor: '#50ADCB',
      data: propData.soul.slice(0, lengthArray).reverse(),
    },
    {
      label: 'WORK',
      fill: false,
      pointRadius: 0,
      borderColor: '#FFB800',
      data: propData.work.slice(0, lengthArray).reverse(),
    },
    {
      label: 'PLAY',
      fill: false,
      pointRadius: 0,
      borderColor: '#5065CB',
      data: propData.play.slice(0, lengthArray).reverse(),
    },
    {
      label: 'LOVE',
      fill: false,
      pointRadius: 0,
      borderColor: '#A0AEF6',
      data: propData.love.slice(0, lengthArray).reverse(),
    },
  ],
});

// A helper funcion used to get an array of a category
// if the array length < expected months, add 0 values in missing months
const buildCategoryArray = (data, category, lengthArray) => {
  const wellnessList = [];
  data.map((record) => !!record[category] && wellnessList.push(record[category]));

  if (wellnessList.length < lengthArray) {
    for (let i = wellnessList.length; i < lengthArray; i += 1) {
      wellnessList.push(0);
    }
  }
  return wellnessList;
};

// A function that return an object of each category with array of values
const data = ({ propData }, lengthArray) => ({
  mind: buildCategoryArray(propData, 'mind', lengthArray),
  body: buildCategoryArray(propData, 'body', lengthArray),
  soul: buildCategoryArray(propData, 'soul', lengthArray),
  work: buildCategoryArray(propData, 'work', lengthArray),
  play: buildCategoryArray(propData, 'play', lengthArray),
  love: buildCategoryArray(propData, 'love', lengthArray),
});

// A function that return a months array from current Month to last 'X' months
// the 'X' value can be 12, 6 or 3.
const calculateMonths = (lengthArray) => {
  const currentMonth = new Date().getMonth();
  const ordererMonth = [];

  listMonth.forEach((val, index) => {
    if (currentMonth < index) ordererMonth.push(listMonth[index]);
    else ordererMonth.push(listMonth[currentMonth - index]);
  });
  return ordererMonth.slice(0, lengthArray).reverse();
};

// main functional component exported
export default function ChartComponent(propData) {
  const [month, setMonth] = useState(12);

  return (
    <div>
      <div className="containerChart">
        <header className="headerChart">
          <h3 className="titleChart">Wellness Chart</h3>
          <select className="selectOptionChart" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="12">Last 12 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="3">Last 3 Months</option>
          </select>
        </header>
        <Line data={dataChart(data(propData, month), calculateMonths(month), month)} />
      </div>
    </div>
  );
}
