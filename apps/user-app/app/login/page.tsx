"use client"
import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
function page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginStep, setLoginStep] = useState(1); // 1: phone, 2: Password
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const[error, setError] = useState('');

  const handleNext = (e:any) => {
    e.preventDefault();
    if (phone.trim()) {
      setLoginStep(2);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
   const res = await signIn("credentials",{
    redirect: false,
    phone,
    password
   })

  if (res?.error) {
      setError("Invalid credentials")
    } else {
      router.push("/dashboard") // Redirect after login
    }

    console.log("Logging in with:", phone, password);
  };

  

  const closeLogin = () => {
    setIsLoginOpen(false);
    setLoginStep(1);
    setphone("");
    setPassword("");
    setShowPassword(false);
    router.push('/');
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
                onClick={closeLogin}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-3xl font-extrabold tracking-tighter text-[#008CFF] italic mb-6">
                  monexo
                </span>
                <h2 className="text-xl font-medium text-gray-800 mb-8">Log in</h2>

                <form className="w-full space-y-4" onSubmit={loginStep === 1 ? handleNext : handleLogin}>
                  {loginStep === 1 ? (
                    <div className="space-y-4">
                      <input 
                        type="tel"
                        placeholder="Enter Mobile number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        className="w-full rounded-lg border text-gray-800 border-gray-300 px-4 py-3.5 text-sm focus:border-[#008CFF] focus:outline-none transition-colors"
                        required
                      />
                      <button 
                        type="submit"
                        className="w-full rounded-full bg-[#008CFF] py-3.5 text-sm font-bold text-white hover:bg-[#0076D6] transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between px-1">
                        <span className="text-sm text-gray-800">{phone}</span>
                        <button 
                          type="button"
                          onClick={() => setLoginStep(1)}
                          className="text-xs font-bold text-[#008CFF] hover:underline"
                        >
                          Change
                        </button>
                      </div>
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
                        type="button"
                        className="text-xs font-bold text-[#008CFF] hover:underline"
                      >
                        Forgot password?
                      </button>
                      <button 
                        type="submit"
                        className="w-full rounded-full bg-[#008CFF] py-3.5 text-sm font-bold text-white hover:bg-[#0076D6] transition-colors"
                      >
                        Log in
                      </button>
                    </div>
                  )}

                  <button 
                    type="button"
                    onClick={()=>router.push('/signup')}
                    className="w-full rounded-full border border-[#008CFF] py-3.5 text-sm font-bold text-[#008CFF] hover:bg-[#F0F8FF] transition-colors"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      
    </>
  )
}

export default page
