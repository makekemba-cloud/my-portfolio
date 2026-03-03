'use client';

import { useState } from 'react';
import { FileText, Edit2, Trash2, Eye, EyeOff, Plus, Search, Filter, Clock, Calendar, TrendingUp } from 'lucide-react';

export default function AdminPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      author: 'Makekemba Vhutali',
      date: 'Mar 1, 2024',
      views: 1243,
      status: 'published',
      category: 'Tutorial',
      excerpt: 'Learn the fundamentals of Next.js 14 and build modern web applications...',
    },
    {
      id: 2,
      title: 'Building Secure APIs with Node.js',
      author: 'Makekemba Vhutali',
      date: 'Feb 28, 2024',
      views: 892,
      status: 'published',
      category: 'Security',
      excerpt: 'Best practices for securing your Node.js APIs against common vulnerabilities...',
    },
    {
      id: 3,
      title: 'React Hooks Deep Dive',
      author: 'Makekemba Vhutali',
      date: 'Feb 25, 2024',
      views: 2104,
      status: 'published',
      category: 'React',
      excerpt: 'Master React Hooks and write more efficient functional components...',
    },
    {
      id: 4,
      title: 'Database Optimization Tips',
      author: 'Makekemba Vhutali',
      date: 'Feb 20, 2024',
      views: 567,
      status: 'draft',
      category: 'Database',
      excerpt: 'Essential tips for optimizing your database queries and improving performance...',
    },
    {
      id: 5,
      title: 'TypeScript Best Practices',
      author: 'Makekemba Vhutali',
      date: 'Feb 15, 2024',
      views: 1876,
      status: 'published',
      category: 'TypeScript',
      excerpt: 'Write better TypeScript code with these proven best practices...',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: 'Total Posts', value: posts.length, icon: FileText },
    { label: 'Published', value: posts.filter(p => p.status === 'published').length, icon: Eye },
    { label: 'Drafts', value: posts.filter(p => p.status === 'draft').length, icon: Clock },
    { label: 'Total Views', value: '6,682', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Top Navigation */}
      <nav className="fixed top-0 right-0 left-60 h-16 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-[#111827] flex items-center justify-between px-6 z-40">
        <h1 className="text-xl font-bold text-[#F9FAFB]">Posts</h1>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </nav>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-60 h-screen bg-[#0B0F1A] border-r border-[#111827] p-6 flex flex-col">
        <div className="mb-8">
          <div className="inline-block p-2 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#3B82F6] mb-3">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-lg font-bold text-[#F9FAFB]">Admin</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { label: 'All Posts', icon: FileText },
            { label: 'Published', icon: Eye },
            { label: 'Drafts', icon: Clock },
            { label: 'Categories', icon: Filter },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#9CA3AF] hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors text-left"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 rounded-lg bg-[#111827] border border-[#1F2937]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6]" />
            <div className="text-sm">
              <p className="font-semibold text-[#F9FAFB]">Makekemba</p>
              <p className="text-xs text-[#6B7280]">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-60 mt-16 p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-xl border border-[#111827] bg-[#0B0F1A] hover:border-[#2563EB]/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#9CA3AF] text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#F9FAFB]">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2563EB]/10">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0B0F1A] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'published', 'draft'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  filterStatus === status
                    ? 'bg-[#2563EB] text-white'
                    : 'border border-[#111827] text-[#9CA3AF] hover:border-[#2563EB]'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Table */}
        <div className="rounded-xl border border-[#111827] bg-[#0B0F1A] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#111827] bg-[#000000]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Title</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Category</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Views</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Date</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-[#9CA3AF]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map(post => (
                  <tr key={post.id} className="border-b border-[#111827] hover:bg-[#111827] transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-[#F9FAFB] text-sm">{post.title}</p>
                        <p className="text-xs text-[#6B7280] mt-1">{post.excerpt}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        post.status === 'published'
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-[#9CA3AF] font-semibold">{post.views.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-[#6B7280]">{post.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-[#2563EB]/10 text-[#9CA3AF] hover:text-[#2563EB] transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-500/10 text-[#9CA3AF] hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPosts.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-[#6B7280]">No posts found matching your filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Create Post Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-2xl bg-[#0B0F1A] rounded-xl border border-[#111827] p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">Create New Post</h2>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none text-sm font-semibold"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Category"
                  className="px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none text-sm"
                />
                <select className="px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] focus:border-[#2563EB] outline-none text-sm">
                  <option>Status: Published</option>
                  <option>Status: Draft</option>
                </select>
              </div>
              <textarea
                placeholder="Post excerpt..."
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none resize-none text-sm"
                rows={3}
              />
              <textarea
                placeholder="Full post content..."
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none resize-none text-sm"
                rows={8}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsCreating(false)}
                className="px-6 py-2 rounded-lg border border-[#111827] text-[#9CA3AF] hover:bg-[#111827] transition-colors font-semibold"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors">
                Create Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}