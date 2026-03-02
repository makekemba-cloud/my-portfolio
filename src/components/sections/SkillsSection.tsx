'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 94 },
        { name: 'JavaScript', level: 96 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 94 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Vercel', level: 94 },
        { name: 'Supabase', level: 90 },
        { name: 'Firebase', level: 88 },
      ],
    },
    {
      category: 'Security & Best Practices',
      skills: [
        { name: 'JWT Authentication', level: 92 },
        { name: 'OWASP Security', level: 88 },
        { name: 'Data Encryption', level: 85 },
        { name: 'SQL Injection Prevention', level: 92 },
        { name: 'CORS & Headers', level: 90 },
        { name: 'Testing (Jest/Cypress)', level: 85 },
      ],
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
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
            <span className="text-sm text-[#2563EB] font-semibold">Technical Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] mb-6">Skills & Expertise</h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies to bring your vision to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isLoaded ? `${categoryIndex * 100}ms` : '0ms' }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-8">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[#F9FAFB] font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isLoaded ? `${skill.level}%` : '0%',
                            transitionDelay: isLoaded ? `${(categoryIndex * 100) + (skillIndex * 50)}ms` : '0ms',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-[#111827] text-center">
          <p className="text-[#9CA3AF] text-lg mb-6">Want to see these skills in action?</p>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            Check Out Projects
          </a>
        </div>
      </div>
    </section>
  );
}