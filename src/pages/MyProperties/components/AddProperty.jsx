import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import InputField from "../../../components/InputField";
import DropdownInput from "../../../components/DropdownInput";
import PhotoAttachment from "../../../components/PhotoAttachment";
import Checkbox from "../../../components/Checkbox";
import { fetchAllStates, fetchCities } from "../../../data";
import Dropdown from "../../../components/Dropdown";

const AddProperty = () => {
  const [formInput, setFormInput] = useState({
    propertyTitle: "",
    price: "",
    state: "",
    city: "",
    address: "",
    description: "",
    propertyType: "",
    category: "",
    kitchens: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
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
    <DashboardLayout header='Add Property'>
      <div>
        <Link to="/my-properties" className="flex gap-2 items-center mb-5">
          <span className="font-medium text-xl">
            <IoArrowBack />
          </span>
          <span className="font-medium text-lg text-[#080746]">Back</span>
        </Link>
        <div className="bg-white rounded-md card-shadow py-4 px-6 mb-7">
          <h4 className="text-[#080746] font-semibold text-xl mb-5">
            Overview
          </h4>
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
            <InputField
              id="propertyTitle"
              name="propertyTitle"
              label="Property Title*"
              placeholder="your property name"
              value={formInput.propertyTitle}
              onChange={handleChange}
            />

            <Dropdown
              label="Category"
              options={[
                "villa",
                "1-Bed",
                "2-Bed",
                "3-Bed",
                "Condo",
                "Duplex",
                "Mini-flat",
                "Studio",
              ]}
              onSelectOption={(selectedCategory) =>
                setFormInput({
                  ...formInput,
                  category: selectedCategory,
                })
              }
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
            <InputField
              id="price"
              name="price"
              label="Price*"
              placeholder="your price"
              value={formInput.price}
              onChange={handleChange}
            />

            <Dropdown
              label="Payment Types"
              options={["Daily", "Weekly", "Monthly", "Yearly"]}
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
          <div className="flex gap-8">
            <InputField
              id="address"
              name="address"
              label="Address*"
              placeholder="Enter address"
              value={formInput.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 w-full">
            <label
              htmlFor="description"
              className="block font-medium text-base text-[#020202] mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="w-full h-32 border border-[#C6C6C6] leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base py-3 px-2.5"
            ></textarea>
          </div>
        </div>
        <ListingDetails formInput={formInput} setFormInput={setFormInput} />
        <Amenities />
        <PhotoAttachment />
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-primary px-6 rounded-md py-2 text-white">
          Publish Property
        </button>
      </div>
    </DashboardLayout>
  );
};

export default AddProperty;

const ListingDetails = ({ formInput, setFormInput }) => {
  return (
    <div className="bg-white rounded-md card-shadow py-4 px-6 mb-7">
      <h4 className="text-[#080746] font-semibold text-xl mb-5">
        Listing Details
      </h4>
      <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
        <Dropdown
          label="Kitchens"
          options={["1", "2", "3", "4", "5"]}
          onSelectOption={(selectedKitchen) =>
            setFormInput({ ...formInput, kitchens: selectedKitchen })
          }
        />

        <Dropdown
          label="Bedrooms"
          options={["1", "2", "3", "4", "5"]}
          onSelectOption={(selectedBedrooms) =>
            setFormInput({ ...formInput, bedrooms: selectedBedrooms })
          }
        />
      </div>
      <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
        <Dropdown
          label="Bathrooms"
          suggestions={["1", "2", "3", "4", "5"]}
          onSelectOption={(selectedBathrooms) =>
            setFormInput({ ...formInput, bathrooms: selectedBathrooms })
          }
        />

        <Dropdown
          label="Garages"
          options={["1", "2", "3", "4", "5"]}
          onSelectOption={(selectedGarages) =>
            setFormInput({ ...formInput, garages: selectedGarages })
          }
        />
      </div>
    </div>
  );
};

const labels = [
  "Water Pool",
  "Parking Lot",
  "Personal Club",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
  "Water Pool",
];

const Amenities = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(12).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);
  };

  return (
    <div className="bg-white rounded-md card-shadow py-4 px-6 mb-7">
      <h4 className="text-[#080746] font-semibold text-xl mb-5">Amenities</h4>
      <div className="mt-6 mb-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-9">
          {labels.map((label, index) => (
            <Checkbox
              key={index}
              label={label}
              checked={checkboxStates[index]}
              onChange={() => handleCheckboxChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
