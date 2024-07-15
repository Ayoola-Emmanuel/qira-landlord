import React from "react";
import auth from "../assets/auth-img.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="p-4 md:bg-white min-h-screen auth-bg w-full h-full bg-cover bg-center bg-no-repeat">
      <div className="relative flex justify-center left-0 w-full md:w-[47%]">
        <div className="w-full xs:w-11/12 sm:w-4/5 bg-white p-7 md:p-0 rounded-lg md:rounded-none md:w-[25rem] mx-auto md:my-7">
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {children}
        </div>
      </div>

      <div className="fixed top-0 right-0 bottom-0 w-6/12 hidden md:block">
        <img src={auth} alt="auth-background" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AuthLayout;
