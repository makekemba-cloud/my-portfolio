'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const highlights = [
    ' 5+ years of professional development experience',
    'Specialized in secure, scalable fullstack applications',
    'Passionate about clean code and best practices',
    'Mentor and code reviewer for junior developers',
    'Active contributor to open source projects',
  ];

  return (
    <div className="bg-[#000000]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#000000] py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">About Me</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Learn more about my journey, expertise, and what drives my passion for building exceptional web applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <h2 className="text-4xl font-bold text-[#F9FAFB] mb-8">My Story</h2>
              
              <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
                I started my journey into web development over 5 years ago with a simple goal: to build applications that are not just functional, but delightful to use. Since then, I've worked on projects ranging from small startups to enterprise applications, always maintaining a focus on quality, security, and user experience.
              </p>

              <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
                What drives me is the intersection of technical excellence and creative problem-solving. I believe that great code is not just about making things work—it's about making them work beautifully, securely, and efficiently. Whether I'm architecting a new system or optimizing existing code, I bring a methodical, thoughtful approach to every challenge.
              </p>

              <p className="text-lg text-[#9CA3AF] mb-10 leading-relaxed">
                Beyond coding, I'm passionate about sharing knowledge. I mentor junior developers, contribute to open-source projects, and stay continuously learning about emerging technologies and best practices in the industry.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30"
              >
                Let's Connect
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Right Content - Highlights */}
            <div className={`transition-all duration-1000 delay-200 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300"
                  >
                    <CheckCircle2 className="text-[#2563EB] flex-shrink-0 mt-1" size={24} />
                    <span className="text-[#F9FAFB] font-medium text-lg">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40">
                  <div className="text-3xl font-bold text-[#2563EB] mb-2">50+</div>
                  <p className="text-[#9CA3AF]">Projects Completed</p>
                </div>
                <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40">
                  <div className="text-3xl font-bold text-[#2563EB] mb-2">30+</div>
                  <p className="text-[#9CA3AF]">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#F9FAFB] mb-16 text-center">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Security First',
                description: 'Security is not an afterthought. Every line of code is written with security best practices in mind.',
              },
              {
                title: 'Performance Matters',
                description: 'Building fast is building right. I optimize for speed and efficiency at every step of development.',
              },
              {
                title: 'User Focused',
                description: 'Great products are built with users in mind. User experience guides every design decision.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">{value.title}</h3>
                <p className="text-[#9CA3AF] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}