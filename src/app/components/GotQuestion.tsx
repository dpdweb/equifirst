// components/AnimatedTabs.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GotQuestionSection from './GotQuestionSection';

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full max-w-7xl mx-auto p-4 py-8">
      {/* Tabs */}
      <div class="grid grid-cols-2">
        <div className="text-3xl">Got questions? We're here to help!</div>
        <div className="flex justify-end space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('tab1')}
            className={`px-4 py-2 rounded font-medium transition ${
              activeTab === 'tab1'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Got questions?
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className={`px-4 py-2 rounded font-medium transition ${
              activeTab === 'tab2'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            Guides
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative bg-white p-6 rounded overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'tab1' && (
            <motion.div
              key="tab1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className=" inset-0 p-4"
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
              className=" inset-0 p-4"
            >
              <h2 className="text-xl font-bold mb-2">Content for Tab 2</h2>
              <p>This is the animated content for Tab 2.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
