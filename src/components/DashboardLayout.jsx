import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-white.png";
import { FaUsers } from "react-icons/fa";
import { FiBell, FiPlus } from "react-icons/fi";
import { GiHouse, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import user from "../assets/user.png";
import ScrollToTop from "./ScrollToTop";

const navigation = [
  {
    link: "/dashboard",
    icon: <LuLayoutGrid />,
    name: "Dashboard",
  },
  {
    link: "/bookings",
    icon: <IoSettingsOutline />,
    name: "Bookings",
  },
  {
    link: "/customers",
    icon: <FaUsers />,
    name: "Customers",
  },
  {
    link: "/my-properties",
    icon: <GiHouse />,
    name: "My Properties",
  },

  {
    link: "/settings/personal-information",
    icon: <IoSettingsOutline />,
    name: "Settings",
  },
];

const DashboardLayout = ({ header, children }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const openSidebar = () => setMobileSidebar(true);
  const closeSidebar = () => setMobileSidebar(false);
  return (
    <section className="flex min-h-screen justify-between w-screen">
      <div
        className={`${
          mobileSidebar ? "block" : "hidden"
        } md:block fixed md:top-0 md:left-0 w-full xs:w-64 h-full border-r bg-primary shadow-sm space-y-8 z-[1000]`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      <div className="relative ml-0 md:ml-64 w-full mx-auto md:w-10/12">
        <nav className="fixed top-0 w-full md:w-[85%] mx-auto z-[100] bg-white py-6">
          <div className="w-11/12 lg:w-11/12 mx-auto flex justify-between items-center relative">
            <div className="flex gap-3 items-center">
              <button
                className="block md:hidden text-[2rem]"
                onClick={openSidebar}
              >
                <GiHamburgerMenu />
              </button>
              <h2 className="font-semibold text-2xl md:text-3xl text-[#080746]">
                {header}
              </h2>
            </div>

            <div className="flex gap-4 sm:gap-6 items-center">
              <Link to="/notifications" className="relative">
                <FiBell className="text-xl sm:text-2xl" />
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 absolute -top-1 -right-2"></span>
              </Link>
              <Link
                to="/my-properties/add-property"
                className="bg-primary hidden md:flex items-center justify-center px-4 py-1.5 rounded-lg text-white gap-1"
              >
                <span>
                  <FiPlus />
                </span>
                <span>Add Listing</span>
              </Link>
              <div className="relative">
                <img src={user} alt="user avatar" className="w-10 md:w-14" />
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 absolute bottom-2 -right-1"></span>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-32 mb-10 w-11/12 mx-auto">
          <ScrollToTop />
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="flex flex-col h-full px-8 py-8">
      <div className="flex items-center justify-between md:justify-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="text-xl text-white mt-2 block md:hidden"
          onClick={closeSidebar}
        >
          <GrClose />
        </button>
      </div>

      <div className="flex flex-col h-full overflow-auto mt-8">
        <ul className="text-sm font-medium">
          {navigation.map((item, tab) => (
            <li key={tab} className="">
              <NavLink
                to={item.link}
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#080746] navlink"
                    : "navlink hover:bg-[#080746] active:bg-[#080746] duration-150"
                }
              >
                <div className="mr-4 text-xl">{item.icon}</div>
                {item.name}
              </NavLink>
            </li>
          ))}
          <NavLink
            to="/my-properties/add-property"
            className={({ isPending, isActive }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-[#080746] navlink"
                : "navlink flex md:hidden hover:bg-[#080746] active:bg-[#080746] duration-150"
            }
          >
            <span className="mr-4 text-xl">
              <FiPlus />
            </span>
            <span>Add Listing</span>
          </NavLink>
        </ul>

        <button className="flex items-center gap-3 px-4 py-3 navlink hover:bg-[#080746] active:bg-[#080746] duration-150 text-white">
          <span className="text-xl">
            <MdLogout />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
