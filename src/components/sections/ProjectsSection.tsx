'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with secure payments, inventory management, and real-time order tracking. Built with a focus on performance and user experience.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      image: 'bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/20',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Security Audit Tool',
      description: 'Automated security scanning platform that identifies vulnerabilities in web applications. Includes detailed reporting and remediation suggestions.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      image: 'bg-gradient-to-br from-[#f59e0b]/20 to-[#fbbf24]/20',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Live data visualization dashboard for monitoring application metrics. Features real-time updates, custom charts, and exportable reports.',
      technologies: ['Next.js', 'WebSockets', 'PostgreSQL', 'D3.js', 'Supabase'],
      image: 'bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20',
      github: 'https://github.com',
      live: 'https://example.com',
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
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] mb-6">Recent Projects</h2>
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
              <div className={`h-48 ${project.image} group-hover:opacity-80 transition-opacity duration-300`} />

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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                    title="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
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