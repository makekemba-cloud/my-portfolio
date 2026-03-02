'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const moreRef = useRef<HTMLDivElement>(null);

  // Main navigation links - scroll to sections
  const mainLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Dropdown "More" links - actual pages
  const moreLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Education', href: '/education' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Security Lab', href: '/security-lab' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Tools', href: '/tools' },
  ];

  // Handle scroll to section
  const handleScrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }

    setMobileOpen(false);
  };

  const isActive = (id: string) => {
    return activeSection === id;
  };

  // Track which section is in view using scroll listener (more reliable)
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Find which section is currently in view
      let currentSection = 'hero';

      mainLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, mainLinks]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Don't show navbar on admin routes
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#111827] bg-[#000000]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleScrollToSection('hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#2563EB]/20">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-[#F9FAFB] font-bold text-base hidden sm:inline">
              Makekemba
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                  isActive(link.id)
                    ? 'text-[#2563EB]'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                }`}
              >
                {link.name}
                {isActive(link.id) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]" />
                )}
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 group ${
                  moreOpen
                    ? 'text-[#2563EB]'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                }`}
              >
                More
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#0B0F1A] border border-[#111827] rounded-xl shadow-2xl shadow-black/50 py-2">
                  {moreLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-[#111827] ${
                        pathname === link.href || pathname.startsWith(link.href)
                          ? 'text-[#2563EB] bg-[#111827]'
                          : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                      } ${index !== moreLinks.length - 1 ? 'border-b border-[#111827]/50' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Resume & Admin (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/resume"
              className="px-4 py-2 text-sm font-medium text-[#9CA3AF] border border-[#111827] rounded-lg hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
            >
              Resume
            </Link>
            <Link
              href="/admin/login"
              className="px-4 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/20 hover:shadow-[#2563EB]/40"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-[#111827]">
            <div className="flex flex-col gap-1 pt-4">
              {mainLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-left cursor-pointer ${
                    isActive(link.id)
                      ? 'text-[#2563EB] bg-[#111827]'
                      : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827]'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile More Section */}
              <div className="border-t border-[#111827] my-3 pt-3">
                <p className="px-4 py-2 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">More</p>
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 block ${
                      pathname === link.href || pathname.startsWith(link.href)
                        ? 'text-[#2563EB] bg-[#111827]'
                        : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="border-t border-[#111827] mt-3 pt-3 flex flex-col gap-2">
                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-center text-[#9CA3AF] border border-[#111827] rounded-lg hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
                >
                  Resume
                </Link>
                <Link
                  href="/admin/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-center text-white bg-[#2563EB] rounded-lg hover:bg-[#1d4ed8] transition-all duration-300"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}