import { FC } from "react";

interface SidebarItemProps {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
      active
        ? "text-[#5D48B9] bg-[#F3F0FF] border-r-4 border-[#5D48B9]"
        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

export default SidebarItem;