import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, Zap, Clock, DollarSign, PieChart } from 'lucide-react';

const SmartBudget = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(1000);
  const [currentUsage, setCurrentUsage] = useState(750);
  const predictedBill = 920;
  const potentialSavings = 170;

  const usagePercentage = (currentUsage / monthlyBudget) * 100;
  const isOverBudget = usagePercentage > 100;

  const costSavingSuggestions = [
    {
      id: 1,
      title: "Peak Hours Optimization",
      description: "Reduce usage between 5 PM - 7 PM to save $50/month",
      saving: 50,
      icon: Clock,
    },
    {
      id: 2,
      title: "Smart Device Scheduling",
      description: "Schedule AC to turn off at night to save $70/month",
      saving: 70,
      icon: Zap,
    },
    {
      id: 3,
      title: "Efficiency Alert",
      description: "Replace old appliances to save $50/month",
      saving: 50,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Budget Overview Card */}
      <div className="bg-gradient-to-br from-blue-600 to-fuchsia-600 rounded-2xl p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Budget Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-white" />
              <span className="text-white">Monthly Budget</span>
            </div>
            <p className="text-2xl font-bold text-white">${monthlyBudget}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white">Current Usage</span>
            </div>
            <p className="text-2xl font-bold text-white">${currentUsage}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-white" />
              <span className="text-white">Predicted Bill</span>
            </div>
            <p className="text-2xl font-bold text-white">${predictedBill}</p>
          </div>
        </div>
      </div>

      {/* Usage Progress */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-white mb-4">Usage Progress</h3>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute h-full transition-all duration-1000 ${
              isOverBudget ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{ width: `${Math.min(usagePercentage, 100)}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          {usagePercentage.toFixed(1)}% of monthly budget used
        </p>
      </div>

      {/* Cost Saving Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {costSavingSuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <suggestion.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">{suggestion.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{suggestion.description}</p>
            <div className="flex items-center gap-2 text-green-400">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">{suggestion.saving} potential savings</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartBudget;