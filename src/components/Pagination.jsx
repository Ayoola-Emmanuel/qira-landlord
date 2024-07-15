import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className="flex justify-end p-4 my-3">
      <div className="flex gap-5">
        <button className="flex gap-2 items-center border border-[#D0D5DD] px-3.5 py-0.5 shadow-sm rounded-md">
          <span>
            <FaArrowLeft />
          </span>
          <span>Previous</span>
        </button>

        <ul className="flex items-center gap-2">
          {pages.map((item, index) => (
            <li key={index} className="text-sm">
              {item == "..." ? (
                <p>{item}</p>
              ) : (
                <button
                  aria-current={currentPage == item ? "page" : false}
                  className={`px-3.5 py-2 rounded-md duration-150 hover:text-white hover:bg-primary ${
                    currentPage == item
                      ? "bg-primary text-white font-medium"
                      : ""
                  }`}
                >
                  {item}
                </button>
              )}
            </li>
          ))}
        </ul>

        <button className="flex gap-2 items-center border border-[#D0D5DD] px-3.5 py-0.5 shadow-sm rounded-md">
          <span>Next</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
