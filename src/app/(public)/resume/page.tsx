'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Download, Briefcase, GraduationCap, Award, Code2, CheckCircle2, ChevronDown } from 'lucide-react';

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const roleDocuments = {
    resume: {
      label: 'Role-Focused Resumes',
      roles: [
        { name: 'Junior Software Developer', file: 'Resume_Makekemba_Vhutali_Junior_Software_Developer.pdf' },
        { name: 'Data Analyst', file: 'Resume_Makekemba_Vhutali_Data_Analyst.pdf' },
        { name: 'Cybersecurity', file: 'Resume_Makekemba_Vhutali_Cyber-Security.pdf' },
        { name: 'IT Technician', file: 'Resume_Makekemba_Vhutali_IT_Technician.pdf' },
      ],
    },
    cv: {
      label: 'Role-Focused CVs',
      roles: [
        { name: 'Junior Software Developer', file: 'Makekemba_Vhutali_Junior_Software_Developer_CV.pdf' },
        { name: 'Data Analyst', file: 'Makekemba_Vhutali_Data_Analyst_CV.pdf' },
        { name: 'Cybersecurity', file: 'Makekemba_Vhutali_Cyber-Security_CV.pdf' },
        { name: 'IT Technician', file: 'Makekemba_Vhutali_IT_Technician_CV.pdf' },
      ],
    },
  };

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
      degree: 'Advanced Diploma in Information Technology',
      institution: 'Nelson Mandela University',
      period: '2025 - 2025',
      highlights: ['ASP.NET', 'JavaScript', 'Project Management', 'Cyber Security'],
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Nelson Mandela University',
      period: '2022 - 2024',
      highlights: ['Full Stack Development', 'Web Development', 'Database Management'],
    },
  ];

  const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'C#', 'ASP.NET'],
    'Tools & DevOps': ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'Linux'],
    'Security': ['JWT Auth', 'OWASP', 'Encryption', 'RLS & RBAC', 'SQL Prevention', 'Network Security'],
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
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-[#F9FAFB]">Resume & </span>
            <span className="text-[#2563EB]">CV</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Download my comprehensive resume or CV, or select a role-focused version tailored to your needs
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative bg-[#000000] py-12 border-b border-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <p className="text-[#9CA3AF] text-sm mb-8 text-center">Download my comprehensive resume and CV, or select a role-focused version</p>

          {/* Single Line Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Main Downloads - Center */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Resume-Makekemba Vhutali.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 whitespace-nowrap"
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="/Carriculum Vitae-Makekemba Vhutali.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold hover:bg-[#2563EB]/10 transition-all duration-300 whitespace-nowrap"
              >
                <Download size={18} />
                CV
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-[#111827]" />

            {/* Role-Focused Dropdowns - Right */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Resume by Role */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'resume' ? null : 'resume')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] rounded-lg text-sm font-medium hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <span>Resume</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === 'resume' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'resume' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-[#0B0F1A] border border-[#111827] rounded-lg shadow-2xl shadow-black/50 overflow-hidden z-10">
                    {roleDocuments.resume.roles.map((role, index) => (
                      <a
                        key={index}
                        href={`/${role.file}`}
                        download
                        className={`block px-4 py-2 text-[#F9FAFB] hover:bg-[#111827] transition-all duration-200 text-sm ${
                          index !== roleDocuments.resume.roles.length - 1 ? 'border-b border-[#111827]/50' : ''
                        }`}
                      >
                        {role.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* CV by Role */}
              <div className="relative" data-dropdown>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'cv' ? null : 'cv')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] rounded-lg text-sm font-medium hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <span>CV</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === 'cv' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'cv' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-[#0B0F1A] border border-[#111827] rounded-lg shadow-2xl shadow-black/50 overflow-hidden z-10">
                    {roleDocuments.cv.roles.map((role, index) => (
                      <a
                        key={index}
                        href={`/${role.file}`}
                        download
                        className={`block px-4 py-2 text-[#F9FAFB] hover:bg-[#111827] transition-all duration-200 text-sm ${
                          index !== roleDocuments.cv.roles.length - 1 ? 'border-b border-[#111827]/50' : ''
                        }`}
                      >
                        {role.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
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
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                <span className="text-sm text-[#2563EB] font-semibold">Professional Overview</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#F9FAFB]">Professional </span>
              <span className="text-[#2563EB]">Summary</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Dedicated fullstack developer with expertise in modern web technologies and a strong focus on security best practices. 
              Experienced in building scalable applications using React, Next.js, Node.js, and ASP.NET. Proficient in database management 
              with PostgreSQL and SQL Server. Passionate about clean code, continuous learning, and delivering high-quality solutions. 
              Specialized in full-stack development, web security, and cybersecurity fundamentals.
            </p>
          </div>

          {/* Work Experience */}
          <div className={`transition-all duration-1000 delay-100 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Divider Line */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                <span className="text-sm text-[#2563EB] font-semibold">Work Experience</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold">
                <span className="text-[#F9FAFB]">Work </span>
                <span className="text-[#2563EB]">Experience</span>
              </h2>
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
            {/* Divider Line */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                <span className="text-sm text-[#2563EB] font-semibold">Education</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold">
                <span className="text-[#F9FAFB]">Education</span>
              </h2>
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
            {/* Divider Line */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                <span className="text-sm text-[#2563EB] font-semibold">Technical Skills</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold">
                <span className="text-[#F9FAFB]">Skills</span>
              </h2>
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
            {/* Divider Line */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                <span className="text-sm text-[#2563EB] font-semibold">Certifications</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Award className="text-[#2563EB]" size={28} />
              <h2 className="text-3xl font-bold">
                <span className="text-[#F9FAFB]">Certifications & </span>
                <span className="text-[#2563EB]">Awards</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'CCNAv7: Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2023' },
                { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2022' },
                { title: 'Advanced Diploma in IT', issuer: 'Nelson Mandela University', year: '2025' },
                { title: 'Diploma in Information Technology', issuer: 'Nelson Mandela University', year: '2024' },
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
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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