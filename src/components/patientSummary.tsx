import React from "react";
import PatientChart from "./patientChart";
import AppointmentTable from "./appointmentTable";
import PatientTable from "./patientTable";

export default function PatientSummary() {
  return (
    <div className="flex pt-[14px] pl-[23px] pb-[29px] pr-[27px]">
      <div className="w-1/3">
        <h2>Patient Summary</h2>
        <PatientChart />
      </div>

      <div className="w-2/3 flex">
        <div className="w-1/2 mr-[27px]">
          <AppointmentTable />
        </div>

        <div className="w-1/2">
          <PatientTable />
        </div>
      </div>
    </div>
  );
}
