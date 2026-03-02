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
      title: 'Top Performer',
      description: 'Consistently recognized for excellence in fullstack development and project delivery',
      year: '2023-2024',
    },
    {
      icon: Award,
      title: 'Security Certifications',
      description: 'Certified in OWASP security practices and secure coding standards',
      year: '2023',
    },
    {
      icon: Star,
      title: '50+ Projects Delivered',
      description: 'Successfully completed and deployed 50+ production applications',
      year: '2024',
    },
    {
      icon: Zap,
      title: 'Performance Expert',
      description: 'Consistently achieve 98%+ Lighthouse scores and sub-2s load times',
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Achievements</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Recognitions and milestones earned through dedication to excellence
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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