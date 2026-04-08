import { FC } from "react";

interface ActionButtonProps {
  icon: any;
  label: string;
  color?: string;
}

const ActionButton: FC<ActionButtonProps> = ({ icon: Icon, label, color = "bg-[#5D48B9]" }) => (
  <div className="flex flex-col items-center gap-2">
    <button className={`${color} text-white p-4 rounded-full hover:opacity-90 transition-opacity shadow-lg`}>
      <Icon size={24} />
    </button>
    <span className="text-sm font-medium text-gray-600">{label}</span>
  </div>
);

export default ActionButton;