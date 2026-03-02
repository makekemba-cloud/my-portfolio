'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Email', href: 'mailto:your-email@example.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Security Lab', href: '/security-lab' },
    { name: 'Tools', href: '/tools' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Skills', href: '/skills' },
  ];

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      backgroundColor: 'var(--background)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Makekemba</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Fullstack developer specializing in secure, modern web applications with a focus on performance and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 flex items-center gap-2 group"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 flex items-center gap-2 group"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Connect</h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      borderWidth: '1px',
                      borderColor: 'var(--border)',
                      color: 'var(--text-secondary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                borderWidth: '1px',
                borderColor: 'var(--primary)',
                color: 'var(--primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12" style={{ borderTop: '1px solid var(--border)' }} />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} Makekemba Vhutali. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}