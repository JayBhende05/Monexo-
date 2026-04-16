"use client"
import { Plus, Minus, ArrowLeftRight, Download, Upload, ChevronRight, TrendingUp, Percent } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { cn } from "./../../lib/utils";
import { useSession } from "next-auth/react";
import getGreeting from "../../lib/greeting";
import {useState, useEffect} from 'react'
import { useAmountBalanceStore } from "@repo/store";

const data = [
  { date: "20 Feb", value: 0 },
  { date: "28 Feb", value: 100 },
  { date: "7 Mar", value: 50 },
  { date: "15 Mar", value: 200 },
  { date: "23 Mar", value: 150 },
];

export default function HomeView() {
  const {data: session, status} = useSession();
  const[greetingMsg, setGreetingMsg] = useState('Good to see you back')
      const { amountBalance } = useAmountBalanceStore();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      const greeting = getGreeting();
      setGreetingMsg(`${greeting}, ${session?.user?.name} 👋`);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // cleanup
  }, [session?.user?.name]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{greetingMsg}</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart Card */}
        <div className="col-span-12 lg:col-span-9 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500 mb-1">Portfolio value</p>
            <div className="flex items-baseline gap-3">
              <h2 className="text-5xl font-bold text-gray-900">{amountBalance / 100}</h2>
              <span className="text-brand-accent font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +2.4%
              </span>
            </div>
          </div>

          <div className="h-[300px] w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#5D3FD3" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#5D3FD3' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 p-1 rounded-xl">
              {["1W", "1M", "3M", "6M", "1Y", "ALL"].map((period) => (
                <button
                  key={period}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    period === "1M" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-12">
            <ActionButton icon={Plus} label="Buy" color="bg-blue-500" />
            <ActionButton icon={Minus} label="Sell" color="bg-blue-500" />
            <ActionButton icon={ArrowLeftRight} label="Convert" color="bg-blue-500" />
            <div className="h-10 w-[1px] bg-gray-200" />
            <ActionButton icon={Download} label="Deposit" color="bg-gray-100 text-gray-600" />
            <ActionButton icon={Upload} label="Withdraw" color="bg-gray-100 text-gray-600" />
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-24 h-24 text-blue-500" />
            </div>
            <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded uppercase tracking-wider mb-4">
              New
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Set up recurring buys</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Schedule regular crypto purchases to balance market fluctuations.
            </p>
            <button className="w-full py-3 bg-blue-500/10 text-blue-500 font-bold rounded-xl hover:bg-blue-500/20 transition-colors">
              Get started
            </button>
          </motion.div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Your Assets</h3>
              <button className="text-xs font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <div className="space-y-4">
              <AssetItem name="Bitcoin" symbol="BTC" amount="0.45" value="$28,450" change="+1.2%" />
              <AssetItem name="Ethereum" symbol="ETH" amount="4.2" value="$10,200" change="-0.8%" />
              <AssetItem name="Solana" symbol="SOL" amount="120" value="$14,400" change="+5.4%" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-blue-500/5 border border-blue-500/10 rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:bg-blue-500/10 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <Percent className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Earn up to 10%+ APR</h4>
            <p className="text-sm text-gray-500">Stake your assets and grow your portfolio automatically.</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <button className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110", color)}>
        <Icon className="w-5 h-5" />
      </button>
      <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{label}</span>
    </div>
  );
}

function AssetItem({ name, symbol, amount, value, change }: any) {
  const isPositive = change.startsWith("+");
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs text-gray-600">
          {symbol[0]}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{amount} {symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-gray-900">{value}</p>
        <p className={cn("text-[10px] font-bold", isPositive ? "text-brand-accent" : "text-brand-danger")}>
          {change}
        </p>
      </div>
    </div>
  );
}
