import React from "react";

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Discharged", 65],
  ["Admitted", 30],
  ["Deceased", 10],
  // CSS-style declaration
];

const options = {
  pieHole: 0.4,
  pieSliceTextStyle: {
    color: "transparent",
  },
  is3D: false,
  legend: "left",
  slices: {
    0: { color: "#1F441E" },
    1: { color: "#00FFDD" },
    2: { color: "#C3C8CD" },
  },
};

export default function PatientChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="274px"
      data={data}
      options={options}
    />
  );
}
