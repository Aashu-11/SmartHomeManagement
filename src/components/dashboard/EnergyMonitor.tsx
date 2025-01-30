import React from 'react';
import { motion } from 'framer-motion';
import {
  Battery,
  Zap,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Award
} from 'lucide-react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const energyData = [
  { time: '00:00', usage: 1.2, cost: 0.15 },
  { time: '04:00', usage: 0.8, cost: 0.10 },
  { time: '08:00', usage: 2.4, cost: 0.30 },
  { time: '12:00', usage: 3.6, cost: 0.45 },
  { time: '16:00', usage: 2.8, cost: 0.35 },
  { time: '20:00', usage: 3.2, cost: 0.40 },
  { time: '23:59', usage: 1.6, cost: 0.20 }
];

const deviceUsage = [
  { name: 'AC', value: 45 },
  { name: 'Lights', value: 20 },
  { name: 'Kitchen', value: 15 },
  { name: 'Entertainment', value: 12 },
  { name: 'Others', value: 8 }
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

const EnergyMonitor = () => {
  return (
    <div className="space-y-6">
      {/* Energy Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Current Usage</p>
              <h3 className="text-2xl font-bold text-white mt-1">2.4 kWh</h3>
              <p className="text-green-400 text-sm mt-1">-12% vs last hour</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Zap size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Today's Cost</p>
              <h3 className="text-2xl font-bold text-white mt-1">$12.85</h3>
              <p className="text-red-400 text-sm mt-1">+8% vs yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <DollarSign size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Grid Status</p>
              <h3 className="text-2xl font-bold text-white mt-1">Optimal</h3>
              <p className="text-blue-400 text-sm mt-1">98% efficiency</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Battery size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Energy Score</p>
              <h3 className="text-2xl font-bold text-white mt-1">A+</h3>
              <p className="text-yellow-400 text-sm mt-1">Top 5% efficient</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600">
              <Award size={24} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Over Time */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Energy Usage Over Time</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
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
                  dataKey="usage"
                  stroke="#3B82F6"
                  fill="url(#usageGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Device Usage Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Device Usage Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceUsage}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  content={({ payload }) => (
                    <ul className="flex flex-wrap justify-center gap-4">
                      {payload.map((entry, index) => (
                        <li key={`legend-${index}`} className="flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: entry.color }}
                          />
                          <span className="text-sm text-gray-400">
                            {entry.value} ({deviceUsage[index].value}%)
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Energy Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Energy Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 p-4 bg-green-500/10 rounded-lg">
            <TrendingDown className="text-green-400" size={24} />
            <div>
              <h4 className="text-white font-medium">Optimal Usage Period</h4>
              <p className="text-sm text-gray-400">
                Energy rates are lowest between 10 PM - 6 AM. Consider scheduling high-power
                devices during these hours.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 bg-red-500/10 rounded-lg">
            <AlertTriangle className="text-red-400" size={24} />
            <div>
              <h4 className="text-white font-medium">High Usage Alert</h4>
              <p className="text-sm text-gray-400">
                AC units are consuming 45% of total energy. Consider adjusting temperature
                settings to optimize consumption.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnergyMonitor;