import React from "react";

export default function DashboardWidget({ icon, title, value, date }: any) {
  return (
    <div className="flex text-[#1572A1] px-[50px] py-[32px] shadow-md">
      <div className="rounded-full border-[3px] border-[#1572A1] mr-[21px]">
        <img src={icon} alt={title} className="p-[25px]" />
      </div>
      <div>
        <h3 className="text-base font-medium capitalize">{title}</h3>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-sm capitalize">{date}</div>
      </div>
    </div>
  );
}
