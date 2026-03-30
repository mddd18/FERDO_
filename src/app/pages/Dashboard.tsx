import { useState } from 'react';
import { Droplets, Thermometer, Zap } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { WeatherWidget } from '../components/WeatherWidget';
import { FieldMap } from '../components/FieldMap';
import { StatCard } from '../components/StatCard';
import { sensors } from '../data/mockData';

export function Dashboard() {
  const [selectedSensor, setSelectedSensor] = useState(sensors[0]);

  // Calculate average values
  const avgMoisture = Math.round(
    sensors.reduce((acc, s) => acc + s.moisture, 0) / sensors.length
  );
  const avgTemp = Math.round(
    sensors.reduce((acc, s) => acc + s.temperature, 0) / sensors.length
  );
  const avgConductivity = Math.round(
    sensors.reduce((acc, s) => acc + s.conductivity, 0) / sensors.length
  );

  const getOverallStatus = () => {
    const dangerCount = sensors.filter(s => s.status === 'danger').length;
    const warningCount = sensors.filter(s => s.status === 'warning').length;
    
    if (dangerCount > 0) return 'danger';
    if (warningCount > 0) return 'warning';
    return 'good';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navigation />
      
      <main className="px-4 py-4 space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mening Dalarim</h1>
          <p className="text-base text-gray-600">Otabek Rahimov</p>
        </div>

        {/* Weather Widget */}
        <WeatherWidget />

        {/* Quick Stats */}
        <div className="space-y-3">
          <StatCard
            title="Tuproq Namligi"
            value={avgMoisture}
            unit="%"
            icon={Droplets}
            status={getOverallStatus()}
          />
          <StatCard
            title="Harorat"
            value={avgTemp}
            unit="°C"
            icon={Thermometer}
            status="good"
          />
          <StatCard
            title="O'tkazuvchanlik"
            value={avgConductivity}
            unit="µS/cm"
            icon={Zap}
            status={getOverallStatus()}
          />
        </div>

        {/* Field Map */}
        <FieldMap sensors={sensors} onSensorClick={setSelectedSensor} />

        {/* Selected Sensor Details */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-900">
            {selectedSensor.name} ({selectedSensor.id})
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-200">
              <p className="text-xs text-blue-700 mb-1">Namlik</p>
              <p className="text-2xl font-bold text-blue-900">{selectedSensor.moisture}%</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3 border-2 border-orange-200">
              <p className="text-xs text-orange-700 mb-1">Harorat</p>
              <p className="text-2xl font-bold text-orange-900">{selectedSensor.temperature}°C</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 border-2 border-purple-200">
              <p className="text-xs text-purple-700 mb-1">O'tkazuvchanlik</p>
              <p className="text-xl font-bold text-purple-900">{selectedSensor.conductivity} µS</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3 border-2 border-green-200">
              <p className="text-xs text-green-700 mb-1">Batareya</p>
              <p className="text-2xl font-bold text-green-900">{selectedSensor.battery}%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}