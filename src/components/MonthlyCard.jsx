import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../context/ThemeContext";

const MonthlyCard = () => {
  const { darkMode } = useContext(ThemeContext);

  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      background: "transparent",
    },

    theme: {
      mode: darkMode ? "dark" : "light",
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#5D87FF"],

    tooltip: {
      enabled: true,
      theme: darkMode ? "dark" : "light",
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 80,
          },
        },
      },
    ],
  };

  const series = [
    {
      data: [20, 35, 25, 45, 30, 50],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-gray-900/40 p-4 sm:p-5 lg:p-6 w-full transition-colors duration-300">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
        Monthly Earnings
      </h2>

      {/* Amount */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
        $6,820
      </h1>

      {/* Growth */}
      <p className="text-green-500 text-sm sm:text-base mt-2">↑ 9% last year</p>

      {/* Chart */}
      <div className="mt-4">
        <Chart
          options={options}
          series={series}
          type="line"
          height={90}
          width="100%"
        />
      </div>
    </div>
  );
};

export default MonthlyCard;