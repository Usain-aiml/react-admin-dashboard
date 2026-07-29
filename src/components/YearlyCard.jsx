
import { useContext } from "react";
import Chart from "react-apexcharts";
import { FaArrowUp } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const YearlyCard = () => {
  const { darkMode } = useContext(ThemeContext);

  const options = {
    chart: {
      type: "donut",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },

    labels: ["2024", "2025"],

    colors: ["#5D87FF", darkMode ? "#374151" : "#ECF2FF"],

    theme: {
      mode: darkMode ? "dark" : "light",
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",

      labels: {
        colors: darkMode ? "#ffffff" : "#374151",
      },

      markers: {
        width: 10,
        height: 10,
        radius: 10,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "72%",
        },
      },
    },

    tooltip: {
      theme: darkMode ? "dark" : "light",
    },
  };

  const series = [69, 31];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-gray-900/40 p-4 w-full min-w-0 overflow-hidden transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Yearly Breakup
          </h2>

          <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
            $36,358
          </h1>

          <div className="flex items-center gap-3 mt-5">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
              <FaArrowUp className="text-green-600 text-sm" />
            </div>

            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                +9%
              </span>{" "}
              last year
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <Chart options={options} series={series} type="donut" width={158} />
        </div>
      </div>
    </div>
  );
};

export default YearlyCard;