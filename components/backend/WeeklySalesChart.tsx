"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import React, { useState } from "react";

const WeeklySalesChart = () => {

    // const options = {
    //     reponsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         title: {
    //             display: false,
    //             text: "Chart.js Line Chart",
    //         },
    //     },
    // };

    // const labels = ["January", "Febrauary"];

    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: "",
    //             data : labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
    //             borderColor: "rgb(255, 99, 132)",
    //             backgroundColor: "rgba(255, 99, 132, 0.5)",
    //         },
    //         {
    //             label: "",
    //             data : labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
    //             borderColor: "rgb(53, 162, 235)",
    //             backgroundColor: "rgba(53, 162, 235, 0.5)",
    //         },
    //     ],
    // };
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Sales',
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
              label: 'Orders',
              data: [70, 86, 92, 16, 20, 89,65],
              borderColor: 'rgba(128, 123, 132, 1)',
              backgroundColor: 'rgba(128, 128, 132, 0.2)',
          },
      ],
  };

  const options = {
      scales: {
          yAxes: [
              {
                  ticks: {
                      beginAtZero: true,
                  },
              },
          ],
      },
  };

  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Monthly Sales Stats</h2>
      <div className="p-4">
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay === tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line className="mt-20" key={i} data={data} options={options}/>
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WeeklySalesChart;
