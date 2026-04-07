"use client"
import React from 'react'
import {useState} from "react"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, X } from 'lucide-react';
function Page() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState("");
const router = useRouter();

// Close signup modal
const closeSignup = () => {
  setIsSignupOpen(false);
  setName("");
  setEmail("");
  setNumber("");
  setPassword("");
  setShowPassword(false);
  setError("");
  router.push("/");
};

// Handle signup submission
const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic validation
  if (!name.trim() || !number.trim() || !password.trim()) {
    setError("Name, number, and password are required.");
    return;
  }

  try {
    const data = {name, email, number,password}
    const res = await axios.post("/api/user/signup", data);

    

    if (!res) {
      setError("Signup failed.");
    } else {
      // Redirect to login or homepage
      router.push("/login");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
};

// Switch to login modal
const switchToLogin = () => {
  closeSignup();
  router.push('/login');
};
  return (
    <>
    <AnimatePresence>
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4"
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="relative w-full max-w-[440px] rounded-xl border border-gray-100 bg-white p-8 shadow-2xl md:p-12"
    >
      {error && <p className="text-red-500">{error}</p>}
      <button 
        onClick={closeSignup}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold tracking-tighter text-[#008CFF] italic mb-6">
          monexo
        </span>
        <h2 className="text-xl font-medium text-gray-800 mb-8">Sign Up</h2>

        <form className="w-full space-y-4" onSubmit={handleSignup}>
          <input 
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border text-gray-800 border-gray-300 px-4 py-3.5 text-sm focus:border-[#008CFF] focus:outline-none transition-colors"
            required
          />

          <input 
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border text-gray-800 border-gray-300 px-4 py-3.5 text-sm focus:border-[#008CFF] focus:outline-none transition-colors"
          />

          <input 
            type="tel"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-lg border text-gray-800 border-gray-300 px-4 py-3.5 text-sm focus:border-[#008CFF] focus:outline-none transition-colors"
            required
          />

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border text-gray-800 border-gray-300 px-4 py-3.5 text-sm focus:border-[#008CFF] focus:outline-none transition-colors pr-12"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button 
            type="submit"
            className="w-full rounded-full bg-[#008CFF] py-3.5 text-sm font-bold text-white hover:bg-[#0076D6] transition-colors"
          >
            Sign Up
          </button>
        </form>

        <button 
          type="button"
          onClick={switchToLogin}
          className="mt-4 w-full rounded-full border border-[#008CFF] py-3.5 text-sm font-bold text-[#008CFF] hover:bg-[#F0F8FF] transition-colors"
        >
          Already have an account? Log in
        </button>
      </div>
    </motion.div>
  </motion.div>
</AnimatePresence>
      
    </>
  )
}

export default Page
