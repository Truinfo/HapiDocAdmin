import { Grid } from '@mui/material';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Total', value: 1000 },
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Rejected', value: 300 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class ConsultDcotorAppointmentChart extends PureComponent {
  renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid gray' }}>
          <p>{data.name}</p>
          <p>Value: {data.value}</p>
        </div>
      );
    }
    return null;
  };
  renderCustomLegend = () => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
      width: "50%", marginTop:"-90%",marginLeft:"40px"}}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
        {data.slice(0, 2).map((entry, index) => (
          <div key={`legend-${index}`} style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            marginBottom: '-30px'
          }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: COLORS[index], marginRight: '5px' }} />
            <p>{entry.name}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data.slice(2).map((entry, index) => (
          <div key={`legend-${index + 2}`} style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            marginBottom: '-30px'
          }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: COLORS[index + 2], marginRight: '5px' }} />
            <p>{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  render() {
    return (
      <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent:"center" , marginTop:"5%" }}>
        <Grid   >
          <PieChart width={600} height={300}>
            <Pie
              data={data}
              cx={120}
              cy={120}
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={this.renderCustomTooltip} />

            <Legend layout="vertical" align="center" verticalAlign="middle" content={this.renderCustomLegend} />
          </PieChart>
        </Grid>


      </Grid>
    );
  }
}
