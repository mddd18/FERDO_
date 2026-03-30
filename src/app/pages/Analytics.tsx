import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { SensorChart } from '../components/SensorChart';
import { sensors, historicalData } from '../data/mockData';
import { QrCode, Battery, Activity } from 'lucide-react';

export function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('week');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navigation />
      
      <main className="px-4 py-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analitika</h1>
          <p className="text-sm text-gray-600">Batafsil ma'lumotlar va statistika</p>
        </div>

        {/* Period Selector */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-4">
          <h2 className="text-lg font-bold mb-3 text-gray-900">Davr tanlash</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedPeriod('day')}
              className={`flex-1 py-3 text-base font-semibold rounded-xl transition-colors ${
                selectedPeriod === 'day'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 active:bg-gray-200'
              }`}
            >
              Kunlik
            </button>
            <button
              onClick={() => setSelectedPeriod('week')}
              className={`flex-1 py-3 text-base font-semibold rounded-xl transition-colors ${
                selectedPeriod === 'week'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 active:bg-gray-200'
              }`}
            >
              Haftalik
            </button>
            <button
              onClick={() => setSelectedPeriod('month')}
              className={`flex-1 py-3 text-base font-semibold rounded-xl transition-colors ${
                selectedPeriod === 'month'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 active:bg-gray-200'
              }`}
            >
              Oylik
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="space-y-4">
          <SensorChart
            data={historicalData}
            dataKey="moisture"
            title="Tuproq Namligi (%)"
            color="#3b82f6"
            unit="%"
          />
          <SensorChart
            data={historicalData}
            dataKey="temperature"
            title="Harorat (°C)"
            color="#f97316"
            unit="°C"
          />
          <SensorChart
            data={historicalData}
            dataKey="conductivity"
            title="Elektr O'tkazuvchanlik"
            color="#8b5cf6"
            unit="µS/cm"
          />
        </div>

        {/* Device Management */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Qurilmalarni Boshqarish</h2>
          
          {/* Add New Device */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-600 p-2.5 rounded-xl">
                <QrCode className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900">Yangi Datchik Qo'shish</h3>
                <p className="text-xs text-gray-600">QR kod orqali ulang</p>
              </div>
            </div>
            <button className="w-full bg-green-600 active:bg-green-700 text-white text-base font-bold py-3 px-4 rounded-xl transition-colors">
              QR Skanerlash
            </button>
          </div>

          {/* Device List */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900">Mavjud Datchiklar</h3>
            {sensors.map((sensor) => (
              <div
                key={sensor.id}
                className="border-2 border-gray-200 rounded-xl p-3"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                      sensor.status === 'good'
                        ? 'bg-green-500'
                        : sensor.status === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      {sensor.name} ({sensor.id})
                    </h4>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Activity size={12} />
                        <span>Namlik: {sensor.moisture}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity size={12} />
                        <span>Harorat: {sensor.temperature}°C</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Battery
                      className={
                        sensor.battery > 70
                          ? 'text-green-600'
                          : sensor.battery > 30
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }
                      size={20}
                    />
                    <span className="text-sm font-bold text-gray-900">
                      {sensor.battery}%
                    </span>
                  </div>
                </div>
                <button className="w-full bg-gray-100 active:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors">
                  Sozlamalar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}