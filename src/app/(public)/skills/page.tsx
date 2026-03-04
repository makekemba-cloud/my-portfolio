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
      category: 'Programming & Web Development',
      description: 'Full-stack development with modern and traditional technologies',
      subcategories: [
        {
          name: 'Backend Languages & Frameworks',
          skills: ['C#', 'ASP.NET', 'ASP.NET Core', 'Python', 'Java', 'Node.js', 'Express', 'PHP'],
        },
        {
          name: 'Frontend Languages & Frameworks',
          skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'jQuery', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
        },
        {
          name: 'Databases & ORM',
          skills: ['SQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Entity Framework', 'Dapper', 'Prisma'],
        },
        {
          name: 'APIs & Protocols',
          skills: ['REST APIs', 'GraphQL', 'WebSockets'],
        },
      ],
    },
    {
      category: 'Data Analysis & Science',
      description: 'Data processing, analysis, and visualization techniques',
      subcategories: [
        {
          name: 'Languages & Libraries',
          skills: ['Python', 'Pandas', 'NumPy'],
        },
        {
          name: 'Tools & Environments',
          skills: ['Anaconda', 'Jupyter Notebook'],
        },
        {
          name: 'Analysis Techniques',
          skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)'],
        },
      ],
    },
    {
      category: 'Cybersecurity & Ethical Testing',
      description: 'Security testing and penetration testing fundamentals',
      subcategories: [
        {
          name: 'Tools & Platforms',
          skills: ['Kali Linux', 'Aircrack-ng'],
        },
        {
          name: 'Testing & Vulnerabilities',
          skills: ['SQL Injection Testing', 'MITM Attacks', 'Website/Application Vulnerability Testing', 'Penetration Testing Basics'],
        },
        {
          name: 'Security Principles',
          skills: ['Network Security Fundamentals', 'Information Security Principles', 'OWASP Security', 'Data Encryption', 'SSL/TLS'],
        },
        {
          name: 'Authentication & Authorization',
          skills: ['JWT Authentication', 'OAuth', 'RBAC & RLS', 'Input Validation'],
        },
      ],
    },
    {
      category: 'Project Management',
      description: 'Managing projects with industry-standard methodologies',
      subcategories: [
        {
          name: 'Methodologies',
          skills: ['Agile Methodologies', 'Scrum', 'SDLC', 'Project Planning'],
        },
        {
          name: 'Documentation & Planning',
          skills: ['Documentation', 'Risk Management Techniques'],
        },
        {
          name: 'Microsoft Office Suite',
          skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Access', 'Microsoft Teams'],
        },
      ],
    },
    {
      category: 'Tools & Platforms',
      description: 'Development and deployment tools',
      subcategories: [
        {
          name: 'IDEs & Editors',
          skills: ['Visual Studio', 'VS Code', 'SQL Server Management Studio'],
        },
        {
          name: 'Version Control & Collaboration',
          skills: ['GitHub', 'Git'],
        },
        {
          name: 'Cloud & Deployment',
          skills: ['AWS', 'Vercel', 'Supabase', 'Firebase', 'Docker', 'CI/CD'],
        },
        {
          name: 'Utilities & Development Tools',
          skills: ['Kali Linux', 'Linux', 'Postman', 'npm'],
        },
      ],
    },
    {
      category: 'Soft Skills',
      description: 'Professional and interpersonal competencies',
      subcategories: [
        {
          name: 'Core Competencies',
          skills: ['Leadership', 'Planning', 'Supervision', 'Teamwork', 'Problem Solving', 'Communication'],
        },
      ],
    },
    {
      category: 'Languages',
      description: 'Languages proficiency and communication abilities',
      subcategories: [
        {
          name: 'Fluent Languages',
          skills: ['English', 'Xitsonga', 'Tshivenda'],
        },
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
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-[#F9FAFB]">Skills & </span>
            <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Expertise</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies to bring your vision to life
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => {
              // Handle both "&" and single word categories
              let firstPart = category.category;
              let lastWord = '';
              
              if (category.category.includes('&')) {
                const categoryWords = category.category.split('&');
                lastWord = categoryWords[1].trim();
                firstPart = categoryWords[0].trim() + ' & ';
              } else {
                // For single word categories like "Project Management"
                const words = category.category.split(' ');
                if (words.length > 1) {
                  lastWord = words[words.length - 1];
                  firstPart = words.slice(0, -1).join(' ') + ' ';
                } else {
                  firstPart = category.category;
                }
              }
              
              return (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isLoaded ? `${categoryIndex * 100}ms` : '0ms' }}
              >
                {/* Divider Line */}
                {categoryIndex > 0 && (
                  <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
                  </div>
                )}

                {/* Category Badge */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                    <span className="text-sm text-[#2563EB] font-semibold">{category.category}</span>
                  </div>
                </div>

                {/* Category Heading with Blue Last Word */}
                <div className="mb-4">
                  <h2 className="text-4xl font-bold mb-3">
                    <span className="text-[#F9FAFB]">{firstPart}</span>
                    {lastWord && (
                      <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">{lastWord}</span>
                    )}
                  </h2>
                  <p className="text-lg text-[#9CA3AF]">{category.description}</p>
                </div>

                {/* Subcategories */}
                <div className="space-y-10">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">{subcategory.name}</h3>
                      <div className="flex flex-wrap gap-4">
                        {subcategory.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-5 py-3 text-sm rounded-full border border-[#2563EB]/40 bg-[#0B0F1A]/60 text-[#3B82F6] font-medium hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 transform ${
                              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                            style={{ transitionDelay: isLoaded ? `${(categoryIndex * 100) + (subIndex * 50) + (skillIndex * 15)}ms` : '0ms' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
            })}
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50"
          >
            View My Projects
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}