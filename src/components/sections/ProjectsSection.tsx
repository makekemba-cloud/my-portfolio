'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Github, ExternalLink, Wrench } from 'lucide-react';

export default function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    
    {
      title: 'BigSmallInsights',
      description:
        'A student support platform connecting learners with mentors, tutors, and structured resources. Features Google OAuth, role-based access control, Sentry error monitoring, and custom activity logging.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Google OAuth', 'Sentry'],
      image: '/images/Screenshot 2026-03-06 155732.png',
      github: null,
      live: 'https://www.bigsmallinsights.co.za/',
      inProduction: false,
    },
    {
      title: 'Developer Portfolio',
      description:
        'A modern, responsive portfolio built with Next.js to showcase projects, technical skills, and development experience. Features animated project cards, dynamic filtering, and sections for blogs and mini apps.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '/images/Screenshot 2026-03-06 155706.png',
      github: 'https://github.com/makekemba-cloud',
      live: 'https://makekembav-portfolio.vercel.app/',
      inProduction: false,
    },
    {
      title: 'SNAC Member System',
      description:
        'A full-stack athletic club management platform with member registration, admin approvals, role-based access control, and athlete profiles. Built with Supabase RLS enforced at the database layer — not just the UI.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      image: '/images/Screenshot 2026-03-06 155837.png',
      github: null,
      live: 'https://sibalekananiac.co.za',
      inProduction: true,
    },
  ];

  return (
    <section id="projects" className="relative bg-[#000000] py-28 sm:py-36 border-b border-[#111827] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
            <span className="text-sm text-[#2563EB] font-semibold">Featured Work</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] mb-6">Recent <span className="text-[#2563EB]">Projects</span></h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in fullstack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-[#111827] bg-[#0B0F1A]/40 overflow-hidden hover:border-[#2563EB]/50 transition-all duration-500 transform flex flex-col ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-[#0B0F1A] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Under Production banner */}
                {project.inProduction && (
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-2 px-4 bg-[#f59e0b] backdrop-blur-sm">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000]/40 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000]/60" />
                    </span>
                    <Wrench size={12} className="text-[#000000] shrink-0" />
                    <span className="text-[#000000] text-xs font-bold tracking-widest uppercase">
                      Currently in Production
                    </span>
                    <Wrench size={12} className="text-[#000000] shrink-0" />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#F9FAFB] mb-3">{project.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[#111827]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}