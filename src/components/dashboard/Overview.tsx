import React from 'react';
import { motion } from 'framer-motion';
import { 
  Battery, 
  Thermometer, 
  Shield, 
  Lightbulb,
  DollarSign,
  Activity
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', energy: 400, temp: 24, security: 85 },
  { name: 'Tue', energy: 300, temp: 25, security: 90 },
  { name: 'Wed', energy: 500, temp: 23, security: 88 },
  { name: 'Thu', energy: 280, temp: 26, security: 92 },
  { name: 'Fri', energy: 390, temp: 24, security: 87 },
  { name: 'Sat', energy: 420, temp: 25, security: 89 },
  { name: 'Sun', energy: 380, temp: 23, security: 91 },
];

const Overview = () => {
  const statsCards = [
    { 
      title: 'Energy Usage',
      value: '2.4 kWh',
      change: '+14%',
      icon: Battery,
      color: 'from-green-500 to-emerald-700'
    },
    {
      title: 'Temperature',
      value: '24°C',
      change: '-2°C',
      icon: Thermometer,
      color: 'from-orange-500 to-red-700'
    },
    {
      title: 'Security Status',
      value: 'Protected',
      change: 'All Clear',
      icon: Shield,
      color: 'from-blue-500 to-indigo-700'
    },
    {
      title: 'Active Devices',
      value: '12',
      change: '+2 new',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-700'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{card.value}</h3>
                <p className="text-green-400 text-sm mt-1">{card.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color}`}>
                {React.createElement(card.icon, { size: 24, className: "text-white" })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Energy Consumption</h3>
            <DollarSign className="text-blue-400" size={20} />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
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
                  dataKey="energy" 
                  stroke="#3B82F6" 
                  fill="url(#energyGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">System Activity</h3>
            <Activity className="text-purple-400" size={20} />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
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
                  dataKey="security" 
                  stroke="#A855F7" 
                  strokeWidth={2}
                  dot={{ fill: '#A855F7' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  dot={{ fill: '#F59E0B' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;