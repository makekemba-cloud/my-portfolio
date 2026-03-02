'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with secure payments, inventory management, and real-time order tracking. Built with a focus on performance and user experience.',
      longDescription: 'A complete e-commerce platform featuring product catalog, shopping cart, secure payment processing with Stripe, order management, and admin dashboard. Implements Redis caching for performance and PostgreSQL for reliable data storage.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
      category: 'fullstack',
      image: 'bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2024',
      metrics: { users: '5K+', performance: '98%' },
    },
    {
      id: 2,
      title: 'Security Audit Tool',
      description: 'Automated security scanning platform that identifies vulnerabilities in web applications. Includes detailed reporting and remediation suggestions.',
      longDescription: 'An automated security scanning tool that analyzes web applications for common vulnerabilities including XSS, SQL injection, CSRF, and more. Provides detailed reports with remediation suggestions and compliance tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Docker'],
      category: 'security',
      image: 'bg-gradient-to-br from-[#f59e0b]/20 to-[#fbbf24]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2024',
      metrics: { vulnerabilities: '500+', accuracy: '97%' },
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Live data visualization dashboard for monitoring application metrics. Features real-time updates, custom charts, and exportable reports.',
      longDescription: 'A comprehensive analytics dashboard with real-time data updates using WebSockets. Features custom D3.js visualizations, exportable reports, and historical data analysis.',
      technologies: ['Next.js', 'WebSockets', 'PostgreSQL', 'D3.js', 'Supabase'],
      category: 'fullstack',
      image: 'bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2023',
      metrics: { datapoints: '1M+', latency: '<100ms' },
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'RESTful API for task management with advanced filtering, notifications, and team collaboration features.',
      longDescription: 'A robust backend API for task management with JWT authentication, role-based access control, WebSocket notifications, and comprehensive API documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'WebSockets'],
      category: 'backend',
      image: 'bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2023',
      metrics: { requests: '10M+', uptime: '99.9%' },
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      longDescription: 'A stunning portfolio website built with Next.js, featuring smooth animations, optimized images, and SEO best practices. Designed for maximum impact and conversions.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      image: 'bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2023',
      metrics: { score: '98', visitors: '10K+' },
    },
    {
      id: 6,
      title: 'Machine Learning Model API',
      description: 'Production-ready API for serving ML models with caching, rate limiting, and comprehensive monitoring.',
      longDescription: 'A scalable API service for deploying and serving machine learning models with built-in caching, rate limiting, and comprehensive monitoring dashboards.',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'Docker', 'AWS'],
      category: 'backend',
      image: 'bg-gradient-to-br from-[#06b6d4]/20 to-[#22d3ee]/20',
      github: 'https://github.com',
      live: 'https://example.com',
      year: '2023',
      metrics: { models: '50+', accuracy: '96%' },
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'security', label: 'Security' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">My Projects</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in fullstack development, security, and performance optimization
          </p>
        </div>
      </section>

      {/* Filter Section */}
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

      {/* Projects Grid */}
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
                {/* Project Image */}
                <div className={`h-56 ${project.image} group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-3 flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-[#F9FAFB]">{project.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                  {/* Metrics */}
                  <div className="mb-6 flex gap-4 py-4 border-y border-[#111827]">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-[#9CA3AF] uppercase tracking-wide">{key}</p>
                        <p className="text-lg font-bold text-[#2563EB]">{value}</p>
                      </div>
                    ))}
                  </div>

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
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#111827] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
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