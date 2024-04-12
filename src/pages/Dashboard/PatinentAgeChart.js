import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,Tooltip
} from "recharts";

const data = [
  {
    Age:'18-24',
    Male: 120,
   Female: 110,
   
  },
  {
    Age: "25-29",
    Male: 98,
    Female: 130,
  },
  {
    Age: "30-34",
    Male: 86,
    Female: 130,
  },
  {
    Age: "35-39",
    Male: 99,
    Female: 100,
  },
  {
    Age: "40-49",
    Male: 85,
    Female: 90,
  },
  {
    Age: "50-59",
    Male: 65,
    Female: 85,
  },
  {
    Age: "60+",
    Male: 75,
    Female: 85,
  }
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { payload: dataPayload } = payload[0];
    return (
      <div  style={{
        backgroundColor: '#fff',
        border: '1px solid #red',
        padding: '10px',
        color: '#000'}} >
        <p>{`Age: ${dataPayload.Age}`}</p>
        <p>{`Male: ${dataPayload.Male}`}</p>
        <p>{`Female: ${dataPayload.Female}`}</p>
      </div>
    );
  }
  return null;
};
export default function PatientsAgeAnalysis() {
  return (
    <RadarChart
      cx={150}
      cy={160}
      outerRadius={100}
      width={400}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="Age"   tick={{ fill: '#fcfbf7', fontSize: 16,}}  />
      <PolarRadiusAxis tick={{ fontSize: 12 , fillOpacity:"0.6"}} />
      <Radar
        name="Age"
        dataKey="Male"
        stroke="#fcfbf7"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Tooltip content={<CustomTooltip />} />
    </RadarChart>
  );
}

