import React, { useRef, useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import AuthButton from "../../components/AuthButton";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState(["2", "4", "7", "1", "0"]);
  const inputRefs = useRef([]);
  const navigate = useNavigate()

  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event.target.value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerification = () => {
    navigate('/')
  }
  return (
    <AuthLayout>
      <div className="mt-7 text-center md:text-left">
        <h4 className="font-medium text-3xl mb-4">Email Verification</h4>
        <p className="text-lg mb-3.5">
          Enter the OTP that was sent to your email address below at
          abc@gmail.com
        </p>
        <div className="flex justify-between mt-9 mb-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-14 mx-1 text-lg text-center border border-[#C6C6C6] rounded-lg shadow-sm focus:outline-none focus:border-[#008080]"
            />
          ))}
        </div>

        <div className="flex items-center gap-2 justify-start mt-8 mb-4">
          <p className="font-medium">Didn't receive code?</p>
          <button className="text-[#008080] font-semibold">Resend OTP</button>
        </div>
        <AuthButton onClick={handleVerification}>Continue</AuthButton>
      </div>
    </AuthLayout>
  );
};

export default Verification;
