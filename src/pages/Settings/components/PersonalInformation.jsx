import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import checkers from "../../../assets/checkers.png";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { fetchAllStates, fetchCities } from "../../../data";
import Dropdown from "../../../components/Dropdown";

const PersonalInformation = () => {
  const [formInput, setFormInput] = useState({
    name: "Tolu Araba Landed Property",
    phoneNo: "08143490329",
    email: "olaleyesusan03@gmail.com",
    address: "8 Olalusi Street, Owode Onirin Ikorodu Bus Stop, Lagos Nigeria",
    state: "",
    city: "",
    idProof: "",
    idNo: "20/09/1992",
  });
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

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
    <div>
      <h4 className="font-medium text-2xl">Personal Information</h4>
      <div className="w-full md:w-10/12 my-5">
        <div className="flex gap-8 mb-6">
          <ProfilePicture />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="name"
            name="name"
            label="Name"
            placeholder="Tolu Araba Landed Property"
            value={formInput.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="phoneNo"
            name="phoneNo"
            label="Phone Number"
            placeholder="081-4534-45762"
            value={formInput.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="email"
            name="email"
            label="Email Address"
            placeholder="olaleyesusan03@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <InputField
            id="address"
            name="address"
            label="House Address"
            placeholder="8 Olalusi Street, Owode Onirin Ikorodu Bus Stop, Lagos Nigeria"
            value={formInput.address}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <Dropdown
            label="State"
            options={data.map((state) => state.name)}
            onSelectOption={handleStateChange}
            defaultValue="Lagos"
          />
          <Dropdown
            label="City"
            options={cities.map((city) => city.name)}
            onSelectOption={(selectedCity) =>
              setFormInput({ ...formInput, city: selectedCity })
            }
            defaultValue="Ikeja"
          />
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-9">
          <Dropdown
            label="Proof of Identity"
            options={[
              "BVN",
              "NIN",
              "International Passport",
              "Driver's License",
            ]}
            onSelectOption={(selectedIdProof) =>
              setFormInput({ ...formInput, idProof: selectedIdProof })
            }
          />
          <InputField
            id="idNo"
            name="idNo"
            type="text"
            label="Identity Number*"
            placeholder="20/06/1992"
            value={formInput.idNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to="/settings/personal-information/edit"
          className="bg-primary text-white rounded-md px-4 py-1"
        >
          Edit Information
        </Link>
      </div>
    </div>
  );
};

export default PersonalInformation;

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(checkers); // Default profile picture

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(checkers);
  };

  return (
    <div className="flex items-center">
      <img
        src={profileImage}
        alt="Profile"
        className="h-24 w-24 rounded-full object-cover"
      />

      <label
        htmlFor="image-upload"
        className="ml-5 cursor-pointer text-[#C0C0C0] border border-[#C0C0C0] py-0.5 px-2.5 rounded"
      >
        choose
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <button
        onClick={handleDeleteImage}
        className="ml-6 flex items-center gap-2.5 text-red-500"
      >
        <span className="font-semibold text-lg">
          <FaRegTrashAlt />
        </span>
        <span>Delete</span>
      </button>
      <p className="ml-3 text-[#181D25]">JPG,GIF or PNG. 3MB Max</p>
    </div>
  );
};
