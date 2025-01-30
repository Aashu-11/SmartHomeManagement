import React, { useState } from 'react';
import { Bell, AlertTriangle, Zap, ThermometerSun, Lock, DollarSign } from 'lucide-react';

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  icon: React.ComponentType;
  priority: 'high' | 'medium' | 'low';
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'alert',
      title: 'High Energy Usage Alert',
      message: 'AC has been running for 4 hours in an empty room',
      time: '2 minutes ago',
      icon: Zap,
      priority: 'high',
    },
    {
      id: 2,
      type: 'security',
      title: 'Security Alert',
      message: 'Motion detected in backyard camera',
      time: '15 minutes ago',
      icon: Lock,
      priority: 'high',
    },
    {
      id: 3,
      type: 'budget',
      title: 'Budget Alert',
      message: 'You have reached 75% of your monthly budget',
      time: '1 hour ago',
      icon: DollarSign,
      priority: 'medium',
    },
    {
      id: 4,
      type: 'temperature',
      title: 'Temperature Alert',
      message: 'Living room temperature is above optimal range',
      time: '2 hours ago',
      icon: ThermometerSun,
      priority: 'low',
    },
  ]);

  const getPriorityStyles = (priority: 'high' | 'medium' | 'low'): string => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const clearNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Notifications Header */}
      <div className="bg-gradient-to-br from-blue-600 to-fuchsia-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Notifications Center</h2>
          </div>
          <button
            onClick={() => setNotifications([])}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative overflow-hidden bg-white rounded-xl p-6 shadow-lg border transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
              getPriorityStyles(notification.priority)
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-100">
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{notification.title}</h3>
                  <p className="text-gray-600">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
              <button
                onClick={() => clearNotification(notification.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
              <div className="h-full bg-current animate-progress" />
            </div>
          </div>
        ))}
        
        {notifications.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl shadow-lg">
            <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;