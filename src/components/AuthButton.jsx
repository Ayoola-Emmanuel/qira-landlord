import React from "react";

const AuthButton = ({ children, type, disabled, onClick }) => {
  const buttonClasses = disabled
    ? "w-full py-3 font-medium rounded-md bg-gray-300 text-white my-2 cursor-not-allowed"
    : "w-full py-3 font-medium rounded-md bg-primary text-white my-2";

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AuthButton;
