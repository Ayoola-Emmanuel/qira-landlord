import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import Dropdown from "../../../components/Dropdown";
import { fetchAllStates, fetchCities } from "../../../data";


const Overview = ({ handleNext }) => {
  const [formInput, setFormInput] = useState({
    propertyName: "",
    phoneNo: "",
    address: "",
    state: "",
    city: "",
    idProof: "",
    idNo: "",
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formInput);
  // };

  return (
    <div className="">
      <div className="border shadow border-[#E4E7EC] p-4 rounded mt-6">
        <h4 className="text-[#080746] font-semibold text-lg mb-5">Overview</h4>
        <div className="my-2">
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
            <InputField
              id="propertyName"
              name="propertyName"
              type="text"
              label="Property Name/Business Name*"
              placeholder="Your property name"
              value={formInput.propertyName}
              onChange={handleChange}
            />
            <InputField
              id="phoneNo"
              name="phoneNo"
              type="text"
              label="Phone Number*"
              placeholder="+234 90120 59-519"
              value={formInput.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
            <InputField
              id="address"
              name="address"
              type="text"
              label="Your Address"
              placeholder="8, Olalusi Street, Owode Onirin Bus stop, Ikorodu Road"
              value={formInput.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
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
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
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
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-primary text-white rounded-lg py-2 px-12"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Overview;
