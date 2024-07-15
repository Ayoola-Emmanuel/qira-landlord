import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Overview from "./components/Overview";
import Payment from "./components/Payment";
import Information from "./components/Information";

const OnBoarding = () => {
  const [card, setCard] = useState("card1");

  const handleNext = () => {
    setCard("card2");
  };
  const handleSubmit = () => {
    setCard("card3");
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-12">
      <div className="w-11/12 xs:w-96 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="qira logo" />
          </Link>
        </div>
        <h4 className="text-2xl text-[#020202] font-medium mb-4">
          Welcome Here!
        </h4>
        <p className="text-[#333]">
          We would like to know about you been the owner of your properties.
          Let’s get to know you.
        </p>
      </div>

      <div className="w-[97%] xs:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        {card === "card1" && <Overview handleNext={handleNext} />}
        {card === "card2" && <Payment handleSubmit={handleSubmit} />}
        {card === "card3" && <Information />}
      </div>
    </div>
  );
};

export default OnBoarding;
