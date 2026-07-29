
import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../context/ThemeContext";

const SalesChart = () => {
  const { darkMode } = useContext(ThemeContext);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "transparent",
    },

    theme: {
      mode: darkMode ? "dark" : "light",
    },

    colors: ["#5D87FF"],

    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: false,
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: darkMode ? "#D1D5DB" : "#6B7280",
          fontSize: "12px",
        },
      },
    },

    yaxis: {
      labels: {
        formatter: (value) => `$${value}`,
        style: {
          colors: darkMode ? "#D1D5DB" : "#6B7280",
          fontSize: "12px",
        },
      },
    },

    grid: {
      borderColor: darkMode ? "#374151" : "#f1f1f1",
      strokeDashArray: 4,
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280,
          },
          plotOptions: {
            bar: {
              columnWidth: "55%",
            },
          },
          xaxis: {
            labels: {
              rotate: 0,
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 240,
          },
          plotOptions: {
            bar: {
              columnWidth: "60%",
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "9px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "9px",
              },
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Sales",
      data: [25, 45, 30, 60, 40, 55],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-gray-900/40 p-4 sm:p-5 lg:p-6 h-[320px] sm:h-[360px] md:h-[380px] lg:h-[420px] w-full transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
          Sales Overview
        </h2>

        <select className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-lg px-2 py-2 sm:px-3 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-400">
          <option>March 2025</option>
          <option>March 2026</option>
          <option>March 2027</option>
          <option>March 2028</option>
          <option>March 2029</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-55 sm:h-65 md:h-70 lg:h-80">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default SalesChart;