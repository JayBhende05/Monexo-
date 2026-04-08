import { ArrowDownCircle, ArrowLeftRight, ArrowUpCircle, ChevronRight, Download } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'

function TransactionsTab() {
  const transactions = [
  { id: 1, type: 'Withdrew USDC', date: 'Feb 19, 2024, 03:18', amount: '-5,059.9477 USDC', value: '-$5,060.36', icon: <ArrowUpCircle className="text-blue-500" /> },
  { id: 2, type: 'Converted to USDC', date: 'Feb 19, 2024, 03:17', amount: '+5,059.9477 USDC', value: '-704.0000 DYM', icon: <ArrowLeftRight className="text-blue-500" /> },
  { id: 3, type: 'Deposited BTC', date: 'Feb 18, 2024, 12:45', amount: '+0.0500 BTC', value: '+$3,200.00', icon: <ArrowDownCircle className="text-green-500" /> },
];
  return (
     <motion.div 
                key="transactions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-6xl mx-auto"
              >
                <h1 className="text-4xl font-bold text-[#5D48B9] mb-8">Transactions</h1>
                
                <div className="flex gap-8 mb-8">
                  <button className="text-lg font-bold border-b-2 border-[#5D48B9] pb-2 px-2">History</button>
                  <button className="text-lg font-medium text-gray-500 pb-2 px-2 hover:text-gray-900">Scheduled</button>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100">
                        Assets <ChevronRight size={16} className="rotate-90" />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100">
                        Types <ChevronRight size={16} className="rotate-90" />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100">
                        Start date <ChevronRight size={16} className="rotate-90" />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100">
                        End date <ChevronRight size={16} className="rotate-90" />
                      </div>
                      <button className="text-sm font-medium text-gray-400 hover:text-gray-600">Clear</button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors">
                      <Download size={18} />
                      Export
                    </button>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                            {tx.icon}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{tx.type}</p>
                            <p className="text-sm text-gray-500">{tx.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{tx.amount}</p>
                          <p className="text-sm text-gray-500">{tx.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
  )
}

export default TransactionsTab
