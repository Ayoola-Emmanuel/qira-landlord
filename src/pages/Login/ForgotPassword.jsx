import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";

const ForgotPassword = () => {
  const [formInput, setFormInput] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    navigate("/set-password");
  };

  return (
    <AuthLayout>
      <div className="mt-8 text-center md:text-left">
        <h4 className="font-medium text-3xl mb-4">Forgot Password!</h4>
        <form>
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />

          <AuthButton type="button" onClick={handleSubmit}>
            Send Link
          </AuthButton>
          <div className="flex justify-center mt-2">
            <Link to="/">Go Back</Link>
          </div>
        </form>
        {/* {isNotification && (
          <Notification
            info="Account verified! you will be logged in shortly"
            onClose={closeNotificationBadge}
          />
        )} */}
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
