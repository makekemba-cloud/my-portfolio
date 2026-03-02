'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function EducationPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2018-2022',
      highlights: ['First Class Honors', "Dean's List", 'Scholarship Recipient'],
    },
    {
      icon: BookOpen,
      degree: 'Advanced Web Development Certification',
      institution: 'Online Platform',
      year: '2022-2023',
      highlights: ['Full Stack Track', '500+ Hours', 'Project-Based Learning'],
    },
    {
      icon: Award,
      degree: 'Security & Cloud Architecture Specialization',
      institution: 'Professional Development',
      year: '2023-2024',
      highlights: ['AWS Solutions Architect', 'OWASP Certified', 'Security Best Practices'],
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Education</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 transform ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="flex gap-8">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 border-2 border-[#2563EB] flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#2563EB]" size={24} />
                      </div>
                      {index !== education.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-[#2563EB] to-transparent mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">{item.degree}</h3>
                        <p className="text-[#2563EB] font-semibold mb-2">{item.institution}</p>
                        <p className="text-[#9CA3AF] text-sm mb-4">{item.year}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
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