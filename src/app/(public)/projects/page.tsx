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
        'A student support platform that connects learners with mentors, tutors, and educational resources through a centralized digital experience.',
      longDescription:
        'BigSmallInsights was developed to help students access academic support, mentorship opportunities, and structured learning resources in one place. The platform streamlines collaboration between learners, mentors, and tutors while providing an intuitive and accessible user experience. It focuses on empowering students through guidance, educational tools, and community-driven support.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155732.png',
      github: null,
      live: 'https://www.bigsmallinsights.co.za/',
      year: '2026',
      inProduction: false,
      metrics: { Users: 'Growing', Access: 'Role-Based', Platform: 'Live' },
    },

    {
      id: 2,
      title: 'Developer Portfolio',
      description:
        'A professional portfolio showcasing projects, technical expertise, and development experience through a modern and responsive interface.',
      longDescription:
        'This portfolio serves as the central hub for my work, highlighting projects, skills, and experience across web development. Built with a focus on performance, responsiveness, and user experience, it provides visitors with an interactive way to explore my work, technical capabilities, and ongoing projects.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155706.png',
      github: 'https://github.com/makekemba-cloud',
      live: 'https://makekembavhutali.co.za/',
      year: '2026',
      inProduction: false,
      metrics: { Design: 'Custom', Performance: 'Optimized', Status: 'Live' },
    },

    {
      id: 3,
      title: 'Sibaleka Nani Athletic Club (SNAC) System',
      description:
        'A digital membership and club management platform that streamlines athlete registration, member administration, and club operations.',
      longDescription:
        'The SNAC system was developed to modernize club administration by replacing manual processes with a centralized online platform. Athletes can register, manage their profiles, and interact with the club digitally, while administrators can efficiently oversee memberships and day-to-day operations. The platform improves efficiency, accessibility, and overall member experience.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/Screenshot 2026-03-06 155837.png',
      github: null,
      live: 'https://sibalekananiac.co.za',
      year: '2026',
      inProduction: false,
      metrics: { Members: 'Active', Operations: 'Digital', Status: 'Live' },
    },

    {
      id: 4,
      title: 'Let Us Heal',
      description:
        'A youth-focused non-profit platform dedicated to supporting young people through educational, emotional, financial, and social development initiatives.',
      longDescription:
        'Let Us Heal is a community-driven platform designed to empower and uplift young people facing various life challenges. The website provides access to information, support programs, opportunities, and resources that encourage personal growth and development. The project focuses on creating a welcoming digital space where youth can find guidance and support on their journey toward achieving their full potential.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'fullstack',
      image: '/images/letusheal.png',
      github: null,
      live: 'https://www.letusheal.co.za/',
      year: '2026',
      inProduction: true,
      metrics: { Impact: 'Youth Focused', Access: 'Community', Status: 'Live' },
    },

    {
      id: 5,
      title: 'Sizofakulwazi Foundation',
      description:
        'A non-profit organization website focused on community upliftment, education, empowerment, and sustainable social impact.',
      longDescription:
        'The Sizofakulwazi Foundation website was developed to showcase the foundation’s mission, programs, and community initiatives. The platform highlights projects aimed at supporting vulnerable individuals through education, vocational training, food assistance, and empowerment opportunities. Built with accessibility and engagement in mind, the website helps the organization communicate its impact and connect with donors, volunteers, and beneficiaries.',
      technologies: ['Next.js', 'React', 'TypeScript'],
      category: 'frontend',
      image: '/images/sizofakulwazi.png',
      github: null,
      live: 'https://sizofakulwazi-foundation.vercel.app/',
      year: '2026',
      inProduction: true,
      metrics: { Mission: 'Community', Programs: 'Multiple', Status: 'Live' },
    },
    {
      id: 6,
      title: 'Mmuso Code',
      description:
        'A modern software development company website showcasing digital services, custom software solutions, and innovative technology-driven products.',
      longDescription:
        'Mmuso Code is a professional business website developed to establish a strong digital presence for a modern software development company. The platform highlights the company’s services, expertise, and commitment to building scalable digital solutions for businesses, startups, and growing brands. Designed with a clean and professional user experience, the website communicates the company’s vision of transforming ideas into high-quality digital products while emphasizing innovation, performance, and long-term growth.',
      technologies: ['Vue.js','Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      category: 'frontend',
      image: '/images/mmusocode.png',
      github: null,
      live: 'https://www.mmusocode.co.za/',
      year: '2026',
      inProduction: false,
      metrics: {
        Industry: 'Software',
        Design: 'Modern',
        Status: 'Live',
      },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                        Currently in Development
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
