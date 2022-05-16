import React from "react";
import { patientAvatar } from "../icons";

const TableRow = ({ name, reason, time }: any) => {
  return (
    <div className="flex">
      <div className="w-1/3">
        <img src={patientAvatar} alt="" />
      </div>
      <div className="w-1/3">
        <div>{name}</div>
        <div>{reason}</div>
      </div>

      <div className="w-1/3">
        <div>{time}</div>
      </div>
    </div>
  );
};

export default function AppointmentTable() {
  return (
    <div>
      <h3>Today's Appointment</h3>
      <div className="flex">
        <div className="w-1/3">Patient Name</div>
        <div className="w-1/3">Name/Diagnosis</div>
        <div className="w-1/3">Time</div>
      </div>

      <div></div>
    </div>
  );
}

const patientData = [
  { name: "Riyarh Sorph", reason: "Health Checkup", time: "On-Going" },
  { name: "M.J. Calc", reason: "Health Checkup", time: "On-Going" },
  { name: "M.J. Calc", reason: "Health Checkup", time: "On-Going" },
  { name: "M.J. Calc", reason: "Health Checkup", time: "On-Going" },
  { name: "M.J. Calc", reason: "Health Checkup", time: "On-Going" },
];
