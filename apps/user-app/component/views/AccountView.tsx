import { Settings, Shield, CreditCard, FileText, Database, LogOut, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "./../../lib/utils";

export default function AccountView() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <h1 className="text-4xl font-bold text-gray-900">Account</h1>

      <div className="flex gap-4 mb-8">
        {["Settings", "Security", "Verification", "Documents"].map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all",
              tab === "Settings" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Personal Info */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Personal info</h3>
            <div className="space-y-8">
              <InfoRow 
                label="Public ID" 
                value="AA18 N84G WIAB KZYA" 
                onAction={() => handleCopy("AA18 N84G WIAB KZYA")}
                actionIcon={copied ? Check : Copy}
                actionLabel={copied ? "Copied" : "Copy"}
              />
              <InfoRow label="Legal name" value="Harkirat Singh" editable />
              <InfoRow label="Email" value="harkirat96@gmail.com" editable />
              <InfoRow label="Country" value="India" editable />
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Preferences</h3>
            <div className="space-y-8">
              <InfoRow label="Language" value="U.S. English" editable />
              <InfoRow label="Currency" value="USD" editable />
              <InfoRow label="Timezone" value="[+00:00 UTC] UTC, Universe" editable />
              <InfoRow label="Auto log-out" value="Default (8 hours)" editable />
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-sm space-y-1 sticky top-24">
            <MenuButton icon={Settings} label="Settings" active />
            <MenuButton icon={Shield} label="Security" />
            <MenuButton icon={CreditCard} label="Payment methods" />
            <MenuButton icon={FileText} label="Documents" />
            <MenuButton icon={Database} label="Proof of reserves" />
            <div className="h-[1px] bg-gray-100 my-2 mx-4" />
            <MenuButton icon={LogOut} label="Sign out" danger />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, editable, onAction, actionIcon: Icon, actionLabel }: any) {
  return (
    <div className="flex items-start justify-between group">
      <div className="w-1/3">
        <p className="text-sm font-medium text-gray-400">{label}</p>
      </div>
      <div className="w-2/3 flex items-center justify-between">
        <p className="text-sm font-bold text-gray-900">{value}</p>
        {editable ? (
          <button className="text-xs font-bold text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
            Edit
          </button>
        ) : Icon ? (
          <button 
            onClick={onAction}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:underline"
          >
            <Icon className="w-3.5 h-3.5" />
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function MenuButton({ icon: Icon, label, active, danger }: any) {
  return (
    <button className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group",
      active ? "bg-blue-500/5 text-blue-500" : "text-gray-600 hover:bg-gray-50",
      danger ? "text-brand-danger hover:bg-brand-danger/5" : ""
    )}>
      <Icon className={cn("w-5 h-5", active ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600", danger ? "text-brand-danger" : "")} />
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}
