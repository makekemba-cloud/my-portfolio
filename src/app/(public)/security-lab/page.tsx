'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Shield, AlertCircle, Lock, Code2, CheckCircle2 } from 'lucide-react';

export default function SecurityLabPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const securityTools = [
    {
      icon: Shield,
      name: 'Vulnerability Scanner',
      description: 'Automated scanning tool for detecting common web vulnerabilities',
      features: ['XSS Detection', 'SQL Injection Check', 'CSRF Verification'],
    },
    {
      icon: Lock,
      name: 'Encryption Utilities',
      description: 'Tools for implementing and testing encryption implementations',
      features: ['AES Encryption', 'Hash Generation', 'Key Management'],
    },
    {
      icon: Code2,
      name: 'Code Analyzer',
      description: 'Static analysis tool for identifying security issues in code',
      features: ['Pattern Detection', 'Dependency Audit', 'Risk Assessment'],
    },
    {
      icon: AlertCircle,
      name: 'Penetration Testing',
      description: 'Authorized testing framework for security assessment',
      features: ['API Testing', 'Authentication Check', 'Access Control Review'],
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Security Lab</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Tools and resources for testing and improving application security
          </p>
        </div>
      </section>

      {/* Security Tools Grid */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securityTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-500 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#3B82F6]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F9FAFB]">{tool.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#9CA3AF] mb-6">{tool.description}</p>
                  <div className="space-y-3">
                    {tool.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#2563EB]" size={18} />
                        <span className="text-[#F9FAFB] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Best Practices Section */}
          <div className="mt-16 p-12 rounded-xl border border-[#111827] bg-[#0B0F1A]/40">
            <h2 className="text-3xl font-bold text-[#F9FAFB] mb-8">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Always validate and sanitize user input',
                'Use HTTPS for all communications',
                'Implement proper authentication',
                'Keep dependencies updated',
                'Use environment variables for secrets',
                'Implement proper error handling',
              ].map((practice, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2563EB] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#F9FAFB]">{practice}</span>
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