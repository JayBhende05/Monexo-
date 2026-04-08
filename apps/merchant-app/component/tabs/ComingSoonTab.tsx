import React, { FC } from 'react'
import {motion} from 'framer-motion';
import { ArrowLeftRight, Gift, Search } from 'lucide-react';

interface ComingSoonProps {
  activeTab : string,
  setActiveTab : (tab:string)=>void
}

function ComingSoonTab ({activeTab ,setActiveTab }: ComingSoonProps) {
  return (
     <motion.div 
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
              >
                <div className="w-24 h-24 bg-[#F3F0FF] rounded-full flex items-center justify-center mb-6 text-[#5D48B9]">
                  {activeTab === 'explore' && <Search size={48} />}
                  {activeTab === 'rewards' && <Gift size={48} />}
                  {activeTab === 'transfer' && <ArrowLeftRight size={48} />}
                </div>
                <h2 className="text-3xl font-bold text-[#5D48B9] mb-2 capitalize">{activeTab}</h2>
                <p className="text-gray-500 text-lg">This feature is coming soon to Monexo.</p>
                <button 
                  onClick={() => setActiveTab('home')}
                  className="mt-8 text-[#5D48B9] font-bold hover:underline"
                >
                  Back to Dashboard
                </button>
              </motion.div>
  )
}

export default ComingSoonTab
