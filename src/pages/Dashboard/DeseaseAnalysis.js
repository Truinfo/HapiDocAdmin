import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';


const data = [
  { name: 'Pulmonology', value: 8000 },
  { name: 'Dermatology', value: 3000 },
  { name: 'Urology', value: 3000 },
  { name: 'Gastroenterology', value: 2000 },
  { name: 'Psychiatry', value: 2000 },
  { name: 'Endocrinology', value: 2000 },
  { name: 'Cardiology', value: 2000 },
  { name: 'Reproductive', value: 2000 },
  { name: 'Orthopedics', value: 2000 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, name } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#fff">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor}  fill="#ebeae8">{`${name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} style={{padding:"10px 0 0 0"}} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class DeseaseAnalysis extends PureComponent {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
        <PieChart width={500} height={550}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="55%"
            cy="30%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
     
    );
  }
}
