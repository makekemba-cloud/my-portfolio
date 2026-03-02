'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';

export default function SkillsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      category: 'Frontend',
      description: 'Building beautiful, interactive user interfaces',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 94 },
        { name: 'JavaScript', level: 96 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Redux/Context', level: 90 },
      ],
    },
    {
      category: 'Backend',
      description: 'Creating robust, scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 94 },
        { name: 'GraphQL', level: 80 },
        { name: 'Prisma', level: 88 },
        { name: 'Supabase', level: 90 },
      ],
    },
    {
      category: 'Tools & Platforms',
      description: 'Leveraging modern tools for efficient development',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Vercel', level: 94 },
        { name: 'Supabase', level: 90 },
        { name: 'Firebase', level: 88 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 87 },
      ],
    },
    {
      category: 'Security & Best Practices',
      description: 'Implementing industry-standard security practices',
      skills: [
        { name: 'JWT Authentication', level: 92 },
        { name: 'OWASP Security', level: 88 },
        { name: 'Data Encryption', level: 85 },
        { name: 'SQL Injection Prevention', level: 92 },
        { name: 'CORS & Headers', level: 90 },
        { name: 'Testing (Jest/Cypress)', level: 85 },
        { name: 'RBAC & RLS', level: 88 },
        { name: 'SSL/TLS', level: 87 },
      ],
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Skills & Expertise</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies to bring your vision to life
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isLoaded ? `${categoryIndex * 100}ms` : '0ms' }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-[#F9FAFB] mb-3">{category.category}</h2>
                  <p className="text-lg text-[#9CA3AF]">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="p-6 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[#F9FAFB] font-semibold">{skill.name}</span>
                          <span className="text-sm text-[#2563EB] font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-[#111827] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isLoaded ? `${skill.level}%` : '0%',
                              transitionDelay: isLoaded ? `${(categoryIndex * 100) + (skillIndex * 30)}ms` : '0ms',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#F9FAFB] mb-6">Ready to see these skills in action?</h2>
          <p className="text-lg text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
            Check out my projects to see how I apply these skills to build amazing applications.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}