'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Download, Briefcase, GraduationCap, Award, Code2, CheckCircle2 } from 'lucide-react';

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const workExperience = [
    {
      position: 'Senior Fullstack Developer',
      company: 'Tech Company Inc.',
      period: 'Jan 2023 - Present',
      description: 'Leading fullstack development team, architecting scalable applications, and mentoring junior developers.',
      achievements: [
        'Architected microservices infrastructure serving 100k+ users',
        'Improved application performance by 45% through optimization',
        'Mentored 3 junior developers in secure coding practices',
      ],
    },
    {
      position: 'Fullstack Developer',
      company: 'Digital Solutions LLC',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained production applications using modern tech stack.',
      achievements: [
        'Built 5+ production applications from scratch',
        'Implemented security best practices across all projects',
        'Reduced API response time by 60%',
      ],
    },
    {
      position: 'Junior Developer',
      company: 'Web Development Agency',
      period: 'Jan 2020 - May 2021',
      description: 'Started career learning fullstack development and building client projects.',
      achievements: [
        'Completed 15+ client projects',
        'Learned and mastered React and Node.js',
        'Contributed to open-source projects',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      highlights: ['First Class Honors', "Dean's List", 'Scholarship Recipient'],
    },
    {
      degree: 'Advanced Web Development Certification',
      institution: 'Online Platform',
      period: '2022 - 2023',
      highlights: ['Full Stack Track', '500+ Hours', 'Project-Based Learning'],
    },
  ];

  const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'],
    'Security': ['JWT Auth', 'OWASP', 'Encryption', 'RLS & RBAC', 'SQL Prevention', 'CORS'],
  };

  return (
    <div className="bg-[#000000]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[#000000] py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Resume</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Experienced fullstack developer with a proven track record of building secure, scalable web applications
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative bg-[#000000] py-8 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30"
            >
              <Download size={20} />
              Download PDF Resume
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold hover:bg-[#2563EB]/10 transition-all duration-300"
            >
              Print Resume
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#000000] py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Professional Summary */}
          <div className={`transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl font-bold text-[#F9FAFB] mb-6">Professional Summary</h2>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Dedicated fullstack developer with 4+ years of experience building secure, scalable, and performant web applications. 
              Proven expertise in modern frontend frameworks and backend technologies, with a strong focus on security best practices 
              and user experience. Passionate about clean code, continuous learning, and mentoring junior developers. Specialized in 
              architecting microservices, optimizing performance, and implementing enterprise-grade security measures.
            </p>
          </div>

          {/* Work Experience */}
          <div className={`transition-all duration-1000 delay-100 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold text-[#F9FAFB]">Work Experience</h2>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F9FAFB]">{job.position}</h3>
                      <p className="text-[#2563EB] font-semibold">{job.company}</p>
                    </div>
                    <span className="text-[#9CA3AF] text-sm font-semibold mt-2 sm:mt-0">{job.period}</span>
                  </div>
                  <p className="text-[#9CA3AF] mb-4">{job.description}</p>
                  <div className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#2563EB] flex-shrink-0 mt-1" size={18} />
                        <span className="text-[#F9FAFB]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold text-[#F9FAFB]">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#F9FAFB]">{edu.degree}</h3>
                      <p className="text-[#2563EB] font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-[#9CA3AF] text-sm font-semibold mt-2 sm:mt-0">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold text-[#F9FAFB]">Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`transition-all duration-1000 delay-400 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold text-[#F9FAFB]">Certifications & Awards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
                { title: 'OWASP Security Certified', issuer: 'OWASP Foundation', year: '2023' },
                { title: 'Top Developer Award', issuer: 'Tech Company Inc.', year: '2023' },
                { title: 'Performance Excellence', issuer: 'Digital Solutions LLC', year: '2022' },
              ].map((cert, index) => (
                <div key={index} className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                  <h4 className="text-lg font-bold text-[#F9FAFB] mb-2">{cert.title}</h4>
                  <p className="text-[#2563EB] text-sm font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-[#9CA3AF] text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-12 border-t border-[#111827] text-center">
            <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">Interested in working together?</h3>
            <p className="text-[#9CA3AF] mb-8">Get in touch to discuss your project or opportunities</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}