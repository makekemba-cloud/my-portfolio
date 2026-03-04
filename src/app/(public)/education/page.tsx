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
      degree: 'Advanced Diploma in Information Technology',
      institution: 'Nelson Mandela University',
      year: '2025-2025',
      coursework: ['ASP.NET', 'JavaScript', 'jQuery', 'Project Management', 'Cyber Security'],
    },
    {
      icon: BookOpen,
      degree: 'Diploma in Information Technology',
      institution: 'Nelson Mandela University',
      year: '2022-2024',
      coursework: ['ASP.NET', 'C#', 'HTML', 'Python', 'SQL Server', 'Java', 'JavaScript', 'jQuery', 'CSS', 'Visual Studio'],
    },
    {
      icon: Award,
      degree: 'CCNAv7: Introduction to Networks',
      institution: 'Cisco Networking Academy',
      year: '7 Feb 2023',
      coursework: ['Switch & Device Configuration', 'Ethernet Protocols', 'Router Configuration', 'IPv4 & IPv6 Addressing', 'Network Security', 'Troubleshooting'],
    },
    {
      icon: Award,
      degree: 'Introduction to Cybersecurity',
      institution: 'Cisco Networking Academy',
      year: '9 Oct 2022',
      coursework: ['Cyber Threats', 'Network Vulnerabilities', 'Threat Detection', 'Defense Strategies', 'Security Certifications', 'Network Security'],
    },
    {
      icon: Award,
      degree: 'National Senior Certificate',
      institution: 'Ramauba Secondary School (Grade 12)',
      year: '2021',
      coursework: [],
    },
    {
      icon: Award,
      degree: 'Code 10 Driver\'s License',
      institution: 'South Africa',
      year: 'Valid',
      coursework: [],
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
            <span className="text-[#F9FAFB]">Academic </span>
            <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Background</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Education and relevant coursework from Nelson Mandela University
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 transform ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 150}ms` : '0ms' }}
                >
                  {/* Divider Line */}
                  {index > 0 && (
                    <div className="flex items-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
                    </div>
                  )}

                  <div className="flex gap-8">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-[#2563EB]/20 border-2 border-[#2563EB] flex items-center justify-center flex-shrink-0 hover:bg-[#2563EB]/30 transition-all duration-300">
                        <Icon className="text-[#2563EB]" size={28} />
                      </div>
                      {index !== education.length - 1 && (
                        <div className="w-1 h-32 bg-gradient-to-b from-[#2563EB] to-transparent mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="p-8 rounded-xl border border-[#111827] bg-gradient-to-br from-[#0B0F1A] to-[#000000] hover:border-[#2563EB]/50 transition-all duration-300">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">{item.degree}</h3>
                          <p className="text-[#2563EB] font-semibold mb-1">{item.institution}</p>
                          <p className="text-[#9CA3AF] text-sm">{item.year}</p>
                        </div>

                        {/* Coursework Tags */}
                        {item.coursework.length > 0 && (
                          <div>
                            <p className="text-[#9CA3AF] text-sm font-semibold mb-3">Relevant Coursework:</p>
                            <div className="flex flex-wrap gap-3">
                              {item.coursework.map((course, i) => (
                                <span
                                  key={i}
                                  className={`px-4 py-2 text-xs rounded-full border border-[#2563EB]/40 bg-[#0B0F1A]/60 text-[#3B82F6] font-medium hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 transform ${
                                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                  }`}
                                  style={{ transitionDelay: isLoaded ? `${(index * 150) + (i * 20)}ms` : '0ms' }}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
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