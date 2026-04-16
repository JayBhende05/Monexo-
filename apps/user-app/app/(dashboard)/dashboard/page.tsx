"use client"
import { useState, useEffect } from "react";
import Sidebar from "../../../component/Sidebar";
import Topbar from "../../../component/Topbar";
import HomeView from "../../../component/views/HomeView";
import TransferView from "../../../component/views/TransferView";
import TransactionsView from "../../../component/views/TransactionsView";
import AccountView from "../../../component/views/AccountView";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import getBalance from "../../../lib/actions/getBalance";
import { useAmountBalanceStore, useLockedBalanceStore, useTransactionStore } from "@repo/store";
import { getOnRampTransaction } from "../../../lib/actions/getOnRampTransaction";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: session, status } = useSession();

  const router = useRouter();
  

  const setAmountBalance = useAmountBalanceStore((s) => s.setAmountBalance);
  const setLockedBalance = useLockedBalanceStore((s) => s.setLockedBalance);
  const setTransactions = useTransactionStore((s) => s.setTransactions);

  // ✅ Redirect safely
  useEffect(() => {

    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // ✅ Fetch balance
  useEffect(() => {
    const fetchBalance = async () => {
      if (!session?.user?.id) return;

      const balance = await getBalance(session.user.id);
      const transactions = await getOnRampTransaction(session.user.id);


      
      setAmountBalance(balance?.amount);
      setLockedBalance(balance?.locked);
      setTransactions(transactions)
      console.log(transactions);
    };

    fetchBalance();
  }, [session, setAmountBalance, setLockedBalance]);
  

  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView />;
      case "transfer":
        return <TransferView />;
      case "transactions":
        return <TransactionsView />;
      case "account":
        return <AccountView />;
      default:
        return <div>Coming soon</div>;
    }
  };

  // ✅ Optional loading state
  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen bg-[#F9FAFC]">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          setActiveTab={setActiveTab}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {renderView()}
        </main>
      </div>
    </div>
  );
}