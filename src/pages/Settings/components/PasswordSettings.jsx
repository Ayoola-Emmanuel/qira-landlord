import React, { useState } from "react";
import InputField from "../../../components/InputField";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Notification from "../../../components/Notification";
import SettingsLayout from "../../../components/SettingsLayout";

const PasswordSettings = () => {
  const [formInput, setFormInput] = useState({
    oldPassword: "password123",
    newPassword: "",
    confirmPassword: "",
  });

  const [isNotification, setIsNotification] = useState(false);
  const [saveModal, setSaveModal] = useState(false);

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

  return (
    <SettingsLayout>
      <div className="w-full md:w-9/12">
        <h4 className="font-medium text-2xl mb-7">Password Details</h4>
        <div className="">
          <InputField
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            type="password"
            placeholder="Oluwadamilola222"
            value={formInput.oldPassword}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <InputField
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            placeholder="Susannah419"
            value={formInput.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm new Password"
            type="password"
            placeholder="Susannah419"
            value={formInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-primary text-white rounded-md px-6 py-2"
            onClick={openSaveModal}
          >
            Save changes
          </button>
        </div>

        {saveModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
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
            info="Password successfully changed!"
            onClose={closeNotificationBadge}
          />
        )}
      </div>
    </SettingsLayout>
  );
};

export default PasswordSettings;
