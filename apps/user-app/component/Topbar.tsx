"use client"
import { data } from "framer-motion/client";
import { LayoutGrid, HelpCircle, UserCircle, ChevronDown, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

interface TopbarProps {
  setActiveTab: (tab: string) => void;
  onMenuClick: () => void;
}

export default function Topbar({ setActiveTab, onMenuClick }: TopbarProps) {
  const{data:session, status} = useSession();

  return (
    <header className="h-16 border-b border-gray-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-50 rounded-lg lg:hidden text-gray-500"
        >
          <Menu className="w-6 h-6" />
        </button>
        {/* Breadcrumb or search could go here */}
      </div>

      <div className="flex items-center gap-6">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-500/90 transition-all shadow-sm shadow-blue-500/20" onClick={()=> signOut({callbackUrl : '/'})}>
          Log Out
        </button>
        
        <div className="flex items-center gap-4 text-gray-500">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <div className="h-8 w-[1px] bg-gray-200 mx-1" />
          
          <button 
            onClick={() => setActiveTab("account")}
            className="flex items-center gap-2 p-1 pl-2 hover:bg-gray-50 rounded-full transition-all group"
          >
            <span className="text-sm font-medium text-gray-700">{session?.user?.name}</span>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500/10 transition-colors">
              <UserCircle className="w-6 h-6" />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
