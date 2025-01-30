import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Video,
  Bell,
  Lock,
  AlertTriangle,
  Activity,
  Eye,
  Calendar,
  MapPin
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const activityData = [
  { time: '00:00', motionLevel: 10, alerts: 0 },
  { time: '04:00', motionLevel: 5, alerts: 0 },
  { time: '08:00', motionLevel: 60, alerts: 1 },
  { time: '12:00', motionLevel: 45, alerts: 0 },
  { time: '16:00', motionLevel: 75, alerts: 2 },
  { time: '20:00', motionLevel: 30, alerts: 0 },
  { time: '23:59', motionLevel: 15, alerts: 0 }
];

const cameras = [
  { id: '1', name: 'Front Door', status: 'active', lastMotion: '2 mins ago' },
  { id: '2', name: 'Back Yard', status: 'active', lastMotion: '15 mins ago' },
  { id: '3', name: 'Garage', status: 'active', lastMotion: '1 hour ago' },
  { id: '4', name: 'Living Room', status: 'inactive', lastMotion: 'N/A' }
];

const recentEvents = [
  {
    id: '1',
    type: 'motion',
    location: 'Front Door',
    time: '2 mins ago',
    description: 'Motion detected at front entrance'
  },
  {
    id: '2',
    type: 'alert',
    location: 'Back Yard',
    time: '15 mins ago',
    description: 'Unusual activity detected'
  },
  {
    id: '3',
    type: 'door',
    location: 'Garage',
    time: '1 hour ago',
    description: 'Door opened'
  }
];

const cameraImages = {
  'Front Door': 'https://images.unsplash.com/photo-1464316325666-63beaf639dbb?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Back Yard': 'https://images.unsplash.com/photo-1621271654319-5e78a0f48756?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Garage': 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Living Room': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&h=600auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

type CameraName = 'Front Door' | 'Back Yard' | 'Garage' | 'Living Room';

const Security = () => {
  const [selectedCamera, setSelectedCamera] = useState<typeof cameras[0]>(cameras[0]);

  return (
    <div className="space-y-6">
      {/* Security Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">System Status</p>
              <h3 className="text-2xl font-bold text-white mt-1">Armed</h3>
              <p className="text-green-400 text-sm mt-1">All systems operational</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <Shield size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Active Cameras</p>
              <h3 className="text-2xl font-bold text-white mt-1">3/4</h3>
              <p className="text-yellow-400 text-sm mt-1">1 camera offline</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Video size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Recent Alerts</p>
              <h3 className="text-2xl font-bold text-white mt-1">2</h3>
              <p className="text-red-400 text-sm mt-1">Last 24 hours</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600">
              <Bell size={24} className="text-white" />
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
              <p className="text-gray-400 text-sm">Doors Status</p>
              <h3 className="text-2xl font-bold text-white mt-1">Secured</h3>
              <p className="text-blue-400 text-sm mt-1">All doors locked</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Lock size={24} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Camera Grid and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Feed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Live Camera Feed</h3>
            <div className="flex items-center space-x-2">
              <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-green-400">Live</span>
            </div>
          </div>
          
          {/* Simulated Camera Feed */}
          <div className="relative aspect-video bg-black/40 rounded-lg overflow-hidden mb-4">
            <img
              src={cameraImages[selectedCamera.name as CameraName]}
              alt={selectedCamera.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Eye className="w-16 h-16 text-white/20" />
            </div>
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-black/60 px-2 py-1 rounded-lg">
                <Calendar size={14} className="text-white/60" />
                <span className="text-xs text-white/60">Live</span>
              </div>
              <div className="flex items-center space-x-1 bg-black/60 px-2 py-1 rounded-lg">
                <MapPin size={14} className="text-white/60" />
                <span className="text-xs text-white/60">{selectedCamera.name}</span>
              </div>
            </div>
          </div>

          {/* Camera Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cameras.map((camera) => (
              <motion.button
                key={camera.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCamera(camera)}
                className={`p-4 rounded-lg ${
                  selectedCamera.id === camera.id
                    ? 'bg-blue-500/20 border-blue-500/50'
                    : 'bg-black/30 border-white/5'
                } border transition-colors duration-200`}
              >
                <div className="flex flex-col items-center text-center">
                  <Video size={20} className={`${camera.status === 'active' ? 'text-blue-400' : 'text-gray-500'}`} />
                  <span className="text-sm text-white mt-2">{camera.name}</span>
                  <span className={`text-xs mt-1 ${camera.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
                    {camera.status}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Recent Events</h3>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start space-x-3 p-4 bg-black/30 rounded-lg"
              >
                <div className={`p-2 rounded-lg ${
                  event.type === 'alert' ? 'bg-red-500/20' :
                  event.type === 'motion' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                }`}>
                  {event.type === 'alert' ? <AlertTriangle size={20} className="text-red-400" /> :
                   event.type === 'motion' ? <Activity size={20} className="text-yellow-400" /> :
                   <Lock size={20} className="text-blue-400" />}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-white font-medium">{event.location}</h4>
                    <span className="text-xs text-gray-400">{event.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Activity Timeline</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="motionGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="motionLevel"
                stroke="#3B82F6"
                fill="url(#motionGradient)"
                name="Motion Level"
              />
              <Line
                type="monotone"
                dataKey="alerts"
                stroke="#EF4444"
                strokeWidth={2}
                name="Alerts"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Security;