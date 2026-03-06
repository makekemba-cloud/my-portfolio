// app/not-found.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Home, AlertCircle, RefreshCw, Ghost, Search,
  ArrowLeft, Sparkles, Compass, X, Check,
  Info, MessageSquare, Code2, Terminal, Braces
} from 'lucide-react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
  rotation: number;
  shape: 'circle' | 'square';
}

interface Notification {
  id: number;
  type: 'success' | 'warning' | 'info';
  message: string;
}

const NotFound = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching]     = useState(false);
  const [isSearching, setIsSearching]     = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [confetti, setConfetti]           = useState<ConfettiPiece[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const devMessages = [
    "Looks like this route doesn't exist. Maybe it's in another branch? 🌿",
    "HTTP 404 — The page you requested could not be resolved. 🔍",
    "Oops! Looks like this commit never made it to production. 📦",
    "This endpoint returned nothing. Classic undefined behaviour. 😅",
    "Page not found. Did you forget to push? 🚀",
    "404: Even the console can't find this one. 🖥️",
    "Null pointer exception... just kidding. Page not found. 😄",
    "This URL has left the building. Let's debug and get back. 🐛",
  ];

  const devFacts = [
    "💡 Did you know? The 404 status code has existed since HTTP/1.0 in 1992.",
    "💡 Fun fact: Google's 404 page is one of the most visited pages on the internet.",
    "💡 The average website has 3–5% of its pages returning 404 errors.",
    "💡 HTTP 404 was introduced alongside the World Wide Web itself.",
    "💡 Some companies hire designers specifically to make 404 pages memorable.",
  ];

  const [currentMessage, setCurrentMessage] = useState(devMessages[0]);

  // ── Notifications ──────────────────────────────────────────
  const addNotification = (type: 'success' | 'warning' | 'info', message: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, message }]);
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // ── Mouse parallax ─────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ── Glitch ─────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 120);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ── Rotate messages ────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * devMessages.length);
      setCurrentMessage(devMessages[idx]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ── Confetti ───────────────────────────────────────────────
  const createConfetti = () => {
    const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8', '#BFDBFE', '#F9FAFB'];
    const pieces: ConfettiPiece[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 12 + 6,
      speed: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      shape: Math.random() > 0.5 ? 'circle' : 'square',
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 3500);
  };

  // ── Handlers ───────────────────────────────────────────────
  const handleBackButton = () => {
    if (window.history.length > 1) router.back();
    else router.push('/');
  };

  const handleSearchSimulation = () => {
    if (isSearching) return;
    setIsSearching(true);
    addNotification('info', '🔍 Scanning all routes...');

    const input = searchInputRef.current;
    if (!input) return;

    input.value = '';
    const text = 'Scanning routes... checking components... querying database...';
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        input.value += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
      } else {
        setTimeout(() => {
          input.value = 'Route not found in any branch. 🕵️‍♂️';
          addNotification('warning', '⚠️ No matching route found.');
          setTimeout(() => {
            setIsSearching(false);
            input.value = 'Search all pages and routes...';
            addNotification('success', '✅ Scan complete. Try navigating home.');
          }, 1500);
        }, 800);
      }
    };
    typeWriter();
  };

  const handleFunFact = () => {
    const fact = devFacts[Math.floor(Math.random() * devFacts.length)];
    addNotification('info', fact);
  };

  const parallaxStyle = { transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` };
  const parallaxReverse = { transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)` };

  return (
    <div className="min-h-screen bg-[#000000] text-white px-6 py-8 overflow-hidden relative">

      {/* ── Notifications ─────────────────────────────────────── */}
      <div className="fixed top-4 right-4 z-50 max-w-sm space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => removeNotification(n.id)}
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] animate-slideInRight backdrop-blur-sm
              ${n.type === 'success' ? 'bg-[#052e16]/80 border-[#166534]/50' :
                n.type === 'warning' ? 'bg-[#1c1002]/80 border-[#92400e]/50' :
                'bg-[#0c1a3a]/80 border-[#1e40af]/50'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
              ${n.type === 'success' ? 'bg-[#16a34a]' :
                n.type === 'warning' ? 'bg-[#d97706]' :
                'bg-[#2563EB]'}`}>
              {n.type === 'success' && <Check size={16} />}
              {n.type === 'warning' && <AlertCircle size={16} />}
              {n.type === 'info'    && <Info size={16} />}
            </div>
            <p className="text-sm text-[#E5E7EB] flex-1">{n.message}</p>
            <button onClick={(e) => { e.stopPropagation(); removeNotification(n.id); }}
              className="text-[#6B7280] hover:text-white transition-colors">
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* ── Logo / Branding ───────────────────────────────────── */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-3 group z-50">
        <div className="w-11 h-11 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center group-hover:border-[#2563EB] transition-all duration-300">
          <Code2 size={22} className="text-[#3B82F6]" />
        </div>
        <div>
          <div className="text-base font-bold text-[#F9FAFB] group-hover:text-[#3B82F6] transition-colors">
            Makekemba V
          </div>
          <div className="text-xs text-[#6B7280]">Full Stack Developer</div>
        </div>
      </Link>

      {/* ── Background ────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 opacity-10" style={parallaxStyle}>
          <Ghost size={110} className="text-[#2563EB]" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-10" style={parallaxReverse}>
          <Compass size={90} className="text-[#3B82F6]" />
        </div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full border border-[#2563EB]/10 animate-spin-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border border-[#3B82F6]/8 animate-spin-reverse" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Confetti ──────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {confetti.map((p) => (
          <div
            key={p.id}
            className={p.shape === 'circle' ? 'absolute rounded-full' : 'absolute rounded-sm'}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.color,
              width: p.size,
              height: p.size,
              transform: `rotate(${p.rotation}deg)`,
              animation: `confetti-fall ${p.speed}s linear forwards`,
              animationDelay: `${p.id * 0.01}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative z-10">

        {/* 404 heading */}
        <div className="mb-8">
          <div className={`text-[10rem] sm:text-[12rem] font-bold leading-none mb-4 select-none ${isGlitching ? 'glitch' : ''}`}>
            <span className="text-[#2563EB]">4</span>
            <span className="text-[#F9FAFB]">0</span>
            <span className="text-[#2563EB]">4</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xl font-semibold text-[#9CA3AF]">
            <Terminal size={24} className="text-[#2563EB]" />
            <span>Page Not Found</span>
          </div>
        </div>

        {/* Rotating message */}
        <div className="max-w-xl mb-10">
          <p className="text-lg text-[#9CA3AF] mb-4 min-h-[28px] transition-all duration-500">
            {currentMessage}
          </p>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {devMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => setCurrentMessage(msg)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentMessage === msg ? 'w-6 bg-[#2563EB]' : 'w-1.5 bg-[#374151] hover:bg-[#6B7280]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className={`max-w-xl w-full mb-10 transition-all duration-300 ${isSearching ? 'scale-105' : ''}`}>
          <div className="relative bg-[#0B0F1A] border border-[#1F2937] hover:border-[#2563EB]/50 rounded-xl p-2 transition-all duration-300 flex items-center gap-3">
            <Search size={20} className={`text-[#2563EB] ml-3 shrink-0 ${isSearching ? 'animate-spin' : ''}`} />
            <input
              ref={searchInputRef}
              type="text"
              readOnly
              defaultValue="Search all pages and routes..."
              className="flex-1 bg-transparent py-3 text-[#9CA3AF] placeholder-[#4B5563] focus:outline-none text-sm"
            />
            <button
              onClick={handleSearchSimulation}
              disabled={isSearching}
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSearching
                ? <><RefreshCw size={16} className="animate-spin" /> Scanning...</>
                : <><Search size={16} /> Scan Routes</>}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl w-full mb-12">

          {/* Home */}
          <button
            onClick={() => { createConfetti(); router.push('/'); }}
            className="group rounded-xl border border-[#111827] bg-[#0B0F1A]/60 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <Home size={24} className="text-[#3B82F6]" />
            </div>
            <span className="text-[#F9FAFB] font-semibold">Back to Home</span>
            <span className="text-[#6B7280] text-xs flex items-center gap-1"><Sparkles size={12} /> Safe return</span>
          </button>

          {/* Go back */}
          <button
            onClick={handleBackButton}
            className="group rounded-xl border border-[#111827] bg-[#0B0F1A]/60 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <ArrowLeft size={24} className="text-[#3B82F6]" />
            </div>
            <span className="text-[#F9FAFB] font-semibold">Go Back</span>
            <span className="text-[#6B7280] text-xs">Previous page</span>
          </button>

          {/* Projects */}
          <button
            onClick={() => router.push('/projects')}
            className="group rounded-xl border border-[#111827] bg-[#0B0F1A]/60 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <Braces size={24} className="text-[#3B82F6]" />
            </div>
            <span className="text-[#F9FAFB] font-semibold">View Projects</span>
            <span className="text-[#6B7280] text-xs">Browse my work</span>
          </button>

          {/* Fun fact */}
          <button
            onClick={handleFunFact}
            className="group rounded-xl border border-[#111827] bg-[#0B0F1A]/60 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <Info size={24} className="text-[#3B82F6]" />
            </div>
            <span className="text-[#F9FAFB] font-semibold">Dev Fact</span>
            <span className="text-[#6B7280] text-xs">Learn something 💡</span>
          </button>

          {/* Contact */}
          <button
            onClick={() => addNotification('info', '💬 Head to the homepage and scroll to the contact section!')}
            className="group rounded-xl border border-[#111827] bg-[#0B0F1A]/60 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex flex-col items-center gap-3 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <MessageSquare size={24} className="text-[#3B82F6]" />
            </div>
            <span className="text-[#F9FAFB] font-semibold">Contact Me</span>
            <span className="text-[#6B7280] text-xs">Get in touch 📩</span>
          </button>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mb-12 py-8 border-y border-[#111827] w-full max-w-lg">
          {[
            { value: '404', label: 'Error Code' },
            { value: '∞',   label: 'Routes Exist' },
            { value: '1',   label: 'Way Home' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-[#2563EB]">{value}</div>
              <div className="text-xs text-[#6B7280] mt-1 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-[#2563EB]/20 rounded-2xl blur-xl group-hover:bg-[#2563EB]/30 transition-all duration-500" />
          <Link
            href="/"
            onClick={createConfetti}
            className="relative flex items-center gap-3 px-10 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#2563EB]/30"
          >
            <Home size={24} className="group-hover:animate-bounce" />
            Return to Portfolio
            <Sparkles size={20} className="opacity-70" />
          </Link>
        </div>

      </div>

      {/* ── Keyframes ─────────────────────────────────────────── */}
      <style jsx>{`
        @keyframes confetti-fall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes slideInRight {
          from { transform: translateX(110%); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
        @keyframes glitch-anim {
          0%   { transform: translate(0); }
          20%  { transform: translate(-3px, 3px); }
          40%  { transform: translate(-3px, -3px); }
          60%  { transform: translate(3px, 3px); }
          80%  { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        .animate-spin-slow    { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-slideInRight { animation: slideInRight 0.4s ease-out; }
        .glitch               { animation: glitch-anim 0.3s infinite; }
      `}</style>
    </div>
  );
};

export default NotFound;