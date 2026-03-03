'use client';

import { useState } from 'react';
import { MessageSquare, Send, Trash2, Archive, Star, Search, Plus, X, Reply } from 'lucide-react';

export default function AdminMessages() {
  const [selectedMessage, setSelectedMessage] = useState(0);
  const [isComposing, setIsComposing] = useState(false);
  const [reply, setReply] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const messages = [
    {
      id: 1,
      from: 'John Doe',
      email: 'john@example.com',
      subject: 'Need help with integration',
      preview: 'Hi, I\'m having trouble integrating your API...',
      timestamp: '2 hours ago',
      read: false,
      conversation: [
        { sender: 'John Doe', text: 'Hi, I\'m having trouble integrating your API with my application.', time: '2 hours ago' },
        { sender: 'You', text: 'Hi John! I\'d be happy to help. Can you share more details about the issue?', time: '1 hour ago' },
        { sender: 'John Doe', text: 'Sure! I\'m getting a 401 error on the authentication endpoint.', time: '1 hour ago' },
      ]
    },
    {
      id: 2,
      from: 'Sarah Smith',
      email: 'sarah@company.com',
      subject: 'Project collaboration proposal',
      preview: 'I\'d like to discuss a potential collaboration...',
      timestamp: '5 hours ago',
      read: true,
      conversation: [
        { sender: 'Sarah Smith', text: 'I\'d like to discuss a potential collaboration for 2024.', time: '5 hours ago' },
      ]
    },
    {
      id: 3,
      from: 'Mike Johnson',
      email: 'mike@startup.io',
      subject: 'Feedback on your latest release',
      preview: 'Great work on the v2.0 release...',
      timestamp: '1 day ago',
      read: true,
      conversation: [
        { sender: 'Mike Johnson', text: 'Great work on the v2.0 release! The new dashboard is amazing.', time: '1 day ago' },
      ]
    },
    {
      id: 4,
      from: 'Emma Wilson',
      email: 'emma@design.co',
      subject: 'Design system implementation',
      preview: 'Can we schedule a meeting to discuss...',
      timestamp: '2 days ago',
      read: true,
      conversation: [
        { sender: 'Emma Wilson', text: 'Can we schedule a meeting to discuss the design system implementation?', time: '2 days ago' },
      ]
    },
  ];

  const currentMessage = messages[selectedMessage];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Top Navigation */}
      <nav className="fixed top-0 right-0 left-60 h-16 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-[#111827] flex items-center justify-between px-6 z-40">
        <h1 className="text-xl font-bold text-[#F9FAFB]">Messages</h1>
        <button
          onClick={() => setIsComposing(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Message</span>
        </button>
      </nav>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-60 h-screen bg-[#0B0F1A] border-r border-[#111827] p-6 flex flex-col">
        <div className="mb-8">
          <div className="inline-block p-2 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#3B82F6] mb-3">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-lg font-bold text-[#F9FAFB]">Admin</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { label: 'Inbox', count: 4 },
            { label: 'Sent', count: 24 },
            { label: 'Archived', count: 8 },
            { label: 'Trash', count: 2 },
          ].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className="flex items-center justify-between px-4 py-3 rounded-lg text-[#9CA3AF] hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs bg-[#111827] px-2 py-1 rounded">{item.count}</span>
            </Link>
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
      <div className="ml-60 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-[calc(100vh-64px)]">
        {/* Messages List */}
        <div className="lg:col-span-1 rounded-xl border border-[#111827] bg-[#0B0F1A] overflow-hidden flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-[#111827]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none text-sm"
              />
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, idx) => (
              <button
                key={msg.id}
                onClick={() => setSelectedMessage(idx)}
                className={`w-full p-4 border-b border-[#111827] text-left transition-all duration-300 hover:bg-[#111827] ${
                  selectedMessage === idx ? 'bg-[#2563EB]/10 border-l-2 border-l-[#2563EB]' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className={`font-semibold text-sm ${msg.read ? 'text-[#9CA3AF]' : 'text-[#F9FAFB]'}`}>
                    {msg.from}
                  </p>
                  <span className="text-xs text-[#6B7280]">{msg.timestamp}</span>
                </div>
                <p className={`text-xs ${msg.read ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                  {msg.subject}
                </p>
                <p className="text-xs text-[#6B7280] line-clamp-1 mt-1">{msg.preview}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 rounded-xl border border-[#111827] bg-[#0B0F1A] overflow-hidden flex flex-col">
          {currentMessage ? (
            <>
              {/* Header */}
              <div className="p-6 border-b border-[#111827] flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">{currentMessage.subject}</h2>
                  <p className="text-[#9CA3AF]">{currentMessage.from} ({currentMessage.email})</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-[#111827] text-[#9CA3AF] transition-colors">
                    <Star className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-[#111827] text-[#9CA3AF] transition-colors">
                    <Archive className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-[#111827] text-[#9CA3AF] transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Conversation */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentMessage.conversation.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-xs px-4 py-3 rounded-lg ${
                        msg.sender === 'You'
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-[#111827] text-[#F9FAFB]'
                      }`}
                    >
                      <p className={`text-xs font-semibold mb-2 ${msg.sender === 'You' ? 'opacity-90' : 'text-[#9CA3AF]'}`}>
                        {msg.sender}
                      </p>
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-2 ${msg.sender === 'You' ? 'opacity-75' : 'text-[#6B7280]'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Input */}
              <div className="p-6 border-t border-[#111827]">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <textarea
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your reply..."
                      className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none resize-none"
                      rows={3}
                    />
                  </div>
                  <button className="px-4 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center gap-2">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-[#6B7280]">
              <p>Select a message to view</p>
            </div>
          )}
        </div>
      </div>

      {/* Compose Modal */}
      {isComposing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-2xl bg-[#0B0F1A] rounded-xl border border-[#111827] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#F9FAFB]">New Message</h2>
              <button
                onClick={() => setIsComposing(false)}
                className="p-2 rounded-lg hover:bg-[#111827] transition-colors"
              >
                <X className="w-6 h-6 text-[#9CA3AF]" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="To:"
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none"
              />
              <input
                type="text"
                placeholder="Subject:"
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none"
              />
              <textarea
                placeholder="Compose your message..."
                className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#111827] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] outline-none resize-none"
                rows={6}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsComposing(false)}
                className="px-6 py-2 rounded-lg border border-[#111827] text-[#9CA3AF] hover:bg-[#111827] transition-colors font-semibold"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center gap-2">
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Link({ href, children, className }: any) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}