'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowRight, Send, MessageCircle, Facebook, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:makekembav@gmail.com', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-500' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/27729473009', color: 'hover:text-green-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
  ];

  return (
    <section id="contact" className="relative bg-[#000000] py-28 sm:py-36 border-b border-[#111827] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
            <span className="text-sm text-[#2563EB] font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F9FAFB] mb-6">Let's Work Together</h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50"
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-500 font-medium">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}

              {/* Spacing before Connect section */}
              <div className="h-8" />

              {/* Social Links / Connect */}
              <div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6">Connect</h3>
                <div className="grid grid-cols-7 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg border border-[#111827] text-[#9CA3AF] transition-all duration-300 hover:border-[#2563EB] hover:bg-[#2563EB]/5 flex items-center justify-center ${social.color}`}
                        title={social.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="space-y-8">
              {/* Quick Info */}
              <div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6">Quick Links</h3>
                <div className="space-y-4">
                  <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                    <p className="text-sm text-[#9CA3AF] mb-2">Email</p>
                    <a
                      href="mailto:makekembav@gmail.com"
                      className="text-lg font-semibold text-[#F9FAFB] hover:text-[#2563EB] transition-colors duration-300 break-all"
                    >
                      makekembav@gmail.com
                    </a>
                  </div>
                  <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                    <p className="text-sm text-[#9CA3AF] mb-2">Phone Number</p>
                    <p className="text-lg font-semibold text-[#F9FAFB]">+27 72 947 3009</p>
                  </div>
                  <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                    <p className="text-sm text-[#9CA3AF] mb-2">Location</p>
                    <p className="text-lg font-semibold text-[#F9FAFB]">Masia, Limpopo, South Africa</p>
                  </div>
                  <div className="p-6 rounded-lg border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 transition-all duration-300">
                    <p className="text-sm text-[#9CA3AF] mb-2">Availability</p>
                    <p className="text-lg font-semibold text-[#F9FAFB]">Available for new projects</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-xl border border-[#2563EB]/30 bg-[#2563EB]/5">
                <h4 className="text-lg font-bold text-[#F9FAFB] mb-3">Ready to start?</h4>
                <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:text-[#3B82F6] transition-colors duration-300"
                >
                  Schedule a call
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[#111827] my-12" />

        {/* Google Map - Full Width */}
        <div>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
              <span className="text-sm text-[#2563EB] font-semibold">Maps Location</span>
            </div>
          </div>
          
          <div className="rounded-lg border border-[#111827] overflow-hidden h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.9946888039303!2d30.30841997509711!3d-23.18999477905678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec5d31484f30f49%3A0xf221773a72793c82!2s341%20Makekemba!5e1!3m2!1sen!2sza!4v1772526723007!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}