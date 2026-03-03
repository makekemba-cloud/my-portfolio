'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Users, FileText, MessageSquare, TrendingUp, Settings, LogOut, Bell, Search } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { label: 'Total Users', value: '2,847', icon: Users, trend: '+12%', color: 'from-[#2563EB] to-[#3B82F6]' },
    { label: 'Total Posts', value: '1,203', icon: FileText, trend: '+8%', color: 'from-[#3B82F6] to-[#2563EB]' },
    { label: 'Messages', value: '564', icon: MessageSquare, trend: '+24%', color: 'from-[#06B6D4] to-[#2563EB]' },
    { label: 'Revenue', value: '$24.5K', icon: TrendingUp, trend: '+18%', color: 'from-[#2563EB] to-[#06B6D4]' },
  ];

  const recentActivities = [
    { type: 'User Signup', description: 'John Doe joined the platform', time: '2 minutes ago', icon: Users },
    { type: 'New Post', description: 'Sarah published "Getting Started with Next.js"', time: '15 minutes ago', icon: FileText },
    { type: 'Message', description: '5 new messages from support queue', time: '32 minutes ago', icon: MessageSquare },
    { type: 'System', description: 'Database backup completed successfully', time: '1 hour ago', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Top Navigation */}
      <nav className="fixed top-0 right-0 left-60 h-16 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-[#111827] flex items-center justify-between px-6 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-[#111827] transition-colors text-[#9CA3AF]">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#111827] transition-colors text-[#9CA3AF]">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-[#111827] transition-colors text-[#9CA3AF]">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-60 h-screen bg-[#0B0F1A] border-r border-[#111827] p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block p-2 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#3B82F6] mb-3">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-lg font-bold text-[#F9FAFB]">Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {[
            { icon: BarChart3, label: 'Dashboard', href: '#', active: true },
            { icon: Users, label: 'Users', href: '#', active: false },
            { icon: FileText, label: 'Posts', href: '#', active: false },
            { icon: MessageSquare, label: 'Messages', href: '#', active: false },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  item.active
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="p-4 rounded-lg bg-[#111827] border border-[#1F2937]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6]" />
            <div className="text-sm">
              <p className="font-semibold text-[#F9FAFB]">Makekemba</p>
              <p className="text-xs text-[#6B7280]">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-60 mt-16 p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-[#F9FAFB] mb-2">Welcome back, Makekemba</h2>
          <p className="text-[#9CA3AF]">Here's what's happening on your platform today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border border-[#111827] bg-[#0B0F1A] hover:border-[#2563EB]/50 transition-all duration-300 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isLoaded ? `${idx * 100}ms` : '0' }}
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-[#9CA3AF] text-sm font-medium mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-[#F9FAFB]">{stat.value}</p>
                  <p className="text-xs text-green-500 font-semibold">{stat.trend}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 p-6 rounded-xl border border-[#111827] bg-[#0B0F1A]">
            <h3 className="text-xl font-bold text-[#F9FAFB] mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#111827] transition-colors cursor-pointer">
                    <div className="p-2 rounded-lg bg-[#111827]">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#F9FAFB] text-sm">{activity.type}</p>
                      <p className="text-xs text-[#9CA3AF] mt-1">{activity.description}</p>
                    </div>
                    <span className="text-xs text-[#6B7280] whitespace-nowrap">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-6 rounded-xl border border-[#111827] bg-[#0B0F1A]">
            <h3 className="text-xl font-bold text-[#F9FAFB] mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-[#9CA3AF]">Conversion Rate</p>
                  <p className="text-sm font-bold text-[#2563EB]">3.24%</p>
                </div>
                <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-[#9CA3AF]">Active Users</p>
                  <p className="text-sm font-bold text-[#2563EB]">78%</p>
                </div>
                <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-[#9CA3AF]">Server Health</p>
                  <p className="text-sm font-bold text-[#2563EB]">99.8%</p>
                </div>
                <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-gradient-to-r from-[#06B6D4] to-[#2563EB]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}