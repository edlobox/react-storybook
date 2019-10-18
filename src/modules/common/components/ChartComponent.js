import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import PropTypes from 'prop-types';
import '../styles/ChartComponent.css';
import sampleData from '../constants/chartSample';

// styles options for the Chart
const options = {
  layout: {
    padding: {
      left: 40,
      right: 40,
      top: 40,
      bottom: 20,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        suggestedMax: 10,
        callback: () => '',
      },
      gridLines: {
        display: false,
        drawBorder: false,
      },
    }],
    xAxes: [{
      ticks: {
        fontFamily: 'Nunito',
        fontColor: '#727272',
        fontSize: 10,
      },
      gridLines: {
        display: false,
        drawBorder: false,
      },
    }],
  },
  plugins: [annotationPlugin],
  annotation: {
    annotations: [{
      type: 'line',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 5,
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderWidth: 1,
      label: {
        enabled: false,
        content: 'Test label',
      },
    }],
  },
};

// default months array used for labels in the chart
const listMonth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// the Data configuration for charts
const dataChart = (propData, monthLabels, lengthArray) => ({
  labels: propData.mind.length < monthLabels.length
    ? monthLabels.slice(0, propData.mind.length).reverse()
    : monthLabels.reverse(),
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
      borderColor: '#FD9184',
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
// if the array length is 1 month, add 0 values to compare
const buildCategoryArray = (data, category) => {
  const wellnessList = [];
  data.map((record) => !!record[category] && wellnessList.push(record[category]));
  if (wellnessList.length === 1) wellnessList.push(0);

  return wellnessList;
};

// A function that return an object of each category with array of values
const data = (propData) => ({
  mind: buildCategoryArray(propData, 'mind'),
  body: buildCategoryArray(propData, 'body'),
  soul: buildCategoryArray(propData, 'soul'),
  work: buildCategoryArray(propData, 'work'),
  play: buildCategoryArray(propData, 'play'),
  love: buildCategoryArray(propData, 'love'),
});

// A function that return a months array from current Month to last 'X' months
// the 'X' value can be 12, 6 or 3.
const calculateMonths = (lengthArray) => {
  const currentMonth = new Date().getMonth();
  const ordererMonth = [];

  listMonth.forEach((val, index) => {
    if (currentMonth < index) {
      ordererMonth.push(listMonth[(listMonth.length - index) + currentMonth]);
    } else ordererMonth.push(listMonth[currentMonth - index]);
  });
  return ordererMonth.slice(0, lengthArray);
};

const ColoredLine = ({ color }) => (
  <hr className="lineChartBody" style={{ backgroundColor: color }} />
);

// main functional component exported
export default function ChartComponent({
  propData,
  sample,
  disable,
  text,
}) {
  const [month, setMonth] = useState(12);
  const secData = sample ? sampleData : propData;

  return (
    <div className="containerChart">
      { text ? <span className="textDisabledChart">{text}</span> : null}
      <div className={`${disable ? 'setBlurEffectChart' : ''}`}>

        <header className="headerChart">
          <h3 className="titleChart">Wellness Chart</h3>
          <select
            className="selectOptionChart"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            disabled={disable ? true : null}
          >
            <option value="12">Last 12 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="3">Last 3 Months</option>
          </select>
        </header>

        <div className="canvasChartContainer">
          <Line data={dataChart(data(secData), calculateMonths(month), month)} options={options} />
        </div>
        <div className="textChartBody">
          <ColoredLine color="#5065CB" />
            MIND
          <ColoredLine color="#CB50C4" />
            BODY
          <ColoredLine color="#50ADCB" />
            SOUL
          <ColoredLine color="#FFB800" />
            WORK
          <ColoredLine color="#FD9184" />
            PLAY
          <ColoredLine color="#A0AEF6" />
            LOVE
        </div>
      </div>
    </div>
  );
}

// The PropTypes for the props received
ChartComponent.propTypes = {
  propData: PropTypes.arrayOf(PropTypes.any),
  sample: PropTypes.bool,
  disable: PropTypes.bool,
  text: PropTypes.string,
};

ChartComponent.defaultProps = {
  propData: [],
  sample: false,
  disable: false,
  text: null,
};

ColoredLine.propTypes = {
  color: PropTypes.string,
};

ColoredLine.defaultProps = {
  color: null,
};
