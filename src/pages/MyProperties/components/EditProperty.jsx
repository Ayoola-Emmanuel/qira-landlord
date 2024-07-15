import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import DropdownInput from "../../../components/DropdownInput";
import DashboardLayout from "../../../components/DashboardLayout";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Notification from "../../../components/Notification";
import PhotoAttachment from "../../../components/PhotoAttachment";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fetchAllStates, fetchCities } from "../../../data";
import Dropdown from "../../../components/Dropdown";

const EditProperty = () => {
  const [formInput, setFormInput] = useState({
    propertyName: "",
    amount: "",
    address: "",
    state: "",
    city: "",
    phoneNo: "",
    availability: "",
  });

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

  const [saveModal, setSaveModal] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const openSaveModal = () => setSaveModal(true);
  const closeSaveModal = () => setSaveModal(false);

  const openNotificationBadge = () => {
    closeSaveModal();
    setIsNotification(true);
  };
  const closeNotificationBadge = () => setIsNotification(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleStateChange = async (selectedState) => {
    setFormInput({
      ...formInput,
      state: selectedState,
    });

    const stateObj = data.find((state) => state.name === selectedState);

    if (stateObj) {
      const stateCode = stateObj.code;
      const cities = await fetchCities(stateCode);
      setCities(cities);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const states = await fetchAllStates();
      setData(states);
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout header="Edit Property">
      <Link to="/my-properties" className="flex gap-2 items-center mb-5">
        <span className="font-medium text-xl">
          <IoArrowBack />
        </span>
        <span className="font-medium text-lg text-[#080746]">Back</span>
      </Link>
      <div className="bg-white w-full rounded-md">
        <div className="rounded-md card-shadow p-5 mb-9">
          <h4 className="text-[#080746] font-medium text-xl mb-5">Overview</h4>
          <div>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
              <InputField
                id="propertyName"
                name="propertyName"
                label="Property name"
                placeholder="Warm and Cozy Apartment"
                value={formInput.propertyName}
                onChange={handleChange}
              />
              <InputField
                id="amount"
                name="amount"
                label="Amount/month"
                placeholder="#4,500"
                value={formInput.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputField
                id="address"
                name="address"
                label="Address"
                placeholder="No 24, Ogudu street, ikeja. Lagos state"
                value={formInput.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
              <Dropdown
                label="state"
                options={data.map((state) => state.name)}
                onSelectOption={handleStateChange}
              />
              <Dropdown
                label="City"
                options={cities.map((city) => city.name)}
                onSelectOption={(selectedCity) =>
                  setFormInput({ ...formInput, city: selectedCity })
                }
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
              <InputField
                id="phoneNo"
                name="phoneNo"
                label="Phone Number"
                placeholder="090168685259"
                value={formInput.phoneNo}
                onChange={handleChange}
              />

              <Dropdown
                label="Availability"
                options={["Available", "Rented"]}
                onSelectOption={(selectedAvailability) =>
                  setFormInput({
                    ...formInput,
                    availability: selectedAvailability,
                  })
                }
              />
            </div>
          </div>
        </div>
        <PhotoAttachment />

        <div className="flex justify-end">
          <button
            className="bg-primary text-white rounded-md px-9 py-2.5"
            onClick={openSaveModal}
          >
            Submit
          </button>
        </div>
      </div>
      {saveModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
          <div className="bg-white p-10 rounded-lg w-[26rem] mx-auto">
            <div className="flex justify-center text-[#1052BA] text-8xl mb-4">
              <AiOutlineCloseCircle />
            </div>
            <div className="text-center mb-5">
              <h6 className="text-[#020202] font-semibold text-2xl mb-1.5">
                Edit Property?
              </h6>
              <p>
                Are you sure you want to submit Warm and Cozy apartment to the
                property? This process can not be undone.
              </p>
            </div>
            <div className="flex gap-6 my-4">
              <button
                className="w-full py-1.5 rounded-md shadow-sm bg-transparent border border-[#E1E5EA]"
                onClick={closeSaveModal}
              >
                Cancel
              </button>
              <button
                className="w-full py-1.5 rounded-md bg-[#1052BA] text-white"
                onClick={openNotificationBadge}
              >
                Submit
              </button>
            </div>
          </div>
          {isNotification && (
            <Notification
              info="Apartment details successfully updated!"
              onClose={closeNotificationBadge}
            />
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default EditProperty;
