'use client';

import { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#000000] flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-[#0B0F1A] rounded-2xl border border-[#111827] p-8 sm:p-10 backdrop-blur-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block p-3 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#3B82F6] mb-4">
              <div className="w-6 h-6 bg-white rounded" />
            </div>
            <h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">Admin Portal</h1>
            <p className="text-[#9CA3AF]">Secure access to your dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-[#F9FAFB]">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 outline-none transition-all duration-300"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-[#F9FAFB]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 outline-none transition-all duration-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#2563EB] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#111827] bg-[#000000] text-[#2563EB] cursor-pointer"
                />
                <span className="text-[#9CA3AF]">Remember me</span>
              </label>
              <a href="#" className="text-[#2563EB] hover:text-[#3B82F6] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#2563EB]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-8 p-4 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/20">
            <p className="text-xs text-[#9CA3AF] text-center">
              🔒 This is a secure admin portal. Credentials are encrypted in transit.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 text-[#2563EB] opacity-20">
        <div className="w-24 h-24 border-2 border-current rounded-lg rotate-45" />
      </div>
      <div className="absolute bottom-8 right-8 text-[#3B82F6] opacity-20">
        <div className="w-32 h-32 border border-current rounded-full" />
      </div>
    </div>
  );
}