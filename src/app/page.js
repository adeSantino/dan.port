'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Animation variants for different tabs
  const pageVariants = {
    overview: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    projects: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 }
    },
    call: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 }
    },
    stars: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 }
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants[activeTab]}
              transition={pageTransition}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
