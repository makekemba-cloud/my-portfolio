'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Wrench, Code2, Database, Zap, ExternalLink } from 'lucide-react';

export default function ToolsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toolCategories = [
    {
      category: 'Development Tools',
      icon: Code2,
      tools: [
        { name: 'VS Code', description: 'Primary code editor', link: '#' },
        { name: 'Git', description: 'Version control system', link: '#' },
        { name: 'Docker', description: 'Containerization platform', link: '#' },
        { name: 'Postman', description: 'API testing tool', link: '#' },
      ],
    },
    {
      category: 'Database Tools',
      icon: Database,
      tools: [
        { name: 'PostgreSQL', description: 'Primary database', link: '#' },
        { name: 'MongoDB', description: 'NoSQL database', link: '#' },
        { name: 'DBeaver', description: 'Database client', link: '#' },
        { name: 'Redis', description: 'Caching layer', link: '#' },
      ],
    },
    {
      category: 'Performance Tools',
      icon: Zap,
      tools: [
        { name: 'Lighthouse', description: 'Performance auditing', link: '#' },
        { name: 'WebPageTest', description: 'Speed testing', link: '#' },
        { name: 'New Relic', description: 'Application monitoring', link: '#' },
        { name: 'Sentry', description: 'Error tracking', link: '#' },
      ],
    },
    {
      category: 'Deployment Tools',
      icon: Wrench,
      tools: [
        { name: 'Vercel', description: 'Frontend deployment', link: '#' },
        { name: 'AWS', description: 'Cloud infrastructure', link: '#' },
        { name: 'GitHub Actions', description: 'CI/CD pipeline', link: '#' },
        { name: 'Netlify', description: 'Hosting platform', link: '#' },
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Tools & Technologies</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            The tools and technologies I use in my daily development workflow
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {toolCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={catIndex}
                  className={`transition-all duration-1000 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${catIndex * 100}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <Icon className="text-[#3B82F6]" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#F9FAFB]">{category.category}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.tools.map((tool, toolIndex) => (
                      <a
                        key={toolIndex}
                        href={tool.link}
                        className="group p-6 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 hover:bg-[#0B0F1A]/60 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-[#F9FAFB] group-hover:text-[#2563EB] transition-colors">
                            {tool.name}
                          </h3>
                          <ExternalLink className="text-[#9CA3AF] group-hover:text-[#2563EB] transition-colors opacity-0 group-hover:opacity-100" size={18} />
                        </div>
                        <p className="text-[#9CA3AF] text-sm">{tool.description}</p>
                      </a>
                    ))}
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