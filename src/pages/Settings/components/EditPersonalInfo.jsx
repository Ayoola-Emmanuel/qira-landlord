import React, { useEffect, useState } from "react";
import PhotoAttachment from "../../../components/PhotoAttachment";
import SettingsLayout from "../../../components/SettingsLayout";
import InputField from "../../../components/InputField";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Notification from "../../../components/Notification";
import { fetchAllStates, fetchCities } from "../../../data";
import Dropdown from "../../../components/Dropdown";

const EditPersonalInfo = () => {
  const [formInput, setFormInput] = useState({
    propertyName: "Warm and Cozy Apartment",
    amount: "#3,500",
    address: "No 24, Ogudu street, ikeja. Lagos state",
    state: "",
    city: "",
  });

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

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

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
    <SettingsLayout>
      <div className="bg-white rounded-lg w-full">
        <div className="rounded-md card-shadow p-5 mb-5">
          <h4 className="text-[#080746] font-medium text-xl mb-5">Overview</h4>
          <div className="py-2 my-2">
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
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
                placeholder="#3,500"
                value={formInput.amount}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
              <InputField
                id="address"
                name="address"
                label="Address"
                placeholder="No 24, Ogudu street, ikeja. Lagos state"
                value={formInput.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
              <Dropdown
                label="State"
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
          </div>
          <PhotoAttachment />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-5 py-2 rounded-lg"
            onClick={openSaveModal}
          >
            Submit
          </button>
        </div>

        {saveModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[3000]">
            <div className="bg-white p-10 rounded-lg w-[26rem] mx-auto">
              <div className="flex justify-center text-primary text-8xl mb-4">
                <AiOutlineCloseCircle />
              </div>
              <div className="text-center mb-5">
                <h6 className="text-[#020202] font-semibold text-2xl mb-1.5">
                  Save Changes?
                </h6>
                <p>
                  Are you sure you want to save changes? This process can not be
                  undone.
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
                  className="w-full py-1.5 rounded-md bg-primary text-white"
                  onClick={openNotificationBadge}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {isNotification && (
          <Notification
            info="Profile details successfully updated!"
            onClose={closeNotificationBadge}
          />
        )}
      </div>
    </SettingsLayout>
  );
};

export default EditPersonalInfo;
