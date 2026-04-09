"use client"
import { useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Topbar from "../../../component/Topbar";
import HomeView from "../../../component/views/HomeView";
import TransferView from "../../../component/views/TransferView";
import TransactionsView from "../../../component/views/TransactionsView";
import AccountView from "../../../component/views/AccountView";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data : session, status} = useSession();
const router = useRouter();

  if(status === 'unauthenticated'){
    router.push('/login')
  }

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
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">?</span>
            </div>
            <p className="text-lg font-medium">View "{activeTab}" is coming soon.</p>
            <button 
              onClick={() => setActiveTab("home")}
              className="text-brand-primary font-bold hover:underline"
            >
              Back to Home
            </button>
          </div>
        );
    }
  };

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

        
        <footer className="p-8 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            &copy; 2026 Monexo Financial Services. All rights reserved. 
            <span className="mx-2">|</span>
            <button className="hover:text-gray-600 transition-colors">Privacy Policy</button>
            <span className="mx-2">|</span>
            <button className="hover:text-gray-600 transition-colors">Terms of Service</button>
          </p>
        </footer>
      </div>
    </div>
  );
}