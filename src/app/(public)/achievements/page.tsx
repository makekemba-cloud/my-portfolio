'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Trophy, Award, Star, Zap } from 'lucide-react';

export default function AchievementsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'Advanced Diploma Achieved',
      description: 'Successfully completed Advanced Diploma in Information Technology from Nelson Mandela University',
      year: '2025',
    },
    {
      icon: Award,
      title: 'Cisco Certified',
      description: 'Obtained two professional certifications: CCNAv7 and Introduction to Cybersecurity from Cisco Networking Academy',
      year: '2022-2023',
    },
    {
      icon: Star,
      title: 'Full Stack Development Expertise',
      description: 'Mastered full-stack development with expertise in React, Next.js, Node.js, ASP.NET, and multiple databases',
      year: '2024',
    },
    {
      icon: Zap,
      title: 'Security & Performance Specialist',
      description: 'Specialized in web security, cybersecurity fundamentals, and application performance optimization',
      year: '2023-2024',
    },
  ];

  return (
    <div className="bg-[#000000]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#000000] py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-[#F9FAFB]">Achievements</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Recognitions and milestones earned through dedication to excellence
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-sm text-[#2563EB] font-semibold">Key Achievements</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 hover:bg-[#0B0F1A]/60 transition-all duration-500 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#3B82F6]" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{achievement.title}</h3>
                      <p className="text-[#9CA3AF] mb-4">{achievement.description}</p>
                      <span className="text-sm text-[#2563EB] font-semibold">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}