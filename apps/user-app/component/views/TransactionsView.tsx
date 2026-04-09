import { Download, ChevronDown, Search, Filter, Calendar } from "lucide-react";
import { cn } from "./../../lib/utils";


const transactions = [
  { id: 1, type: "Withdrew USDC", date: "Feb 19, 2024, 03:18", amount: "-5,059.9477 USDC", value: "-$5,060.36", icon: "S" },
  { id: 2, type: "Converted to USDC", date: "Feb 19, 2024, 03:17", amount: "+5,059.9477 USDC", value: "-704.0000 DYM", icon: "S" },
  { id: 3, type: "Deposited ETH", date: "Feb 15, 2024, 12:45", amount: "+1.5000 ETH", value: "$3,450.20", icon: "E" },
  { id: 4, type: "Buy BTC", date: "Feb 12, 2024, 09:12", amount: "+0.0500 BTC", value: "-$2,150.00", icon: "B" },
];

export default function TransactionsView() {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <h1 className="text-4xl font-bold text-gray-900">Transactions</h1>

      <div className="flex gap-4 mb-8">
        {["History", "Scheduled"].map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all",
              tab === "History" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900">Transactions</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <FilterButton label="Assets" />
          <FilterButton label="Types" />
          <FilterButton label="Start date" icon={Calendar} />
          <FilterButton label="End date" icon={Calendar} />
          <button className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">
            Clear
          </button>
        </div>

        <div className="space-y-2">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 font-bold shadow-inner">
                  {tx.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-500 transition-colors">{tx.type}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn("font-bold text-gray-900", tx.amount.startsWith("+") ? "text-brand-accent" : "")}>
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-500">{tx.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center">
          <button className="text-sm font-bold text-blue-500 hover:underline">
            Load more transactions
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, icon: Icon = ChevronDown }: { label: string, icon?: any }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
      {label}
      <Icon className="w-4 h-4 text-gray-400" />
    </button>
  );
}
