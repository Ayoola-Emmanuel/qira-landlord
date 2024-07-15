import React from "react";

const Spinner = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <p className="text-white text-lg">Loading...</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
