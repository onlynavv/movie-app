import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const ViewsChart = ({ totalViews, prevTotalViews }) => {
  const chartData = [
    { name: 'Sky Go', Previous: prevTotalViews['sky-go'], Current: totalViews['sky-go'] },
    { name: 'Now TV', Previous: prevTotalViews['now-tv'], Current: totalViews['now-tv'] },
    { name: 'Peacock', Previous: prevTotalViews['peacock'], Current: totalViews['peacock'] }
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Views Chart</h3>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Previous" fill="#8884d8" />
          <Bar dataKey="Current" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ViewsChart