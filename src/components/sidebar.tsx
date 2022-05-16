import React from "react";

//import icons
import {
  allotmentIcon,
  appointmentIcon,
  bloodBankIcon,
  dashboardIcon,
  liveDeskIcon,
  patientIcon,
  prescriptionIcon,
  profileIcon,
  reportIcon,
} from "../icons";

const sidebarMenu = [
  { name: "Dashboard", icon: dashboardIcon, active: true },
  { name: "patient", icon: patientIcon, active: false },
  { name: "Manage appointment", icon: appointmentIcon, active: false },
  { name: "manage presription", icon: prescriptionIcon, active: false },
  { name: "bed allotment", icon: allotmentIcon, active: false },
  { name: "manage report", icon: reportIcon, active: false },
  { name: "view blood bank", icon: bloodBankIcon, active: false },
  { name: "live desk", icon: liveDeskIcon, active: false },
];

const conditionalClass = (activeProp: boolean) => {
  const constant =
    "flex px-[35px] py-[25px] hover:bg-[#fdfffe] hover:text-[#1572a1] ";
  if (activeProp) return constant + "bg-[#fdfffe] text-[#1572a1]";
  return constant + "bg-transparent text-[#fdfffe]";
};

export default function Sidebar() {
  return (
    <div className="shadow-sm">
      {sidebarMenu.map(({ name, icon, active }) => (
        <div key={name} className={conditionalClass(active)}>
          <img src={icon} alt={name} className="mr-[15px]" />
          <div className="block capitalize">{name}</div>
        </div>
      ))}

      <div className="flex xl:mt-40 bottom-1 px-[35px] py-[25px] text-[#fdfffe] hover:bg-[#fdfffe] hover:text-[#1572a1]">
        <img src={profileIcon} alt="Profile" className="mr-[15px]" />
        <div className="block capitalize">profile</div>
      </div>
    </div>
  );
}
