import React from "react";
import { FaRegBookmark, FaRegEye, FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const cardInfo = [
  {
    icon: <FaRegUser />,
    title: "All Properties",
    value: 20,
  },
  {
    icon: <FaRegBookmark />,
    title: "Payment",
    value: "N40,000",
  },
  {
    icon: <FaRegEye />,
    title: "View",
    value: 1000,
  },
  {
    icon: <FaRegHeart />,
    title: "Review",
    value: 20,
  },
];

const CardOverview = () => {
  return (
    <div className=" rounded-xl p-8 px-4 md:px-8 lg:px-12 card-shadow">
      <div className="overscroll-x-contain">
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-row items-center justify-center xs:justify-between">
          {cardInfo.map((item, index) => (
            <div
              className="basis-9/12 items-start xs:basis-[48%] sm:basis-[32%] md:basis-3/12"
              key={index}
            >
              <div className="flex items-center gap-3.5">
                <div className="bg-primary w-12 h-12 text-xl rounded-full text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="mb-0.5">{item.title}</p>
                  <h6 className="font-semibold text-[#080746] text-lg">
                    {item.value}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
