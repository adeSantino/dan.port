'use client';

import { useState } from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Meeting from "./components/Meeting";

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <Portfolio />;
      case 'call':
        return <Meeting />;
      case 'stars':
        return <div className="bg-black text-white p-8"><h2 className="text-3xl font-bold">Stars</h2><p className="text-gray-400 mt-4">Coming soon...</p></div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <Header onTabChange={handleTabChange} />
      <div className="flex">
        {/* Left Sidebar - Profile (always visible) */}
        <div className="w-1/5">
          <Profile />
        </div>
        
        {/* Main Content Area */}
        <div className="w-4/5">
          {renderContent()}
        </div>
        
      </div>
    </div>
  );
}
