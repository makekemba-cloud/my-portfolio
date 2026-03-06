'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Shield, Activity, CheckCircle2 } from 'lucide-react';

export default function SecurityLabPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const securitySections = [
    {
      icon: Shield,
      name: 'Authentication & Access Control',
      description:
        'Security measures implemented across the platform to ensure only verified users can access protected resources, with granular role-based permissions enforced at every layer.',
      features: [
        'Google OAuth authentication',
        'Supabase authentication system',
        'Middleware Role-Based Access Control (RBAC)',
        'Protected routes and permission checks',
      ],
    },
    {
      icon: Activity,
      name: 'Monitoring & Logging',
      description:
        'Real-time visibility into application health, user behaviour, and error tracking — ensuring issues are caught and diagnosed before they affect users.',
      features: [
        'Sentry – real-time error monitoring',
        'Activity logging API (/api/auth/log-activity)',
      ],
    },
  ];

  const bestPractices = [
    'Always validate and sanitize user input',
    'Use HTTPS for all communications',
    'Implement proper authentication',
    'Keep dependencies updated',
    'Use environment variables for secrets',
    'Implement proper error handling',
  ];

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
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-[#F9FAFB]">Security </span>
            <span className="text-[#2563EB]">Lab</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Real security implementations applied across my projects — authentication, access control, monitoring, and logging
          </p>
        </div>
      </section>

      {/* Security Cards */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-sm text-[#2563EB] font-semibold">Implemented in Production</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securitySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-500 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#3B82F6]" size={28} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-[#F9FAFB]">{section.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#9CA3AF] mb-6 text-sm leading-relaxed">{section.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {section.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#2563EB] shrink-0 mt-0.5" size={17} />
                        <span className="text-[#F9FAFB] text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Best Practices */}
          <div className="p-10 rounded-xl border border-[#111827] bg-[#0B0F1A]/40">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-[#F9FAFB]">Security </span>
              <span className="text-[#2563EB]">Best Practices</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bestPractices.map((practice, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2563EB] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#9CA3AF] text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}