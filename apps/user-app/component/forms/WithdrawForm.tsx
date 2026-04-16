import { ArrowUpRight, History } from 'lucide-react';
import React from 'react'
import WithdrawalItem from '../WithdrawalItem';
import { createOfframpTransaction } from '../../lib/actions/createOfframpTransaction';
import { useWithdrawalStore } from '@repo/store';

function WithdrawForm() {
  const withdrawalStore:any = useWithdrawalStore();
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Withdraw Funds</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Amount (INR)</label>
            <input 
              type="number" 
              placeholder="Enter amount to withdraw"
              value={withdrawalStore.amount}
              onChange={(e) => withdrawalStore.setWithdrawalAmount(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform" onClick={async()=>{ await createOfframpTransaction(withdrawalStore.amount)}}>
            WITHDRAW
          </button>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
          <History className="w-4 h-4 text-blue-500" />
          Recent Withdrawals
        </h4>
        <div className="space-y-3">
          <WithdrawalItem date="Oct 24, 2023" amount="₹ 5,000.00" status="Completed" />
          <WithdrawalItem date="Oct 12, 2023" amount="₹ 12,500.00" status="Completed" />
          <WithdrawalItem date="Sep 28, 2023" amount="₹ 2,000.00" status="Completed" />
        </div>
      </div>
    </div>
  );
}



export default WithdrawForm
