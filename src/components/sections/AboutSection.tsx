'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Briefcase, Award, Target } from 'lucide-react';

export default function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const achievements = [
    {
      icon: Briefcase,
      title: 'Fullstack Expertise',
      description: '5+ years building production applications with modern tech stacks',
    },
    {
      icon: Award,
      title: 'Security Focused',
      description: 'Specialized in implementing secure authentication and data protection',
    },
    {
      icon: Target,
      title: 'Performance Driven',
      description: 'Consistent focus on optimization and user experience excellence',
    },
  ];

  return (
    <section id="about" className="relative bg-[#000000] py-28 sm:py-36 border-b border-[#111827] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
         <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
            <span className="text-sm text-[#2563EB] font-semibold">About Me</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          } flex flex-col items-center lg:items-start text-center lg:text-left`}>
           

            <h2 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight ">
          <span className="block text-[#F9FAFB]">Passionate About</span>
          <span className="block bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Building Better Web</span>
        </h2>

            <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
              I'm a fullstack developer with a deep passion for creating secure, performant, modern, and user-centric web applications. With expertise across the entire stack, I transform ideas into robust digital solutions.
            </p>

            <p className="text-lg text-[#9CA3AF] mb-12 leading-relaxed">
              My approach combines technical excellence with a keen eye for design and user experience. Whether building from scratch or optimizing existing systems, I bring a methodical, security-first mindset to every project.
            </p>

            
          </div>

          {/* Right Content - Stats Cards */}
          <div className={`grid grid-cols-1 gap-6 transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-[#111827] bg-gradient-to-br from-[#0B0F1A] to-[#000000] hover:border-[#2563EB]/50 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-all duration-300">
                      <Icon className="text-[#3B82F6]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">{item.title}</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30"
              >
                Let's Talk
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#111827] text-[#F9FAFB] rounded-lg font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
              >
                View Resume
              </a>
            </div>
      </div>
    </section>
  );
}