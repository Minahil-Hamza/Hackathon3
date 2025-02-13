"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-[#f5f5dc]">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center" style={{
        backgroundImage: "url('/login-banner.jpg')", // Replace with a furniture-themed image
      }}>
        <div className="flex flex-col items-center justify-center w-full h-full text-[#8B4513] p-10">
          <h1 className="text-5xl font-bold">Welcome to FURNISH</h1>
          <p className="mt-4 text-lg text-center">
            Discover timeless furniture and exclusive deals!
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 mt-6 flex flex-col justify-center p-8 lg:px-20 bg-[#fffaf0] shadow-md">
        <SignedIn>
          <div className="text-center">
            <UserButton />
            <h1 className="text-3xl font-bold mt-4 text-[#8B4513]">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-[#8B4513]">
              Use coupon <span className="font-bold text-[#A0522D]">FURNISH50</span> to get a $50 discount on your next order!
            </p>
          </div>
        </SignedIn>

        <SignedOut>
          <h1 className="text-4xl font-bold mb-6 text-center text-[#8B4513]">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-[#8B4513] font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-[#8B4513] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#8B4513] font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-[#8B4513] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                />
                <span className="absolute right-3 top-3 text-[#8B4513] cursor-pointer">👁</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#8B4513]" />
                <span className="text-[#8B4513] text-sm">Remember Me</span>
              </label>
              <Link href="#" className="text-sm text-[#8B4513] hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className="text-center bg-[#8B4513] text-white py-3 rounded-lg hover:bg-[#A0522D] cursor-pointer">
            <SignInButton mode="modal" />
          </div>
          <p className="text-center mt-4 text-[#8B4513]">
            New here? <Link href="#" className="text-[#A0522D] font-bold">Create an account</Link>
          </p>
          <SignInButton mode="modal">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
                <FcGoogle size={24} /> Continue with Google
              </button>
              
            </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;