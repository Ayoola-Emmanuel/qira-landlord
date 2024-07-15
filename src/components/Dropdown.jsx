import React, { useState, useRef, useEffect } from "react";
import { PiCaretDown } from "react-icons/pi";

const Dropdown = ({ label, options, onSelectOption, defaultValue }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelectOption(option);
    setOpenDropdown(false);
  };

  return (
    <div className="mb-6 w-full" ref={dropdownRef}>
      <h6 className="font-medium text-base mb-2 capitalize">{label}</h6>
      <div className="relative">
        <div
          className="w-full flex justify-between items-center border border-[#C6C6C6] py-3 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="basis-9/12">
            {selectedOption || `Select ${label}`}
          </p>
          <button>
            <PiCaretDown />
          </button>
        </div>
        {openDropdown && (
          <div className="absolute top-full z-50 bg-white w-full max-h-40 overflow-y-hidden hover:overflow-y-auto border border-[#C6C6C6] rounded-b-md">
            {options.map((option, idx) => (
              <p
                key={idx}
                className="p-2 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
