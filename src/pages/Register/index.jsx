import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../../components/AuthLayout";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";

const Register = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verification");
  };
  return (
    <AuthLayout>
      <div className="mt-7 text-center md:text-left">
        <h4 className="font-medium text-3xl mb-4">Create Account</h4>
        <p className="mb-3.5">
          Register or sign in to list your properties and earn money directly
          without having any third party
        </p>
        <form onSubmit={handleSubmit}>
          <InputField
            id="name"
            name="name"
            type="text"
            placeholder="Enter full name"
            value={formInput.name}
            onChange={handleChange}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formInput.password}
            onChange={handleChange}
          />
          <InputField
            id="password_confirm"
            name="password_confirm"
            type="password"
            placeholder="Confirm password"
            value={formInput.password_confirm}
            onChange={handleChange}
          />

          <AuthButton
            disabled={
              !formInput.email ||
              !formInput.password ||
              !formInput.name ||
              !formInput.password_confirm
            }
          >
            Continue
          </AuthButton>
          <div className="w-10/12 mx-auto my-3 flex gap-2 items-center">
            <div className="w-1/2 h-[1px] bg-gray-200"></div>
            <span>or</span>
            <div className="w-1/2 h-[1px] bg-gray-200"></div>
          </div>

          <button className="flex gap-4 items-center border border-[#E2E2E2] py-3 justify-center w-full rounded-md bg-[#F4F4F4]">
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="mt-4 flex items-center gap-2 justify-center">
            <span className="text-base sm:text-lg font-medium">
              Don't have any account?
            </span>
            <Link
              to="/"
              className="text-[#008080] text-base sm:text-lg font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
