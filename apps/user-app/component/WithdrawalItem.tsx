import { ArrowUpRight } from 'lucide-react';
import React from 'react'

function WithdrawalItem({ date, amount, status }: { date: string, amount: string, status: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 text-gray-800 rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-danger/10 rounded-full flex items-center justify-center text-brand-danger">
          <ArrowUpRight className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{amount}</p>
          <p className="text-[10px] text-gray-500">{date}</p>
        </div>
      </div>
      <span className="text-[10px] font-bold text-brand-accent px-2 py-1 bg-brand-accent/10 rounded-lg">
        {status}
      </span>
    </div>
  );
}

export default WithdrawalItem
