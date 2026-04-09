import { CreditCard, Landmark, Smartphone, Wallet, ArrowRight, History, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { cn } from "./../../lib/utils";

import { useState } from "react";

export default function TransferView() {
  const [activeTab, setActiveTab] = useState("Deposit");

  const renderContent = () => {
    switch (activeTab) {
      case "Deposit":
        return <DepositForm />;
      case "Withdraw":
        return <WithdrawForm />;
      case "Transfer":
        return <TransferForm />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold text-gray-900">Transfer</h1>

      <div className="flex gap-4 mb-8">
        {["Deposit", "Withdraw", "Transfer"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all",
              activeTab === tab ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Action Card */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            {renderContent()}
          </div>
        </div>

        {/* Balance and Limits Column */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif italic">Monexo Balance</h3>
            <div className="space-y-4">
              <BalanceRow label="Total balance" value="₹ 45,250.00" />
              <BalanceRow label="Order balance" value="₹ 0.00" />
              <BalanceRow label="Staking balance" value="₹ 12,000.00" />
              <BalanceRow label="Available balance" value="₹ 33,250.00" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Funding limits</h3>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button className="px-3 py-1 text-xs font-bold bg-white rounded shadow-sm">Daily</button>
                <button className="px-3 py-1 text-xs font-bold text-gray-500">Monthly</button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Daily transfers</span>
                  <span className="font-bold text-gray-900">₹ 2,000 of ₹ 50,000</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[4%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DepositForm() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Deposit Funds</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Amount (INR)</label>
          <input 
            type="number" 
            placeholder="Enter amount to deposit"
            className="w-full px-4 py-3  bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Select Bank</label>
          <select className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20">
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>State Bank of India</option>
            <option>Axis Bank</option>
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
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <input 
              type="text" 
              placeholder="Name on Card"
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="MM/YY"
                className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <input 
                type="password" 
                placeholder="CVV"
                className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform mt-4">
          PAY NOW
        </button>
      </div>
    </div>
  );
}

function WithdrawForm() {
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
              className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform">
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

function TransferForm() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Transfer Money</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Recipient Mobile Number</label>
          <input 
            type="tel" 
            placeholder="+91 00000 00000"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Account Number</label>
          <input 
            type="text" 
            placeholder="Enter recipient account number"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Amount (INR)</label>
          <input 
            type="number" 
            placeholder="Enter amount to transfer"
            className="w-full px-4 py-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform mt-4">
          TRANSFER
        </button>
      </div>
    </div>
  );
}

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

function BalanceRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  );
}

