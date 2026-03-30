import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SensorChartProps {
  data: Array<{
    day: string;
    moisture: number;
    temperature: number;
    conductivity: number;
  }>;
  dataKey: 'moisture' | 'temperature' | 'conductivity';
  title: string;
  color: string;
  unit: string;
}

export function SensorChart({ data, dataKey, title, color, unit }: SensorChartProps) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-4">
      <h3 className="text-base font-bold mb-3 text-gray-900">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            width={40}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={3}
            dot={{ fill: color, r: 4 }}
            activeDot={{ r: 6 }}
            name={title}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}