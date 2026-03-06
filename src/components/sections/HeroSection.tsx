'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20 pb-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div
            className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Badge */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 transform ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.45)]">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm text-[#9CA3AF] font-medium">
                Building modern web experiences
              </span>
            </div>
          </div>

          {/* Main Content */}
          {/* Mobile: stacked (picture on top, text below) | Desktop: side-by-side */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">

            {/* Profile Picture — visible on ALL screen sizes */}
            <div
              className={`flex-shrink-0 transition-all duration-1000 transform ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              {/* Sizing: smaller on mobile, larger on desktop */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#2563EB] animate-pulse" />
                <div
                  className="absolute inset-3 rounded-full border border-[#2563EB]/30 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />

                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#2563EB] shadow-2xl shadow-[#2563EB]/50">
                  <Image
                    src="/images/Screenshot 2026-03-03 101434.png"
                    alt="Profile"
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Main Headline */}
              <div
                className={`mb-6 transition-all duration-1000 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight tracking-tight cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  <span className="block text-[#F9FAFB] mb-2">Fullstack Developer</span>
                  <span className="block bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent leading-tight">
                    Crafting Secure Web Solutions
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <div
                className={`mb-8 transition-all duration-1000 delay-200 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I build production-grade fullstack applications with a focus on security,
                  performance, and user experience. Specializing in Next.js, React, Node.js,
                  and Supabase.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-1000 delay-300 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <button
                  onClick={() => handleScrollToSection('projects')}
                  className="group relative px-7 py-4 bg-[#2563EB] text-white rounded-lg font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:bg-[#1d4ed8] shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 text-base"
                >
                  <span>View My Work</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
                <button
                  onClick={() => handleScrollToSection('contact')}
                  className="px-7 py-4 border-2 border-[#2563EB]/30 text-[#F9FAFB] rounded-lg font-semibold hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 text-base"
                >
                  Get in Touch
                </button>
              </div>

              {/* Social Links */}
              <div
                className={`flex justify-center lg:justify-start gap-4 transition-all duration-1000 delay-400 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href="https://github.com/makekemba-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/makekemba-vhutali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`flex justify-center transition-opacity duration-1000 delay-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <span className="text-xs text-[#9CA3AF] uppercase tracking-widest font-medium">
                Scroll
              </span>
              <div className="w-6 h-10 border-2 border-[#111827] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-2.5 bg-[#2563EB] rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}