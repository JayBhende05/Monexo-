"use client"
import { useEffect, useState } from "react";
import Sidebar from "./../component/SideBar";
import TopNav from "./../component/TopNav";
import { AnimatePresence, motion } from "framer-motion";
import HomeTab from "./../component/tabs/HomeTab";
import TransactionsTab from "./../component/tabs/TransactionsTab";
import ComingSoonTab from "./../component/tabs/ComingSoonTab";
import {useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "transactions" | "explore" | "rewards" | "transfer">("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
 const{data: session, status} = useSession()
const router = useRouter();

useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login"); // or wherever your sign-in page is
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // show while session is being fetched
  }

  if (!session) return null; // don't render dashboard if no session



  return (
    <div className="min-h-screen bg-[#F9F9FB] flex font-sans text-gray-900 overflow-x-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <TopNav isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="mt-16 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeTab />}
            {activeTab === "transactions" && <TransactionsTab />}
            {["explore", "rewards", "transfer"].includes(activeTab) && <ComingSoonTab activeTab={activeTab} setActiveTab={setActiveTab} />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}