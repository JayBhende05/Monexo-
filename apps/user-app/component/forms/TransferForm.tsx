import { useTransactionStore, useTransferStore } from '@repo/store';
import React from 'react'
import { transferTransaction } from '../../lib/actions/transferTransaction';
import { useRouter } from 'next/navigation';


function TransferForm() {
  const transferStore:any = useTransferStore(); 
    const router = useRouter();

  const handleTransfer = async (num: number, amt: number) => {
    const res = await transferTransaction(num, amt);

    if (res?.message === "Transfer successful") {
      router.refresh(); // 🔥 re-fetches server data
    }
  };
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Transfer Money</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Recipient Mobile Number</label>
          <input 
            type="tel" 
            value={transferStore.number}
            onChange={(e) => transferStore.setField('number',e.target.value)}
            placeholder="00000 00000"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        {/* <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Account Number</label>
          <input 
            type="text" 
            placeholder="Enter recipient account number"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div> */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Amount (INR)</label>
          <input 
            type="number" 
            value={transferStore.amount}
            onChange={(e) => transferStore.setField('amount',e.target.value)}
            placeholder="Enter amount to transfer"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform mt-4" onClick={() => handleTransfer(Number(transferStore.number), Number(transferStore.amount))}>
          TRANSFER
        </button>
      </div>
    </div>
  );
}


export default TransferForm
