import { Home, Compass, Percent, ArrowLeftRight, Clock, X } from "lucide-react";
import { cn } from "./../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "rewards", label: "Rewards", icon: Percent },
  { id: "transfer", label: "Transfer", icon: ArrowLeftRight },
  { id: "transactions", label: "Transactions", icon: Clock },
];

export default function Sidebar({ activeTab, setActiveTab, isOpen, onClose }: SidebarProps) {
  const SidebarContent = (
    <div className="w-64 border-r border-gray-200 h-screen sticky top-0 bg-white flex flex-col z-50">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-500">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">Monexo</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-50 rounded-lg lg:hidden text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                onClose();
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-blue-500/10 text-blue-500"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600"
                )}
              />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-100">
        <div className="bg-blue-500/5 rounded-2xl p-4">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">
            Pro Account
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Unlock advanced trading features.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-500/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        {SidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 lg:hidden"
            >
              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
