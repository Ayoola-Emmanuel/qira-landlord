import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox mr-2.5 accent-primary w-5 h-5 rounded border border-[#14181F]"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
