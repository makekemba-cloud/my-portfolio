'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, Wrench } from 'lucide-react';

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded]             = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
   
    {
      id: 1,
      title: 'BigSmallInsights',
      description:
        'A student support platform connecting learners with mentors, tutors, and educational resources. Features Google OAuth, role-based access control, Sentry error monitoring, and a custom activity logging API.',
      longDescription:
        'BigSmallInsights is a full-stack web platform designed to help students access academic support, mentorship, and structured learning resources in a single centralized system. The platform connects students with mentors and tutors while providing tools that support collaboration and academic guidance. Authentication is handled via Google OAuth with middleware-based RBAC protecting all routes. Sentry is integrated for real-time production error monitoring, and a custom /api/auth/log-activity endpoint tracks important user actions for improved system visibility. The platform demonstrates real-world SaaS-level practices: authentication systems, middleware authorization, monitoring, and database-driven architecture.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Google OAuth', 'Sentry', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155732.png',
      github: null,
      live: 'https://www.bigsmallinsights.co.za/',
      year: '2026',
      inProduction: false,
      metrics: { Auth: 'OAuth', Monitoring: 'Sentry', Roles: 'RBAC' },
    },
    {
      id: 2,
      title: 'Developer Portfolio',
      description:
        'A modern, responsive developer portfolio built with Next.js to showcase projects, technical skills, and development experience. Features animated cards, dynamic project filtering, blog section, and mini apps.',
      longDescription:
        'This portfolio is the central hub for my development work — built not just to look good, but to demonstrate frontend and full-stack skills in practice. Designed with a dark, professional aesthetic and smooth entry animations. The Projects section dynamically filters by category and renders project cards with tech stacks, metrics, GitHub links, and live demos. Built with component-based architecture for scalability, optimized images, SEO metadata, and deployed on Vercel with continuous deployment via GitHub.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155706.png',
      github: 'https://github.com/makekemba-cloud',
      live: 'https://makekembav-portfolio.vercel.app/',
      year: '2026',
      inProduction: false,
      metrics: { Design: 'Custom', Deploy: 'Vercel', Perf: '98+' },
    },
     {
      id: 3,
      title: 'Sibaleka Nani Athletic Club (SNAC) System',
      description:
        'A full-stack athletic club management platform for Sibaleka Nani Athletic Club. Handles member registration, admin approvals, athlete profiles, and club operations through a centralized, secure dashboard.',
      longDescription:
        'The SNAC system replaces manual spreadsheets and phone-based admin with a fully digital membership platform. Members register and complete detailed athlete profiles including SA ID, race demographics, athlete category, experience level, residential address, and next-of-kin information. A PostgreSQL trigger auto-generates unique membership numbers (SNAC-YYYY-XXXXX) on signup. Admins approve, suspend, or manage all members with a full audit trail. Security is enforced at three layers: Supabase Auth, PostgreSQL Row Level Security policies, and Next.js middleware — not just in the UI.',
      technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155837.png',
      github: null,
      live: 'https://sibalekananiac.co.za',
      year: '2026',
      inProduction: true,
      metrics: { Members: 'Live', Security: 'RLS', Stack: 'Full' },
    },
  ];

  const categories = [
    { value: 'all',      label: 'All Projects' },
    { value: 'fullstack',label: 'Fullstack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend',  label: 'Backend' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#000000]">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#000000] py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">My Projects</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Real-world platforms built with modern full-stack technologies — from athletic club management to student support systems
          </p>
        </div>
      </section>

      {/* ── Filter ────────────────────────────────────────────── */}
      <section className="relative bg-[#000000] py-12 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                    : 'border border-[#111827] text-[#9CA3AF] hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className="text-center text-[#9CA3AF] mt-6">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────────────── */}
      <section className="relative bg-[#000000] py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-xl border border-[#111827] bg-[#0B0F1A]/40 overflow-hidden hover:border-[#2563EB]/50 transition-all duration-500 flex flex-col ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isLoaded ? `${index * 100}ms` : '0ms' }}
              >
                {/* Screenshot image */}
                <div className="h-56 overflow-hidden bg-[#0B0F1A] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Year badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-[#2563EB] bg-[#000000]/80 border border-[#2563EB]/30 rounded-full backdrop-blur-sm">
                    {project.year}
                  </span>
                  {/* Under Production banner */}
                  {project.inProduction && (
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-2 px-4 bg-[#f59e0b] backdrop-blur-sm">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000]/40 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000]/60" />
                      </span>
                      <Wrench size={13} className="text-[#000000] shrink-0" />
                      <span className="text-[#000000] text-xs font-bold tracking-widest uppercase">
                        Currently in Production
                      </span>
                      <Wrench size={13} className="text-[#000000] shrink-0" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3">{project.title}</h3>

                  {/* Short description */}
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Long description */}
                  <p className="text-[#6B7280] text-xs leading-relaxed mb-6 flex-grow">{project.longDescription}</p>

                  {/* Metrics */}
                  <div className="mb-6 flex gap-6 py-4 border-y border-[#111827]">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">{key}</p>
                        <p className="text-base font-bold text-[#2563EB]">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
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
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#3B82F6] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-[#111827]">
            <p className="text-[#9CA3AF] text-lg mb-8 font-medium">Have an interesting project in mind?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30"
            >
              Start a Conversation
              <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}