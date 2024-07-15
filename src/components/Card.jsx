import React from "react";

const Card = ({ children }) => {
  return (
    <div className="rounded-lg h-full sm:h-auto md:h-40 p-5 basis-full xs:basis-[49%] border-none card-shadow">
      {children}
    </div>
  );
};

export default Card;
