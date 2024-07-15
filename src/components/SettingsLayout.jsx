import React from "react";
import { NavLink } from "react-router-dom";

import { GrShieldSecurity } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import DashboardLayout from "./DashboardLayout";

const sidetab = [
  {
    link: "/settings/personal-information",
    icon: <LuUserCog />,
    title: "Personal Information",
  },
  {
    link: "/settings/bank-information",
    icon: <SlBriefcase />,
    title: "Bank Information",
  },
  {
    link: "/settings/password-details",
    icon: <GrShieldSecurity />,
    title: "Password Details",
  },
];

const SettingsLayout = ({ children }) => {
  return (
    <DashboardLayout header="Settings">
      <div className="flex gap-6 flex-col md:flex-row md:gap-16 items-start">
        <div className="p-3 rounded-md border-[1.5px] border-[#1052BA] hidden md:flex flex-col gap-2 w-72">
          {sidetab.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#080746] text-white sidebar"
                  : "sidebar hover:bg-[#080746] hover:text-white active:bg-[#080746] duration-150"
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="md:hidden w-full">
          <div className="flex flex-col w-3/5 xs:w-full xs:flex-row justify-between">
            {sidetab.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#080746] text-white sidebar"
                    : "sidebar hover:bg-[#080746] hover:text-white active:bg-[#080746] duration-150"
                }
              >
                <span className="text-lg md:text-xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="w-full md:w-4/5">{children}</div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayout;
