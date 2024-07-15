import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const Notification = ({ info, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-5 z-[2200]">
      <div className="bg-[#008080] py-3 px-3.5 w-11/12 xs:w-[26rem] my-2 rounded-full mx-auto">
        <div className="flex gap-3 items-center justify-start">
          <div className="bg-[#51D868] flex p-1.5 rounded-full text-white text-lg">
            <FaCheck />
          </div>
          <h6 className="text-white">{info}</h6>
        </div>
      </div>
    </div>
  );
};

export default Notification;
