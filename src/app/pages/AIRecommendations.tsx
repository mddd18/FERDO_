import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { sensors, aiRecommendations, alerts } from '../data/mockData';
import { Sparkles, AlertTriangle, AlertCircle, TrendingUp } from 'lucide-react';
import { Progress } from '../components/ui/progress';

export function AIRecommendations() {
  const [selectedSensor, setSelectedSensor] = useState(sensors[1]); // Default to SMTC-2
  const [showRecommendation, setShowRecommendation] = useState(false);

  const currentRecommendation = aiRecommendations.find(
    (rec) => rec.sensorId === selectedSensor.id
  );

  const handleAnalyze = () => {
    setShowRecommendation(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navigation />
      
      <main className="px-4 py-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Aqlli Maslahatchi</h1>
          <p className="text-sm text-gray-600">AI yordamida dalangizni tahlil qiling</p>
        </div>

        {/* Smart Alerts */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-900">Aqlli Signallar</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-2xl p-4 border-2 ${
                  alert.type === 'danger'
                    ? 'bg-red-50 border-red-300'
                    : 'bg-yellow-50 border-yellow-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  {alert.type === 'danger' ? (
                    <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                  ) : (
                    <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
                  )}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-base font-bold mb-1 ${
                        alert.type === 'danger' ? 'text-red-900' : 'text-yellow-900'
                      }`}
                    >
                      {alert.type === 'danger' ? 'Diqqat!' : 'Ogohlantirish'}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        alert.type === 'danger' ? 'text-red-800' : 'text-yellow-800'
                      }`}
                    >
                      {alert.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Plant */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-900">Nima Ekish Kerak?</h2>
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Datchikni tanlang:
              </label>
              <select
                value={selectedSensor.id}
                onChange={(e) => {
                  const sensor = sensors.find((s) => s.id === e.target.value);
                  if (sensor) {
                    setSelectedSensor(sensor);
                    setShowRecommendation(false);
                  }
                }}
                className="w-full text-base p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {sensors.map((sensor) => (
                  <option key={sensor.id} value={sensor.id}>
                    {sensor.name} ({sensor.id})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-green-600 active:bg-green-700 text-white text-lg font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={24} />
              AI Tahlil Qilish
            </button>

            {showRecommendation && currentRecommendation && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-2 flex-shrink-0">
                    <Sparkles className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      AI Tavsiyasi
                    </h3>
                    <p className="text-xs text-green-800 mb-2">
                      <span className="font-bold">Muammo: </span>
                      {currentRecommendation.issue}
                    </p>
                    <p className="text-sm text-green-900 leading-relaxed">
                      {currentRecommendation.recommendation}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-600" size={20} />
                    <p className="text-sm font-bold text-gray-900">Tavsiya ekin:</p>
                  </div>
                  <p className="text-xl font-bold text-green-700 mb-3">
                    {currentRecommendation.cropSuggestion}
                  </p>
                  <p className="text-xs text-gray-700 mb-1">
                    Hosildorlik (gektariga):
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {currentRecommendation.expectedYield} tonna
                  </p>
                  <Progress value={currentRecommendation.expectedYield * 20} className="h-2" />
                </div>
              </div>
            )}

            {showRecommendation && !currentRecommendation && (
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Barcha ko'rsatkichlar yaxshi!
                    </h3>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      {selectedSensor.name} datchigi joylashgan hududda barcha ko'rsatkichlar
                      me'yorida. Bug'doy, Paxta yoki Sabzavot ekishingiz mumkin. Kutilayotgan
                      hosildorlik: 4-5 tonna/gektar.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}