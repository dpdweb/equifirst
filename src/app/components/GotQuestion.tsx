
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GotQuestionSection from './GotQuestionSection';
import GotVideoSection from './GotVideoSection';

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="ef-section-style hidden md:block">
        
        {/* Tabs */}
        <div className="grid grid-cols-2">
          <div className="text-3xl">Got questions? We&apos;re here to help!</div>
          <div className="flex justify-end space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`btn ${
                activeTab === 'tab1'
                  ? ''
                  : 'btn-outlined'
              }`}
            >
              Got questions?
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`btn ${
                activeTab === 'tab2'
                  ? ''
                  : 'btn-outlined'
              }`}
            >
              Guides
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'tab1' && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className=" inset-0"
              >
                <GotQuestionSection />
              </motion.div>
            )}
            {activeTab === 'tab2' && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className=" inset-0"
              >
                <GotVideoSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="md:hidden">
        
        <div className="ef-section-style">
          <div className="text-3xl">Got questions? We&apos;re here to help!</div>
            <GotQuestionSection />
        </div>
            <GotVideoSection />
      </div>
    </div>
  );
}
