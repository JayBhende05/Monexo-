'use client'

import { X } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    
    await signIn('google', { callbackUrl: '/' })
  }
  const handleGithubSignIn = async () => {
    
    await signIn('github', { callbackUrl: '/' })
  }

  const closeLogin =()=>{
window.location.href = "http://localhost:3001"
  }

  return (
  
  <div
  
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4"
  >
    <div
    
      className="relative w-full max-w-[440px] rounded-xl border border-gray-100 bg-white p-8 shadow-2xl md:p-12"
    >
      {/* Close button */}
      <button
        onClick={closeLogin}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center">
        {/* Logo */}
        <span className="text-3xl font-extrabold tracking-tighter text-[#008CFF] italic mb-6">
          monexo
        </span>

        {/* Heading */}
        <h2 className="text-xl font-medium text-gray-800 mb-8">
          Merchant Login
        </h2>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 mb-5 rounded-full bg-[#008CFF] py-3.5 text-sm font-bold text-white hover:bg-[#0076D6] transition-colors"
        >
          Continue with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#008CFF] py-3.5 text-sm font-bold text-white hover:bg-[#0076D6] transition-colors"
        >
          Continue with Github
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Optional secondary action */}
        <button
          onClick={() =>
                  (window.location.href = "http://localhost:3001")}
          className="w-full rounded-full border border-[#008CFF] py-3.5 text-sm font-bold text-[#008CFF] hover:bg-[#F0F8FF] transition-colors"
        >
         Back to Home Page
        </button>
      </div>
    </div>
  </div>

  )
}