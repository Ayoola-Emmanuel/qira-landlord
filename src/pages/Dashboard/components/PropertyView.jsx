import React, { useEffect, useRef, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const PropertyView = () => {
  const [selectedOption, setSelectedOption] = useState("Property");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <div className="bg-white mt-5 rounded-xl p-5 card-shadow">
      <div className="flex flex-col xs:flex-row gap-3 xs:gap-0 justify-between items-start xs:items-center">
        <h6 className="font-semibold text-[#080746] text-lg sm:text-xl">
          Property View
        </h6>

        <div className="flex items-center gap-3">
          <h6 className="text-[#020202]">Sort by</h6>

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 w-full rounded-full border border-[#020202] shadow-sm py-1 px-2 sm:px-4 sm:py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-[#020202]"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{selectedOption}</span>
                <span>
                  <PiCaretDownBold />
                </span>
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-1 w-full border  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => handleSelectOption("Property")}
                    className="block w-full text-left py-1 px-2 sm:px-4 sm:py-2 text-sm text-gray-700 border-b border-[#c0c0c0]"
                    role="menuitem"
                  >
                    Property
                  </button>
                  <button
                    onClick={() => handleSelectOption("Payment")}
                    className="block w-full text-left py-1 px-2 sm:px-4 sm:py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-6">
        <Bar
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [
                  2200, 4600, 4300, 3300, 1800, 2800, 2100, 3400, 2800, 2200,
                  1700, 2900,
                ],
                backgroundColor: ["#1052BA"],
                barThickness: 25,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default PropertyView;
