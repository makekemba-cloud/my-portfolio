'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Database, Cloud, Cpu, Lock, CheckCircle2 } from 'lucide-react';

export default function ArchitecturePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const architectureLayers = [
    {
      icon: Cpu,
      layer: 'Frontend Layer',
      description: 'React/Next.js applications with TypeScript, optimized for performance and UX.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Server-Side Rendering', 'Static Generation', 'Code Splitting', 'Image Optimization'],
    },
    {
      icon: Cloud,
      layer: 'API Layer',
      description: 'RESTful and GraphQL APIs built with Node.js and Express, fully documented.',
      technologies: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Middleware'],
      features: ['Authentication', 'Authorization', 'Rate Limiting', 'Caching'],
    },
    {
      icon: Database,
      layer: 'Database Layer',
      description: 'PostgreSQL databases with optimized queries and indexing.',
      technologies: ['PostgreSQL', 'Indexing'],
      features: ['Query Optimization', 'Connection Pooling', 'Backup Strategy', 'Monitoring'],
    },
    {
  icon: Lock,
  layer: 'Security & Access Control',
  description: 'Secure authentication with Google OAuth and Supabase, role-based access control via middleware, and activity logging for monitoring user actions.',
  technologies: ['Google OAuth', 'Supabase Auth', 'RBAC Middleware', 'Sentry', 'HTTPS'],
  features: ['Role-Based Access Control', 'Protected Routes', 'Activity Logging', 'Real-Time Error Monitoring'],
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
            <span className="text-[#F9FAFB]">System </span>
            <span className="text-[#2563EB]">Architecture</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Scalable, secure, and performant architecture for modern web applications
          </p>
        </div>
      </section>

      {/* Architecture Stack */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {architectureLayers.map((item, index) => {
              const Icon = item.icon;
              // Handle layer names with last word in blue
              let firstPart = item.layer;
              let lastWord = '';
              const words = item.layer.split(' ');
              if (words.length > 1) {
                lastWord = words[words.length - 1];
                firstPart = words.slice(0, -1).join(' ') + ' ';
              }

              return (
                <div
                  key={index}
                  className={`group transition-all duration-1000 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  {/* Divider Line */}
                  {index > 0 && (
                    <div className="flex items-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
                    </div>
                  )}

                  {/* Layer Badge */}
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                      <span className="text-sm text-[#2563EB] font-semibold">{item.layer}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left side - Layer info */}
                    <div className="order-2 md:order-1">
                      <div className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="text-[#3B82F6]" size={28} />
                          </div>
                          <h3 className="text-2xl font-bold">
                            <span className="text-[#F9FAFB]">{firstPart}</span>
                            {lastWord && <span className="text-[#2563EB]">{lastWord}</span>}
                          </h3>
                        </div>
                        <p className="text-[#9CA3AF] mb-6">{item.description}</p>

                        {/* Technologies */}
                        <div>
                          <p className="text-sm font-semibold text-[#F9FAFB] mb-3">Technologies</p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-xs rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Features */}
                    <div className="order-1 md:order-2">
                      <div className="space-y-4">
                        {item.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-[#2563EB] flex-shrink-0 mt-1" size={20} />
                            <span className="text-[#F9FAFB] font-medium">{feature}</span>
                          </div>
                        ))}
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