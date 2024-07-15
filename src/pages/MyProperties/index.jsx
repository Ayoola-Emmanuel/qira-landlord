import React, { useState, useEffect, useRef } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Pagination from "../../components/Pagination";
import { BsThreeDotsVertical } from "react-icons/bs";
import apartment from "../../assets/apartment.jpg";
import DeleteModal from "./components/DeleteModal";
import NO_DATA_2 from "../../assets/no_data_img.png";

import PropertiesMobile from "./components/PropertiesMobile";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const propertiesInfo = [
  {
    img: apartment,
    title: "Warm and Cozy Apartment",

    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    img: apartment,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
];

const MyProperties = () => {
  const [data, setData] = useState(propertiesInfo);
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    idx: null,
  });

  const [isNotification, setIsNotification] = useState(false);

  const closeNotificationBadge = () => setIsNotification(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setDropdown((prevState) => {
      const newState = { ...prevState };
      newState[index] = !prevState[index];
      for (let key in newState) {
        if (key !== index.toString()) {
          newState[key] = false;
        }
      }
      return newState;
    });
  };

  const openDeleteModal = (idx) => {
    setDeleteModal({ isOpen: true, idx });
  };
  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, idx: null });
  };

  const deleteProperty = (idx) => {
    setData((prevData) => prevData.filter((_, index) => index !== idx));

    setDropdown((prevState) => {
      const newState = { ...prevState };
      newState[idx] = false;
      return newState;
    });

    closeDeleteModal();
    setIsNotification(true);
  };

  return (
    <DashboardLayout header="Properties">
      <div
        className="md:bg-white md:card-shadow w-full rounded-md"
        ref={dropdownRef}
      >
        <div className="mx-15">
          {data && data.length > 0 ? (
            <>
              <div className="hidden md:block">
                <table className="w-full table-auto text-sm text-left">
                  <thead className=" bg-[#F9F9F9]">
                    <tr>
                      <th className="p-4">
                        <h6 className="font-semibold text-sm text-[#020202]">
                          Title
                        </h6>
                      </th>
                      <th className="p-4">
                        <h6 className="font-semibold text-sm text-[#020202]">
                          Date
                        </h6>
                      </th>
                      <th className="p-4">
                        <h6 className="font-semibold text-sm text-[#020202]">
                          View
                        </h6>
                      </th>
                      <th className="p-4">
                        <h6 className="font-semibold text-sm text-[#020202]">
                          Status
                        </h6>
                      </th>
                      <th className="p-4">
                        <h6 className="font-semibold text-sm text-[#020202]">
                          Actions
                        </h6>
                      </th>
                    </tr>
                  </thead>
                  {loading ? (
                    <tr>
                      <td>
                        <Loader />
                      </td>
                    </tr>
                  ) : (
                    <>
                      {data.map((event, idx) => {
                        return (
                          <tr key={idx} className="border-b border-[#E4E7EC]">
                            <td className="p-4 whitespace-nowrap">
                              <div className="flex gap-4">
                                <div className="basis-32 h-20">
                                  <img
                                    src={apartment}
                                    alt="apartment"
                                    className="w-full h-full rounded-md"
                                  />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-lg text-[#020202] mb-1">
                                    {event.title}
                                  </h6>
                                  <p className="text-[#020202] text-[17px] mb-1.5">
                                    {event.address}
                                  </p>
                                  <div className="flex gap-1">
                                    <h6 className="text-primary font-bold text-[17px]">
                                      {event.amount}{" "}
                                    </h6>
                                    <p>/ month</p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 whitespace-nowrap">
                              <h6 className="text-[#020202]">{event.date}</h6>
                            </td>

                            <td className="p-4 whitespace-nowrap">
                              <h6 className="text-[#020202]">{event.view}</h6>
                            </td>

                            <td className="p-4 whitespace-nowrap">
                              <button className="px-3.5 shadow-sm flex items-center gap-2 rounded-full py-1 cursor-default bg-[#ECFDF3]">
                                <span className="inline-block w-3 h-3 rounded-full bg-[#12B76A]"></span>
                                <span className="text-[#027A48] font-medium">
                                  Active
                                </span>
                              </button>
                            </td>

                            <td className="p-4 whitespace-nowrap relative">
                              <button
                                className="text-lg flex justify-center"
                                onClick={() => handleDropdownToggle(idx)}
                              >
                                <BsThreeDotsVertical />
                              </button>
                              {dropdown[idx] && (
                                <div className="absolute left-1 -bottom-10 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-10">
                                  <Link
                                    className="border-b p-1.5 font-medium inline-block"
                                    to="/my-properties/edit-property"
                                  >
                                    Edit
                                  </Link>
                                  <button
                                    className="p-1.5 cursor-pointer font-medium"
                                    onClick={() => openDeleteModal(idx)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                            </td>
                            {deleteModal.isOpen && deleteModal.idx === idx && (
                              <DeleteModal
                                closeDeleteModal={closeDeleteModal}
                                idx={idx}
                                deleteProperty={deleteProperty}
                              />
                            )}
                            {isNotification && (
                              <Notification
                                info="Apartment details successfully deleted!"
                                onClose={closeNotificationBadge}
                              />
                            )}
                          </tr>
                        );
                      })}
                    </>
                  )}
                </table>
              </div>

              <div className="md:hidden">
                <PropertiesMobile data={data} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <img
                alt="not-found"
                src={NO_DATA_2}
                className="w-48"
                width={200}
                height={200}
              />
              <span className="text-sm">
                There are currently no Properties found
              </span>
            </div>
          )}
        </div>

        {!loading && <Pagination />}
      </div>
    </DashboardLayout>
  );
};

export default MyProperties;
