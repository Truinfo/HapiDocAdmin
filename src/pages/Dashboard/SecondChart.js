import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data_2 = [
  {
    name: 'JAN',
    Appointments: 4000,
    Orders: 2400,
    Tests: 2400,
    Amount: 8900,
  },
  {
    name: 'FEB',
    Appointments: 3000,
    Orders: 1398,
    Tests: 2210,
    Amount: 7400,
  },
  {
    name: 'MAR',
    Appointments: 2000,
    Orders: 9800,
    Tests: 2290,
    Amount: 6500,
  },
  {
    name: 'APR',
    Appointments: 2780,
    Orders: 3908,
    Tests: 2000,
    Amount: 7500,
  },
  {
    name: 'MAY',
    Appointments: 1890,
    Orders: 4800,
    Tests: 2181,
    Amount: 6900,
  },
  {
    name: 'JUN',
    Appointments: 2390,
    Orders: 3800,
    Tests: 2500,
    Amount: 5500,
  },
  {
    name: 'JUL',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 6200,
  },
  {
    name: 'AUG',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 7300,
  },
  {
    name: 'SEP',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 6800,
  },
  {
    name: 'OCT',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 5700,
  },
  {
    name: 'NOV',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 8700,
  },
  {
    name: 'DEC',
    Appointments: 3490,
    Orders: 4300,
    Tests: 2100,
    Amount: 9500,
  },
]



const SecondChart =()=> {
    return (
     
        <BarChart
          width={1100}
          height={400}
          data={data_2}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Appointments" fill="#ed682b" activeBar={<Rectangle fill="#ed682b" stroke="#2b403f" />} />
          <Bar dataKey="Orders" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="#2b403f" />} />
          <Bar dataKey="Tests" fill="#5ab096" activeBar={<Rectangle fill="#5ab096" stroke="#2b403f" />} />
          <Bar dataKey="Amount" fill="#2b4f47" activeBar={<Rectangle fill="#2b4f47" stroke="#2b403f" />} />
        </BarChart>
      
    );

}
export default SecondChart;
