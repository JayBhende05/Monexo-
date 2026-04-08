
import { FC } from "react";
import { Menu, X, Grid, HelpCircle, User } from "lucide-react";
import {signOut} from 'next-auth/react';

interface TopNavProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const TopNav: FC<TopNavProps> = ({ isSidebarOpen, toggleSidebar }) => (
  <header className={`h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 fixed top-0 right-0 z-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? "left-64" : "left-0"}`}>
    <div className="flex items-center gap-4">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#5D48B9] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <span className="text-2xl font-bold text-[#5D48B9] tracking-tight">Monexo</span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <button className="hidden sm:block bg-[#5D48B9] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity" onClick={()=> signOut({callbackUrl:'/'})}>
        SignOut
      </button>
      <div className="flex items-center gap-4 text-gray-500">
        <Grid size={20} className="cursor-pointer hover:text-gray-900" />
        <HelpCircle size={20} className="cursor-pointer hover:text-gray-900" />
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <User size={18} />
        </div>
      </div>
    </div>
  </header>
);

export default TopNav;