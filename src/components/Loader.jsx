import React from "react";

const Loader = ({ color = "white", size }) => {
  return (
    <div color={color} size={size}>
      <div className="lds-ellipsis inline-block relative w-20 h-20">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
