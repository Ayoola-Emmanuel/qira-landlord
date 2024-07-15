import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import DashboardLayout from "../../components/DashboardLayout";

const navbar = [
  {
    nav: "nav1",
    title: "All(22)",
  },
  {
    nav: "nav2",
    title: "Inspection Payment",
  },
  {
    nav: "nav3",
    title: "House Booking",
  },
];

const allMsg = [
  {
    icon: <LiaMoneyBillWaveAltSolid />,
    title: "Marion Court Apartment Payment Received",
    text: "You have just been paid for the apartment a sum of NGN 250,000",
    time: "12 hours ago",
    isRead: false,
  },
  {
    icon: <FaRegStar />,
    title: "New House Booking payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis ut sunt necessitatibus, magnam doloribus rem animi libero laboriosam",
    time: "12 hours ago",
    isRead: true,
  },
  {
    icon: <HiOutlineUserAdd />,
    title: "New inspection payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis ut sunt necessitatibus, magnam doloribus rem animi libero laboriosam",
    time: "12 hours ago",
    isRead: false,
  },
  {
    icon: <HiOutlineUserAdd />,
    title: "New inspection payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis ut sunt necessitatibus, magnam doloribus rem animi libero laboriosam",
    time: "12 hours ago",
    isRead: false,
  },
  {
    icon: <HiOutlineUserAdd />,
    title: "New inspection payment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis ut sunt necessitatibus, magnam doloribus rem animi libero laboriosam",
    time: "12 hours ago",
    isRead: false,
  },
];

const Notifications = () => {
  const [activeNav, setActiveNav] = useState("nav1");
  return (
    <DashboardLayout header="Notifications">
      <div className="w-4/5">
        <nav className="flex gap-9 justify-start items-center">
          {navbar.map((item, index) => (
            <button
              key={index}
              className={`${
                activeNav === item.nav
                  ? "text-primary border-b-2 border-primary font-medium"
                  : "text-[#1E1E1EB2]"
              } text-lg`}
              onClick={() => setActiveNav(item.nav)}
            >
              {item.title}
            </button>
          ))}
        </nav>

        <div className="flex flex-col py-4">
          {allMsg.map((msg, index) => (
            <div
              className="flex items-end justify-between py-3 border-b border-[#0000001A]"
              key={index}
            >
              <div className="flex gap-4 items-start basis-4/5">
                <div className="p-1.5 text-[#141414] rounded-full text-lg bg-[#FCCA4D]">
                  {msg.icon}
                </div>
                <div>
                  <h5 className="font-medium text-[#141414] text-lg mb-1">
                    {msg.title}
                  </h5>
                  <p className="text-[#000000B2] mb-3">{msg.text}</p>
                  <p className="text-sm text-[#1E1E1EB2]">{msg.time}</p>
                </div>
              </div>
              {msg.isRead ? <p className="text-[#C82B47]">Unread</p> : null}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
