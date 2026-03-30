import { Sensor } from '../data/mockData';

interface FieldMapProps {
  sensors: Sensor[];
  onSensorClick?: (sensor: Sensor) => void;
}

export function FieldMap({ sensors, onSensorClick }: FieldMapProps) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-4">
      <h2 className="text-xl font-bold mb-3 text-gray-900">Dala Xaritasi</h2>
      <div className="relative w-full aspect-square bg-gradient-to-br from-green-100 via-green-50 to-yellow-50 rounded-xl overflow-hidden border-2 border-gray-300">
        {/* Satellite imagery pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)`
          }}></div>
        </div>
        
        {/* Field boundary */}
        <svg className="absolute inset-0 w-full h-full">
          <polygon
            points="10,10 90,15 95,85 15,90"
            fill="rgba(34,197,94,0.1)"
            stroke="rgba(22,163,74,0.5)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Sensors */}
        {sensors.map((sensor) => (
          <button
            key={sensor.id}
            onClick={() => onSensorClick?.(sensor)}
            className="absolute group transition-transform active:scale-150"
            style={{
              left: `${sensor.x}%`,
              top: `${sensor.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className={`w-10 h-10 rounded-full border-4 border-white shadow-lg ${
                sensor.status === 'good'
                  ? 'bg-green-500'
                  : sensor.status === 'warning'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              } ${
                sensor.status === 'danger' ? 'animate-pulse' : ''
              }`}
            />
          </button>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex justify-around mt-3 text-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow"></div>
          <span className="text-gray-700">Yaxshi</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-white shadow"></div>
          <span className="text-gray-700">Ogohlantirish</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow"></div>
          <span className="text-gray-700">Muammo</span>
        </div>
      </div>
    </div>
  );
}