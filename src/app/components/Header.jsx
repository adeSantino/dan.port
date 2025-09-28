'use client';

import { useState } from 'react';
import Overview from './Overview';
import Experience from './Experience';

export default function Header({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖', active: true },
    { id: 'projects', label: 'Projects', icon: '📋' },
    { id: 'call', label: 'Schedule a Meeting', icon: '📞' },
    { id: 'stars', label: 'Stars', icon: '⭐' }
  ];

  return (
    <div className="bg-black text-white sticky top-0 z-50 mx-4 mt-4 rounded-lg">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-3 border-b border-gray-800">
        {/* Left Side */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-mono font-bold text-lg sm:text-2xl lg:text-3xl text-white">&lt;Ad.dev/&gt;</span>
          </div>
        </div>

        {/* Right Side - Shiny Animated Title */}
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-black px-6 py-3 rounded-lg">
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Software Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar - Responsive */}
      <div className="flex items-center px-2 sm:px-4 border-b border-gray-800 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            <span className="text-sm sm:text-base">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            {tab.count && (
              <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
