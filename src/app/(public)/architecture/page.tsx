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
      description: 'PostgreSQL and MongoDB databases with optimized queries and indexing.',
      technologies: ['PostgreSQL', 'MongoDB', 'Prisma', 'Redis', 'Indexing'],
      features: ['Query Optimization', 'Connection Pooling', 'Backup Strategy', 'Monitoring'],
    },
    {
      icon: Lock,
      layer: 'Security Layer',
      description: 'JWT authentication, encryption, and security best practices implemented.',
      technologies: ['JWT Auth', 'Encryption', 'CORS', 'HTTPS', 'OWASP'],
      features: ['Input Validation', 'SQL Injection Prevention', 'XSS Protection', 'CSRF Tokens'],
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">System Architecture</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Scalable, secure, and performant architecture for modern web applications
          </p>
        </div>
      </section>

      {/* Architecture Stack */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {architectureLayers.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-1000 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left side - Layer info */}
                    <div className="order-2 md:order-1">
                      <div className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                            <Icon className="text-[#3B82F6]" size={28} />
                          </div>
                          <h3 className="text-2xl font-bold text-[#F9FAFB]">{item.layer}</h3>
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