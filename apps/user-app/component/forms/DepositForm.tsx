import { CreditCard } from 'lucide-react';
import React from 'react'
import { createOnRampTransaction } from '../../lib/actions/createOnrampTransaction';
import {useDepositStore} from '@repo/store'

const SUPPORTED_BANKS = [{
  id:"01",
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  id:"02",
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

function DepositForm() {
  const depositStore:any = useDepositStore();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Deposit Funds</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Amount (INR)</label>
          <input 
            type="number" 
            value={depositStore.amount}
            onChange={(e) => depositStore.setField("amount", e.target.value)}
            placeholder="Enter amount to deposit"
            className="w-full px-4 py-3  bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Select Bank</label>
          <select className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"  value={depositStore.bank}
            onChange={(e) => depositStore.setField("bank", e.target.value)}>
              {SUPPORTED_BANKS.map((value)=> <option key={value.id}>{value.name} </option>)}
            {/* <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>State Bank of India</option>
            <option>Axis Bank</option> */}
          </select>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-500" />
            Card Details
          </h4>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Card Number"
               value={depositStore.cardNumber}
            onChange={(e) => depositStore.setField("cardNumber", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <input 
              type="text" 
              placeholder="Name on Card"
                value={depositStore.cardName}
            onChange={(e) => depositStore.setField("cardName", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="MM/YY"
                  value={depositStore.expiry}
            onChange={(e) => depositStore.setField("expiry", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <input 
                type="password" 
                placeholder="CVV"
                  value={depositStore.cvv}
            onChange={(e) => depositStore.setField("cvv", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform mt-4" onClick={async()=>{ await createOnRampTransaction(depositStore.bank, depositStore.amount); window.location.href = "https://www.axisbank.com/" ;}}>
          PAY NOW
        </button>
      </div>
    </div>
  );
}

export default DepositForm

//