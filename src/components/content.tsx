import React from "react";

import { patientDarkIcon, appointmentDarkIcon } from "../icons";
import DashboardWidget from "./dashboardWidget";
import PatientSummary from "./patientSummary";

const dashboardStats = [
  {
    icon: patientDarkIcon,
    title: "Total patient",
    value: "2000+",
    date: "till date",
  },
  {
    icon: patientDarkIcon,
    title: "Total patient",
    value: "068",
    date: "23-Mar-2022",
  },
  {
    icon: appointmentDarkIcon,
    title: "Total Appointment",
    value: "085",
    date: "23-Mar-2022",
  },
];

export default function Content() {
  return (
    <div className="shadow-md w-full">
      <div className="px-[22px]">
        <div className="flex justify-between">
          {dashboardStats.map(({ date, icon, title, value }) => (
            <DashboardWidget
              key={title + value}
              icon={icon}
              title={title}
              value={value}
              date={date}
            />
          ))}
        </div>
        <PatientSummary />
      </div>
    </div>
  );
}
