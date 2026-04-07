"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className=" bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold tracking-tighter text-[#008CFF] italic">
            monexo
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="text-sm font-semibold hover:opacity-70 transition-opacity cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
          <button
            className="flex items-center gap-2 rounded-full border border-black px-4 py-1.5 text-sm font-semibold hover:bg-black hover:text-white transition-all"
            onClick={() =>
              (window.location.href = "http://localhost:3000/login")
            }
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#008CFF] text-[10px] text-white">
              M
            </span>
            Merchant login
          </button>
        </div>
      </nav>
    </div>
  );
}
