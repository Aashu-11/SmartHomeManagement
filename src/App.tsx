import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import Overview from './components/dashboard/Overview';
import HomeAutomation from './components/dashboard/HomeAutomation';
import EnergyMonitor from './components/dashboard/EnergyMonitor';
import Security from './components/dashboard/Security';
import Environment from './components/dashboard/Environment';
import SmartBudget from './components/dashboard/smart';
import Notifications from './components/dashboard/notifications';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="automation" element={<HomeAutomation />} />
            <Route path="energy" element={<EnergyMonitor />} />
            <Route path="security" element={<Security />} />
            <Route path="environment" element={<Environment />} />
            <Route path="budget" element={<SmartBudget />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;