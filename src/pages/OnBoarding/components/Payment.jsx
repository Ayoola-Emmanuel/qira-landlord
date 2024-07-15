import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import Dropdown from "../../../components/Dropdown";
import { fetchAccountHolderName, fetchBankData } from "../../../data";
import axios from "axios";

const Payment = ({ handleSubmit }) => {
  const [formInput, setFormInput] = useState({
    bankName: "",
    accountNo: "",
    bankCode: "",
  });
  const [bankData, setBankData] = useState([]);
  const [accountHolderName, setAccountHolderName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleBankSelect = (selectedBankName) => {
    const selectedBank = bankData.find(
      (bank) => bank.name === selectedBankName
    );
    if (selectedBank) {
      setFormInput({
        ...formInput,
        bankName: selectedBankName,
        bankCode: selectedBank.code,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const bankInfo = await fetchBankData();
      setBankData(bankInfo);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchAccountName = async () => {
  //     const { accountNo, bankCode } = formInput;
  //     if (accountNo && bankCode) {
  //       const name = await fetchAccountHolderName(accountNo, bankCode);
  //       setAccountHolderName(name);
  //     }
  //   };
  //   fetchAccountName();
  // }, [formInput.accountNo, formInput.bankCode]);
  
  return (
    <div>
      <div className="border shadow border-[#E4E7EC] p-4 rounded mt-6">
        <h4 className="text-[#080746] font-semibold text-lg mb-5">
          How do you want to get paid?
        </h4>
        <div className="my-2">
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-6">
            <Dropdown
              label="Bank Name*"
              options={bankData.map((bank) => bank.name)}
              onSelectOption={handleBankSelect}
            />

            <InputField
              id="accountNo"
              name="accountNo"
              type="text"
              label="Account Number*"
              placeholder="01902939093"
              value={formInput.accountNo}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:items-center gap-0 sm:flex-row sm:gap-6">
            {accountHolderName && (
              <div className="py-3 font-semibold px-4 bg-[#E4E7EC] rounded uppercase w-full sm:w-[49%]">
                {accountHolderName}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-primary text-white rounded-lg py-2 px-12"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payment;
