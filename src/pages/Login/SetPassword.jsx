import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";
import { useNavigate } from "react-router-dom";

const SetPassword = () => {
  const [formInput, setFormInput] = useState({
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const saveChanges = () => {
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="mt-8 text-center md:text-left">
        <h4 className="font-medium text-3xl mb-4">Set Password!</h4>
        <form>
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="@los30psi50%"
            value={formInput.password}
            onChange={handleChange}
          />
          <InputField
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="@los30psi50%"
            value={formInput.password_confirmation}
            onChange={handleChange}
          />
          <AuthButton
            type="button"
            onClick={saveChanges}
            // disabled={!formInput.email || !formInput.password}
          >
            Save Changes
          </AuthButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SetPassword;
