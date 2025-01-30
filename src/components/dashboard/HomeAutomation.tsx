import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Wind,
  Lock,
  Video,
  Clock,
  Zap,
  Home as HomeIcon,
  Plus,
  Save,
  Trash2
} from 'lucide-react';

interface Device {
  id: string;
  name: string;
  type: 'light' | 'ac' | 'door' | 'camera';
  status: boolean;
  room: string;
  power?: number;
}

interface Room {
  id: string;
  name: string;
  devices: Device[];
}

const rooms: Room[] = [
  {
    id: '1',
    name: 'Living Room',
    devices: [
      { id: '1', name: 'Main Light', type: 'light', status: true, room: 'Living Room', power: 60 },
      { id: '2', name: 'AC', type: 'ac', status: false, room: 'Living Room', power: 1200 },
      { id: '3', name: 'Door Lock', type: 'door', status: true, room: 'Living Room' },
      { id: '4', name: 'Security Camera', type: 'camera', status: true, room: 'Living Room' }
    ]
  },
  {
    id: '2',
    name: 'Bedroom',
    devices: [
      { id: '5', name: 'Ceiling Light', type: 'light', status: false, room: 'Bedroom', power: 40 },
      { id: '6', name: 'AC', type: 'ac', status: true, room: 'Bedroom', power: 1000 },
      { id: '7', name: 'Door Lock', type: 'door', status: true, room: 'Bedroom' }
    ]
  }
];

const deviceIcons = {
  light: Lightbulb,
  ac: Wind,
  door: Lock,
  camera: Video
};

const HomeAutomation = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room>(rooms[0]);
  const [schedules, setSchedules] = useState([
    { id: '1', device: 'AC', action: 'Turn Off', time: '23:00', active: true },
    { id: '2', device: 'Main Light', action: 'Turn On', time: '18:00', active: true }
  ]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleDeviceToggle = (deviceId: string) => {
    // In a real app, this would communicate with your smart home API
    console.log('Toggling device:', deviceId);
  };

  return (
    <div className="space-y-6">
      {/* Room Selection */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {rooms.map((room) => (
          <motion.button
            key={room.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedRoom(room)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              selectedRoom.id === room.id
                ? 'bg-blue-500 text-white'
                : 'bg-black/20 text-gray-300 hover:bg-black/30'
            }`}
          >
            <HomeIcon size={20} />
            <span>{room.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedRoom.devices.map((device) => {
          const Icon = deviceIcons[device.type];
          return (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    device.status ? 'bg-blue-500' : 'bg-gray-600'
                  }`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{device.name}</h3>
                    <p className="text-sm text-gray-400">{device.status ? 'On' : 'Off'}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDeviceToggle(device.id)}
                  className={`w-14 h-8 rounded-full relative ${
                    device.status ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <motion.div
                    className="w-6 h-6 bg-white rounded-full absolute top-1"
                    initial={false}
                    animate={{ left: device.status ? '1.5rem' : '0.25rem' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
              {device.power && (
                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <Zap size={16} className="mr-2" />
                  <span>{device.power}W</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Automation Schedules */}
      <div className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Automation Schedules</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowScheduleModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-lg text-white"
          >
            <Plus size={20} />
            <span>Add Schedule</span>
          </motion.button>
        </div>

        <div className="space-y-4">
          {schedules.map((schedule) => (
            <motion.div
              key={schedule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 bg-black/30 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Clock size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{schedule.device}</h3>
                  <p className="text-sm text-gray-400">
                    {schedule.action} at {schedule.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg"
                >
                  <Save size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg"
                >
                  <Trash2 size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAutomation;