'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowRight, Send, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'makekembav@gmail.com',
      href: 'mailto:makekembav@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+27 72 947 3009',
      href: 'tel:+27729473009',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Masia, Limpopo, South Africa',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Available for new projects',
      href: '#',
    },
  ];

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:makekembav@gmail.com', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/makekemba-vhutali', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/makekemba-cloud', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Makekembavhutal', color: 'hover:text-sky-500' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/27729473009', color: 'hover:text-green-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Mmuso.0', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/mmuso.0/', color: 'hover:text-pink-500' },
  ];

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
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            <span className="text-[#F9FAFB]">Get In </span>
            <span className="text-[#2563EB]">Touch</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative bg-[#000000] py-20 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-sm text-[#2563EB] font-semibold">Contact Information</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className={`p-8 rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 hover:bg-[#0B0F1A]/60 transition-all duration-300 transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isLoaded ? `${index * 50}ms` : '0ms' }}
                >
                  <Icon className="text-[#2563EB] mb-4" size={32} />
                  <p className="text-sm text-[#9CA3AF] mb-2">{info.title}</p>
                  <p className="text-lg font-semibold text-[#F9FAFB]">{info.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider Line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
          </div>

          {/* Section Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-sm text-[#2563EB] font-semibold">Send Message</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-[#F9FAFB]">Send me a </span>
                <span className="text-[#2563EB]">message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#F9FAFB] mb-3">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
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
                    rows={6}
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
                      <span>✓ Message Sent Successfully</span>
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
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-200 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-[#F9FAFB]">Let's </span>
                <span className="text-[#2563EB]">Connect</span>
              </h2>

              <p className="text-lg text-[#9CA3AF] mb-12 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a specific project in mind or just want to chat about potential collaboration, feel free to reach out!
              </p>

              {/* Social Links */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#F9FAFB] mb-6">Follow Me</h3>
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg border border-[#111827] text-[#9CA3AF] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 flex items-center justify-center ${social.color}`}
                        title={social.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-8 rounded-xl border border-[#2563EB]/30 bg-[#2563EB]/5">
                <h4 className="text-lg font-bold text-[#F9FAFB] mb-3">Response Time</h4>
                <p className="text-[#9CA3AF] leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to call or email directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider Line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0" style={{ width: '100%' }} />
          </div>

          {/* Section Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-sm text-[#2563EB] font-semibold">Maps Location</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-[#F9FAFB]">Find Me </span>
            <span className="text-[#2563EB]">Here</span>
          </h2>
          
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
      </section>

      <Footer />
    </div>
  );
}