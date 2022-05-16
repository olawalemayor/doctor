import React, { useState } from "react";
import logo from "../logo.svg";

import "./navbar.css";

//import icons
import searchIcon from "../icons/searchIcon.svg";
import messageIcon from "../icons/messageIcon.svg";
import notificationIcon from "../icons/notification.svg";
import avatarIcon from "../icons/avatar.svg";

const MobileNav = ({ setToggle }: any) => {
  return (
    <div className="flex z-50 black-glashmorphism fixed h-full w-full items-center">
      <div className="mx-auto">
        <div
          className="flex justify-end text-white"
          onClick={() => setToggle(false)}
        >
          ▶▶
        </div>

        <div className="text-white">
          <div className="flex py-2 cursor-pointer">
            <img src={messageIcon} alt="Messages" />
            <div className="pl-2">Messages</div>
          </div>

          <div className="flex py-2 cursor-pointer">
            <img src={notificationIcon} alt="Messages" />
            <div className="pl-2">Notifications</div>
          </div>

          <div className="cursor-pointer pl-8 py-2">Profile</div>

          <div className="flex items-center search-container px-[13px] py-3 my-2 rounded-[10px] bg-white text-black">
            <button>
              <img src={searchIcon} alt="search" />
            </button>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="outline-none pl-[17px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar({ setShowSidebar, showSidebar }: any) {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="flex item-center justify-between px-2 xl:px-0 xl:justify-evenly py-[17px] shadow-md z-50 sticky w-full">
      <button
        className="xl:hidden text-xl font-bold text-[#1572a1]"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ☰
      </button>

      <div className="brand flex items-center cursor-pointer">
        <img src={logo} alt="Logo" className="mr-4" />
        <h1 className="text-[28px] leading-[33.89px] font-bold text-[#1572a1]">
          XXXXXXX
        </h1>
      </div>

      <div className="hidden xl:flex justify-between w-3/5 items-center">
        <div className="flex items-center search-container px-[13px] py-3 rounded-[10px]">
          <button>
            <img src={searchIcon} alt="search" />
          </button>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="outline-none pl-[17px]"
          />
        </div>

        <div className="flex w-1/5 justify-evenly">
          <img
            src={messageIcon}
            alt="Messages"
            width={25}
            className="cursor-pointer"
          />
          <img
            src={notificationIcon}
            alt="Messages"
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="hidden xl:flex items-center">
        <img
          src={avatarIcon}
          alt="Messages"
          width={60}
          className="cursor-pointer"
        />
        <div className="text-base text-[#525252]">
          <span className="block font-semibold">Xxxxx Xxxxx</span>
          <span className="block font-normal">Doctor</span>
        </div>
      </div>

      <button
        className="xl:hidden text-xl font-bold text-[#1572a1]"
        onClick={() => setToggle(true)}
      >
        ▶▶
      </button>

      {isToggled && <MobileNav setToggle={setToggle} />}
    </div>
  );
}
