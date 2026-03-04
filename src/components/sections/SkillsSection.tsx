'use client';

import { useState, useEffect } from 'react';
import { Globe, Database, Cloud, Lock } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      icon: Globe,
      category: 'Web Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    },
    {
      icon: Database,
      category: 'Database & Backend',
      skills: ['PostgreSQL', 'Supabase', 'SQL Server', 'C#', 'ASP.NET Core', 'PHP'],
    },
    {
      icon: Cloud,
      category: 'Cloud & Security',
      skills: ['Vercel', 'GitHub', 'OAuth', 'JWT', 'Row Level Security'],
    },
  ];

  return (
    <section id="skills" className="relative bg-[#000000] py-28 sm:py-36 border-b border-[#111827] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -right-1/4 bottom-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
            <span className="text-sm text-[#2563EB] font-semibold">Technical Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] mb-6">Skills & Expertise</h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies to bring your vision to life
          </p>
        </div>

        {/* Skills Grid - Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`p-8 rounded-2xl border border-[#111827] bg-gradient-to-br from-[#0B0F1A] to-[#000000] hover:border-[#2563EB]/50 transition-all duration-500 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isLoaded ? `${categoryIndex * 100}ms` : '0ms' }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#2563EB]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#F9FAFB]">{category.category}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 text-sm rounded-full border border-[#2563EB]/40 bg-[#0B0F1A]/60 text-[#3B82F6] font-medium hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 transform ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: isLoaded ? `${(categoryIndex * 100) + (skillIndex * 30)}ms` : '0ms' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with View More Button */}
        <div className="mt-20 pt-12 border-t border-[#111827] text-center">
          <p className="text-[#9CA3AF] text-lg mb-6">Want to see more skills and detailed expertise?</p>
          <a
            href="/skills"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 group"
          >
            View All Skills
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}