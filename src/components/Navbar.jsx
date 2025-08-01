import React, { useState } from "react";

import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-bold">
      <Logo />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-accent-color hidden" />
        </NavLink>

        <NavLink to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-accent-color hidden" />
        </NavLink>

        <NavLink to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-accent-color hidden" />
        </NavLink>

        <NavLink to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-accent-color hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search icon"
        />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4">
            <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart icon" />
          <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-auto rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu icon"
        />
      </div>
      {/* Sidebar for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
