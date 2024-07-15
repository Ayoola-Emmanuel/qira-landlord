import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const DropdownInput = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setIsOpen(false);
  };
  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-input")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between relative dropdown-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(!isOpen)}
        className="appearance-none border border-[#C6C6C6] w-full py-3 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base"
      />

      <span
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <PiCaretDownBold />
      </span>
      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          className="dropdown-list absolute top-full left-0 w-full z-10 border border-[#ccc] bg-white"
        >
          {filteredSuggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className="dropdown-item p-2 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
