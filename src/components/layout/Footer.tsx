'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight, MessageCircle, Facebook, Instagram, Music2, YoutubeIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:makekembav@gmail.com', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/makekemba-vhutali', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/makekemba-cloud', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Makekembavhutal', color: 'hover:text-sky-500' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/27729473009', color: 'hover:text-green-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Mmuso.0', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/mmuso.0/', color: 'hover:text-pink-500' },
    { name: 'YouTube',   icon: YoutubeIcon,  href: 'https://www.youtube.com/@makekembavhutali6820', color: 'hover:text-red-600'   },
    { name: 'TikTok',    icon: Music2 ,   href: 'https://www.tiktok.com/@makekemba_vhutali',      color: 'hover:text-black'     },
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
    <footer className="border-t border-[#111827] bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
             
              <span className="font-bold text-lg text-[#F9FAFB]"> <span className="text-[#2563EB]">Makekemba Vhutali</span></span>
            </div>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              Fullstack developer specializing in secure, modern web applications with a focus on performance and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider text-[#F9FAFB]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9CA3AF] transition-all duration-300 flex items-center gap-2 group hover:text-[#2563EB]"
                  >
                    <span className="w-1 h-1 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider text-[#F9FAFB]">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9CA3AF] transition-all duration-300 flex items-center gap-2 group hover:text-[#2563EB]"
                  >
                    <span className="w-1 h-1 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-sm mb-8 uppercase tracking-wider text-[#F9FAFB]">Connect</h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 flex items-center justify-center transition-all duration-300 ${social.color}`}
                title={social.name}
              >
                <Icon size={20} />
              </a>
            );
              })}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#2563EB] border border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-300 shadow-lg shadow-[#2563EB]/20 hover:shadow-[#2563EB]/40"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-[#111827]" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-sm text-[#9CA3AF]">
            © {currentYear} Makekemba Vhutali. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm text-[#9CA3AF] transition-all duration-300 hover:text-[#2563EB]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-[#9CA3AF] transition-all duration-300 hover:text-[#2563EB]"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Credit Line */}
        <div className="text-center border-t border-[#111827] pt-8">
          <p className="text-xs text-[#6B7280]">
            Designed & built by{' '}
            <a
              href="https://mmusocode.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:text-[#3B82F6] transition-colors duration-300 font-semibold"
            >
              MmusoCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}