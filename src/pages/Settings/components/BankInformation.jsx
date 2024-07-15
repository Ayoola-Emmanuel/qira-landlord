import React, { useEffect, useState } from "react";
import SettingsLayout from "../../../components/SettingsLayout";
import Dropdown from "../../../components/Dropdown";
import InputField from "../../../components/InputField";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { fetchBankData } from "../../../data";

const arr = [
  {
    name: "Evwindonor allen edoja",
    bankName: "UBA",
    bankNo: "0192009303",
  },
];

const BankInformation = () => {
  const [infoArr, setInfoArr] = useState(arr);
  const [showNewBankForm, setShowNewBankForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleUpdateBank = (index, updatedBankInfo) => {
    const updatedInfoArr = [...infoArr];
    updatedInfoArr[index] = updatedBankInfo;
    setInfoArr(updatedInfoArr);
    setEditingIndex(null);
    setShowNewBankForm(false);
  };

  const openNewBankForm = () => {
    setShowNewBankForm(true);
  };
  const closeNewBankForm = () => {
    setShowNewBankForm(false);
  };

  const handleAddNewBank = (newBankInfo) => {
    setInfoArr([...infoArr, newBankInfo]);
    setShowNewBankForm(false);
  };

  const handleDeleteBank = (index) => {
    const updatedInfoArr = [...infoArr];
    updatedInfoArr.splice(index, 1);
    setInfoArr(updatedInfoArr);
  };
  return (
    <SettingsLayout>
      <div className="w-full md:w-10/12">
        <h4 className="font-medium text-2xl mb-7">Bank Information</h4>
        {infoArr.length === 0 ? (
          <div className="flex border border-{#c0c0c0} w-96 justify-center items-center h-20 mx-auto rounded-md p-2">
            No account
          </div>
        ) : (
          <div className="my-3 flex gap-4 items-center">
            {infoArr.map((item, index) => (
              <div
                className="basis-full sm:basis-1/2 border border-[#c0c0c0] rounded-md p-4"
                key={index}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold uppercase text-black text-wrap">
                    {item.name}
                  </h4>
                  <div className="flex gap-3 items-center">
                    <button onClick={() => handleDeleteBank(index)}>
                      <FaTrashCan />
                    </button>
                    <button
                      className="border border-[#c0c0c0] rounded px-3 py-0.5"
                      onClick={() => setEditingIndex(index)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <h5 className="uppercase font-medium mb-2">{item.bankName}</h5>
                <h6 className="font-medium text-black">{item.bankNo}</h6>

                {editingIndex === index && (
                  <NewBank
                    initialData={item}
                    closeNewBankForm={closeNewBankForm}
                    onAddNewBank={(updatedBankInfo) =>
                      handleUpdateBank(index, updatedBankInfo)
                    }
                  />
                )}
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={openNewBankForm}
            className="bg-primary text-white px-4 py-2 rounded mt-4"
          >
            Add New Bank
          </button>
        </div>

        {showNewBankForm && (
          <NewBank
            closeNewBankForm={closeNewBankForm}
            onAddNewBank={handleAddNewBank}
          />
        )}
      </div>
    </SettingsLayout>
  );
};

export default BankInformation;

const NewBank = ({ initialData, onAddNewBank, closeNewBankForm }) => {
  const [formInput, setFormInput] = useState(
    initialData || {
      bankName: "",
      accountNo: "",
      bankAccount: "",
    }
  );

  const [bankData, setBankData] = useState([]);
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

  const handleAddBank = () => {
    if (!formInput.bankName || !formInput.accountNo || !formInput.bankAccount) {
      return;
    }
    onAddNewBank(formInput);
    closeNewBankForm();
  };

  const handleClose = () => {
    closeNewBankForm();
    setFormInput({
      bankName: "",
      accountNo: "",
      bankAccount: "",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const bankInfo = await fetchBankData();
      setBankData(bankInfo);
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
      <div className="bg-white p-5 rounded-lg w-96 mx-auto">
        <div className="flex justify-end mb-5">
          <button className="text-2xl" onClick={handleClose}>
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <Dropdown
            label="Bank Name*"
            options={bankData.map((bank) => bank.name)}
            onSelectOption={(selectedBank) =>
              setFormInput({ ...formInput, bankName: selectedBank })
            }
            defaultValue={formInput.bankName}
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

        {formInput.bankAccount && (
          <div className="py-3 font-semibold px-4 bg-[#E4E7EC] rounded uppercase w-full">
            {formInput.bankAccount}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleAddBank}
            className="bg-primary text-white px-4 py-2 rounded mt-4"
          >
            {initialData ? "Update Bank" : "Add Bank"}
          </button>
        </div>
      </div>
    </div>
  );
};
