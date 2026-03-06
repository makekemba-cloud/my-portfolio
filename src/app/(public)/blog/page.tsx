'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PenLine } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="bg-[#000000]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#000000] py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Blog</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Articles, tutorials, and insights on web development and technology
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

          {/* Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
              <PenLine size={40} className="text-[#2563EB]" />
            </div>
            {/* Pulse ring */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-40" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2563EB]/80" />
            </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-sm text-[#2563EB] font-semibold">Coming Soon</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F9FAFB] mb-4">
            Articles are on the way
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl">
            I&apos;m working on content covering full-stack development, Supabase, Next.js, and real-world project breakdowns. Check back soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}