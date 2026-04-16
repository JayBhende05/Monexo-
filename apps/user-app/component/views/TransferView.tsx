import { CreditCard, Landmark, Smartphone, Wallet, ArrowRight, History, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { cn } from "./../../lib/utils";

import { useState } from "react";
import DepositForm from "../forms/DepositForm";
import WithdrawForm from "../forms/WithdrawForm";
import TransferForm from "../forms/TransferForm";
import Balance from "../Balance";


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
        {/* <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif italic">Monexo Balance</h3>
            <div className="space-y-4">
              <BalanceRow label="Total balance" value="₹ 45,250.00" />
              <BalanceRow label="Order balance" value="₹ 0.00" />
              <BalanceRow label="Staking balance" value="₹ 12,000.00" />
              <BalanceRow label="Available balance" value="₹ 33,250.00" />
            </div>
          </div> */}
            <Balance/>

          {/* <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
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
          </div> */}
        {/* </div> */}
      </div>
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

