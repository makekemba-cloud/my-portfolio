'use client';

import Navigation from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState, useEffect } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Secure Web Applications: A Complete Guide',
      excerpt: 'Learn the essential practices for building secure web applications from the ground up.',
      date: 'March 2024',
      tags: ['Security', 'Best Practices', 'Tutorial'],
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Next.js Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize your Next.js applications for maximum performance.',
      date: 'February 2024',
      tags: ['Next.js', 'Performance', 'Optimization'],
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'React Server Components: The Future of Web Development',
      excerpt: 'Explore how React Server Components are changing the landscape of modern web development.',
      date: 'January 2024',
      tags: ['React', 'Server Components', 'Frontend'],
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Understanding TypeScript Generics',
      excerpt: 'Master TypeScript generics to write more flexible and reusable code.',
      date: 'December 2023',
      tags: ['TypeScript', 'Advanced', 'Tutorial'],
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'GraphQL vs REST: Making the Right Choice',
      excerpt: 'Compare GraphQL and REST APIs to determine which is best for your project.',
      date: 'November 2023',
      tags: ['API Design', 'Architecture', 'Comparison'],
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Database Indexing Strategies for Performance',
      excerpt: 'Learn how to effectively use database indexes to improve query performance.',
      date: 'October 2023',
      tags: ['Database', 'Performance', 'PostgreSQL'],
      readTime: '5 min read',
    },
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
          <h1 className="text-6xl sm:text-7xl font-bold text-[#F9FAFB] mb-6">Blog</h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Articles, tutorials, and insights on web development and technology
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative bg-[#000000] py-28 border-b border-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group rounded-xl border border-[#111827] bg-[#0B0F1A]/40 hover:border-[#2563EB]/50 hover:bg-[#0B0F1A]/60 transition-all duration-500 p-8 flex flex-col transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isLoaded ? `${index * 50}ms` : '0ms' }}
              >
                {/* Date */}
                <div className="flex items-center gap-2 mb-4 text-[#9CA3AF] text-sm">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F9FAFB] mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#9CA3AF] mb-6 flex-grow">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#2563EB]/10 text-[#3B82F6] border border-[#2563EB]/20 font-medium flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read Article
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}