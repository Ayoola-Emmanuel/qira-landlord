import React, { useState } from "react";
import { PiWarningCircleBold, PiNotePencilBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const [logout, setLogout] = useState(false);

  const handleLogoutModal = () => {
    setLogout(true);
  };

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/dashboard");
  }, 3000);

  return (
    <div className="relative">
      <div className="border shadow border-[#E4E7EC] p-3 xs:p-6 rounded-md mt-6">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-[#080746] font-semibold text-lg">
            My Information
          </h4>
          <div className="bg-[#FFEAD4] flex gap-2 items-center rounded-md px-3 py-0.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FE982A]"></span>
            <span className="text-[#FE982A]">Pending</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:gap-3 sm:flex-row items-center sm:items-end sm:justify-between">
          <div className="basis-full sm:basis-10/12 md:basis-2/3">
            <div className="flex flex-wrap xs:flex-nowrap gap-3 mb-6 justify-between">
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  Tolu Araba Landed Property
                </h4>
                <p className="text-[#333]">Property Name</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  09012059519
                </h4>
                <p className="text-[#333]">Phone Contact</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">BVN</p>
              </div>
            </div>

            <div className="flex flex-wrap xs:flex-nowrap gap-3 mb-6 justify-between">
              <div className="basis-full xs:basis-2/3">
                <h4 className="text-[#020202] font-semibold mb-2">
                  8 Olalusi Street, Owode Onirin, Ikorodu Bus Stop, Lagos,
                  Nigeria
                </h4>
                <p className="text-[#333]">House Address</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">Lagos</h4>
                <p className="text-[#333]">State</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">Ikeja</h4>
                <p className="text-[#333]">City</p>
              </div>
            </div>

            <div className="flex flex-wrap xs:flex-nowrap gap-3 mb-6 justify-between">
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">Bank Account</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">UBA</h4>
                <p className="text-[#333]">Bank Name</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  Evwidonor Allen Edoja
                </h4>
                <p className="text-[#333]">Bank Account Name</p>
              </div>
            </div>
          </div>
          <div className="sm:basis-32">
            <button className="bg-primary sm:w-full flex gap-2.5 px-4 rounded-md text-white justify-between py-1.5">
              <span>Edit info</span>
              <span className="text-lg mt-1">
                <PiNotePencilBold />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-[#FD495E]/[0.09] text-[#FF4137]  px-16 py-2"
          onClick={handleLogoutModal}
        >
          Logout
        </button>
      </div>

      {logout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
          <div className="bg-white p-5 rounded-lg w-80 mx-auto">
            <div className="flex justify-center text-[#F68500] text-4xl mb-3">
              <PiWarningCircleBold />
            </div>
            <div className="text-center">
              <h6 className="text-[#020202] font-semibold text-lg mb-1.5">
                Confirmation
              </h6>
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="flex flex-col gap-3 my-3">
              <button className="w-full py-1.5 rounded-md bg-[#F32051] text-white">
                <Link to="/" className="w-full h-full inline-block">
                  Yes
                </Link>
              </button>
              <button
                className="w-full py-1.5 rounded-md bg-transparent border border-[#E1E5EA]"
                onClick={() => setLogout(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
