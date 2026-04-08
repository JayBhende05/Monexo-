"use client"
import React from 'react'
import ActionButton from '../ActionButton'
import { ArrowLeftRight, ArrowUpCircle, ChevronLeft, ChevronRight, Download, Minus, Plus, TrendingUp } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useSession } from "next-auth/react";

function HomeTab() {
  const{ data:session, status} = useSession()
  return (
  <motion.div 
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-6xl mx-auto"
              >
                <h1 className="text-3xl font-bold text-[#5D48B9] mb-8">Good afternoon {session?.user?.name}</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Portfolio Card */}
                  <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="mb-6">
                      <p className="text-gray-500 font-medium mb-1 text-sm">Portfolio value</p>
                      <h2 className="text-4xl font-bold">$12,450.82</h2>
                    </div>

                    <div className="h-64 w-full mb-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={[
                          { date: '20 Feb', value: 11000 },
                          { date: '25 Feb', value: 11500 },
                          { date: '28 Feb', value: 11200 },
                          { date: '5 Mar', value: 12000 },
                          { date: '10 Mar', value: 11800 },
                          { date: '15 Mar', value: 12300 },
                          { date: '20 Mar', value: 12100 },
                          { date: '23 Mar', value: 12450 },
                        ]}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#5D48B9" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#5D48B9" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                          />
                          <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#5D48B9" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex justify-center gap-2 mb-12">
                      {['1W', '1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
                        <button 
                          key={range}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            range === '1M' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-12 border-t border-gray-100 pt-8">
                      <ActionButton icon={Plus} label="Buy" />
                      <ActionButton icon={Minus} label="Sell" color="bg-[#5D48B9]/80" />
                      <ActionButton icon={ArrowLeftRight} label="Convert" color="bg-[#5D48B9]/80" />
                      <div className="h-12 w-px bg-gray-200 mx-4" />
                      <ActionButton icon={Download} label="Deposit" color="bg-[#E9E6FF]" />
                      <ActionButton icon={ArrowUpCircle} label="Withdraw" color="bg-[#E9E6FF]" />
                    </div>
                  </div>

                  {/* Sidebar Cards */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-full aspect-square bg-[#F3F0FF] rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/crypto-art/400/400" 
                          alt="Recurring buys" 
                          className="w-3/4 h-3/4 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="bg-[#E9E6FF] text-[#5D48B9] text-xs font-bold px-2 py-1 rounded mb-3">New</span>
                      <h3 className="text-xl font-bold mb-2">Set up recurring buys</h3>
                      <p className="text-gray-500 text-sm mb-6">
                        Schedule regular crypto purchases to balance market fluctuations.
                      </p>
                      <button className="w-full bg-[#E9E6FF] text-[#5D48B9] py-3 rounded-xl font-bold hover:bg-[#DDD8FF] transition-colors">
                        Get started
                      </button>
                      
                      <div className="flex items-center gap-4 mt-6">
                        <button className="p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-900">
                          <ChevronLeft size={20} />
                        </button>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#5D48B9]" />
                          <div className="w-2 h-2 rounded-full bg-gray-200" />
                          <div className="w-2 h-2 rounded-full bg-gray-200" />
                        </div>
                        <button className="p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-900">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#5D48B9] rounded-3xl p-6 text-white flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <TrendingUp size={24} />
                        </div>
                        <div>
                          <p className="font-bold">Earn up to 10%+ APR</p>
                          <p className="text-white/70 text-sm">On your idle assets</p>
                        </div>
                      </div>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
  )
}

export default HomeTab
