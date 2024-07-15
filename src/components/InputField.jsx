import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputField = ({
  label,
  id,
  name,
  type,
  passwordToggle = type === "password" ? true : false,
  placeholder,
  value,
  onChange,
  borderColor,
}) => {
  const [showPassword, setShowPassword] = React.useState(type === "text");
  return (
    <div className="mb-6 w-full">
      <label className="block font-medium text-base text-[#020202] mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center justify-between relative">
        <input
          className="appearance-none border border-[#C6C6C6] w-full py-3 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base"
          id={id}
          name={name}
          type={passwordToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          style={{ borderColor: borderColor }}
        />
        {type === "password" && (
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <FaRegEye className="w-7" />
            ) : (
              <FaRegEyeSlash className="w-7" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
