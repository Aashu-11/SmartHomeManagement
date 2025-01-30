import React from 'react';
import { motion } from 'framer-motion';
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Leaf,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const environmentData = [
  { time: '00:00', temperature: 22, humidity: 45, airQuality: 95 },
  { time: '04:00', temperature: 21, humidity: 48, airQuality: 92 },
  { time: '08:00', temperature: 23, humidity: 50, airQuality: 88 },
  { time: '12:00', temperature: 25, humidity: 42, airQuality: 85 },
  { time: '16:00', temperature: 26, humidity: 40, airQuality: 82 },
  { time: '20:00', temperature: 24, humidity: 43, airQuality: 90 },
  { time: '23:59', temperature: 23, humidity: 44, airQuality: 93 }
];

const rooms = [
  { id: '1', name: 'Living Room', temperature: 23, humidity: 45, airQuality: 92 },
  { id: '2', name: 'Bedroom', temperature: 22, humidity: 48, airQuality: 95 },
  { id: '3', name: 'Kitchen', temperature: 24, humidity: 50, airQuality: 88 },
  { id: '4', name: 'Office', temperature: 21, humidity: 42, airQuality: 90 }
];

const Environment = () => {
  return (
    <div className="space-y-6">
      {/* Environment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Temperature</p>
              <h3 className="text-2xl font-bold text-white mt-1">23°C</h3>
              <p className="text-green-400 text-sm mt-1">Optimal</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
              <Thermometer size={24} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Humidity</p>
              <h3 className="text-2xl font-bold text-white mt-1">45%</h3>
              <p className="text-blue-400 text-sm mt-1">Normal</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Droplets size={24} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Air Quality</p>
              <h3 className="text-2xl font-bold text-white mt-1">92</h3>
              <p className="text-green-400 text-sm mt-1">Excellent</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <Leaf size={24} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Ventilation</p>
              <h3 className="text-2xl font-bold text-white mt-1">Active</h3>
              <p className="text-purple-400 text-sm mt-1">Auto Mode</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Wind size={24} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Environment Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temperature & Humidity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Temperature & Humidity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={environmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  name="Temperature (°C)"
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  name="Humidity (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Air Quality Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Air Quality Index</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={environmentData}>
                <defs>
                  <linearGradient id="airQualityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="airQuality"
                  stroke="#10B981"
                  fill="url(#airQualityGradient)"
                  name="Air Quality"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Room Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Room Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ scale: 1.02 }}
              className="bg-black/30 rounded-lg p-4"
            >
              <h4 className="text-white font-medium mb-3">{room.name}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Thermometer size={16} className="mr-2" />
                    <span>Temperature</span>
                  </div>
                  <span className="text-white">{room.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Droplets size={16} className="mr-2" />
                    <span>Humidity</span>
                  </div>
                  <span className="text-white">{room.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Leaf size={16} className="mr-2" />
                    <span>Air Quality</span>
                  </div>
                  <span className="text-white">{room.airQuality}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Environmental Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Environmental Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 p-4 bg-yellow-500/10 rounded-lg">
            <Sun className="text-yellow-400" size={24} />
            <div>
              <h4 className="text-white font-medium">High Temperature Alert</h4>
              <p className="text-sm text-gray-400">
                Kitchen temperature is above optimal range. Consider adjusting AC settings.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-blue-500/10 rounded-lg">
            <CloudRain className="text-blue-400" size={24} />
            <div>
              <h4 className="text-white font-medium">Humidity Warning</h4>
              <p className="text-sm text-gray-400">
                Living room humidity is rising. Dehumidifier has been activated.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Environment;