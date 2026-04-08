import SidebarItem from "./SidebarItem";
import { Home, Search, Gift, ArrowLeftRight, History } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ activeTab, setActiveTab, isSidebarOpen }: SidebarProps) => (
  <aside
    className={`bg-white border-r border-gray-200 flex flex-col pt-20 h-screen fixed z-20 transition-all duration-300 ease-in-out ${
      isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full"
    }`}
  >
    <div className={`flex-1 overflow-y-auto overflow-x-hidden ${isSidebarOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
      <nav className="w-64">
        <SidebarItem icon={Home} label="Home" active={activeTab === "home"} onClick={() => setActiveTab("home")} />
        <SidebarItem icon={Search} label="Explore" active={activeTab === "explore"} onClick={() => setActiveTab("explore")} />
        <SidebarItem icon={Gift} label="Rewards" active={activeTab === "rewards"} onClick={() => setActiveTab("rewards")} />
        <SidebarItem icon={ArrowLeftRight} label="Transfer" active={activeTab === "transfer"} onClick={() => setActiveTab("transfer")} />
        <SidebarItem icon={History} label="Transactions" active={activeTab === "transactions"} onClick={() => setActiveTab("transactions")} />
      </nav>
    </div>
  </aside>
);

export default Sidebar;