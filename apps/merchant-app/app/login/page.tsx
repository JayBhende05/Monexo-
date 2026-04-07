'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    // Redirect automatically after sign-in
    await signIn('google', { callbackUrl: '/' })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center">Login / Signup</h1>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}