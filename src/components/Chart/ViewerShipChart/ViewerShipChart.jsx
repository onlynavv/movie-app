import React, { useMemo } from 'react'
import { useMoviesContext } from '../../../context/moviesContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ViewerShipChart = () => {
  const {viewerCount: { viewCountData }} = useMoviesContext();
  const chartData = useMemo(() => viewCountData?.map(item => ({
        time: item.timestamp ? new Date(item.timestamp).toLocaleTimeString('en-US') : '',
        Views: item.value,
    })), [viewCountData]);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="time" stroke="#A0AEC0" />
          <YAxis stroke="#A0AEC0" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #2D3748' }} 
            labelStyle={{ color: '#E2E8F0' }}
          />
          <Legend wrapperStyle={{ color: '#E2E8F0' }} />
          <Line type="monotone" dataKey="Views" name="Views" stroke="#48BB78" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ViewerShipChart