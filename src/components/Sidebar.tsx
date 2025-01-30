import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Home,
  Battery,
  Shield,
  Thermometer,
  PiggyBank,
  Bell,
  Brain,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Home, label: 'Home Automation', path: '/dashboard/automation' },
  { icon: Battery, label: 'Energy Monitor', path: '/dashboard/energy' },
  { icon: Shield, label: 'Security', path: '/dashboard/security' },
  { icon: Thermometer, label: 'Environment', path: '/dashboard/environment' },
  { icon: PiggyBank, label: 'Smart Budget', path: '/dashboard/budget' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10"
    >
      <div className="flex items-center justify-center h-16 border-b border-white/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Brain className="w-8 h-8 text-blue-400" />
        </motion.div>
        <span className="ml-2 text-xl font-bold text-white">LUMINOX AI</span>
      </div>
      
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm transition-colors duration-200 rounded-lg 
                ${isActive 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'text-gray-400 hover:bg-blue-500/10 hover:text-blue-300'}`
              }
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {React.createElement(item.icon, { size: 20, className: "mr-3" })}
              </motion.div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <button className="flex items-center w-full px-4 py-3 text-sm text-red-400 transition-colors duration-200 rounded-lg hover:bg-red-500/10">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;