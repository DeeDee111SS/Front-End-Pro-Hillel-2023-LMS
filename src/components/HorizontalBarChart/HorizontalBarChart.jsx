import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Rating for the course',
    },
  },
};

const labels = ['Alice Johnson',
                'John Smith',
                'Emily Brown',
                'David Wilson',
                'Olivia Clark',
                'Michael Davis',
                'Sophia Taylor',
                'James Anderson',
                'Emma White',
                'Daniel Martin',
                'Mia Hall',
                'Benjamin Lewis',
                'Ava Harris',
                'Matthew Turner',
                'Harper Martinez',
                'Chloe Young'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() =>  Math.floor(Math.random() * (100 - 0 + 1)) + 10),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() =>  Math.floor(Math.random() * (100 - 0 + 1)) + 10),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function HorizontalBarChart() {
  return <Bar options={options} data={data} />;
}

export default HorizontalBarChart;