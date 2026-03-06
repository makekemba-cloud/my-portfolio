'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

// ── PCB Background ───────────────────────────────────────
function PCBBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let animationId: number;
    let width = 0;
    let height = 0;

    interface Pt { x: number; y: number }
    interface Trace { points: Pt[]; layer: number }
    interface Pulse {
      traceIndex: number; progress: number; speed: number;
      size: number; color: string; tail: number;
    }
    interface BinaryStream {
      x: number; y: number; chars: string[];
      speed: number; opacity: number; fontSize: number; offset: number;
    }
    interface Circle { x: number; y: number; r: number; type: 'pad' | 'via' | 'ring' }

    let traces: Trace[] = [];
    let pulses: Pulse[] = [];
    let binaryStreams: BinaryStream[] = [];
    let circles: Circle[] = [];

    const GRID = 55;
    const PULSE_COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#BAE6FD', '#F59E0B', '#34D399'];

    const snap = (v: number, g: number) => Math.round(v / g) * g;
    const hexToRgb = (hex: string) => {
      const h = hex.replace('#', '');
      return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) };
    };

    function build() {
      traces = []; circles = []; binaryStreams = [];
      const traceCount = Math.floor((width * height) / 14000);

      for (let i = 0; i < traceCount; i++) {
        const layer = Math.random() < 0.3 ? 0 : 1;
        const pts: Pt[] = [];
        let cx = snap(Math.random() * width, GRID);
        let cy = snap(Math.random() * height, GRID);
        pts.push({ x: cx, y: cy });
        circles.push({ x: cx, y: cy, r: 4 + Math.random() * 3, type: 'pad' });

        const steps = 3 + Math.floor(Math.random() * 7);
        for (let s = 0; s < steps; s++) {
          const roll = Math.random();
          if (roll < 0.35) {
            const d = (1 + Math.floor(Math.random() * 6)) * GRID;
            cx += Math.random() > 0.5 ? d : -d;
          } else if (roll < 0.65) {
            const d = (1 + Math.floor(Math.random() * 6)) * GRID;
            cy += Math.random() > 0.5 ? d : -d;
          } else {
            const d = (1 + Math.floor(Math.random() * 3)) * GRID;
            cx += Math.random() > 0.5 ? d : -d;
            cy += Math.random() > 0.5 ? d : -d;
          }
          cx = Math.max(-GRID, Math.min(width + GRID, cx));
          cy = Math.max(-GRID, Math.min(height + GRID, cy));
          pts.push({ x: cx, y: cy });
          if (s < steps - 1 && Math.random() < 0.5)
            circles.push({ x: cx, y: cy, r: 2 + Math.random() * 2, type: 'via' });
        }
        circles.push({ x: cx, y: cy, r: 5 + Math.random() * 4, type: 'ring' });
        if (pts.length >= 2) traces.push({ points: pts, layer });
      }

      for (let i = 0; i < Math.floor(traceCount * 0.4); i++) {
        circles.push({
          x: snap(Math.random() * width, GRID),
          y: snap(Math.random() * height, GRID),
          r: 3 + Math.random() * 5,
          type: Math.random() < 0.5 ? 'pad' : 'ring',
        });
      }

      for (let i = 0; i < Math.floor(width / 120); i++) {
        const chars: string[] = [];
        for (let c = 0; c < 8 + Math.floor(Math.random() * 16); c++)
          chars.push(Math.random() > 0.5 ? '1' : '0');
        binaryStreams.push({
          x: 40 + Math.random() * (width - 80),
          y: Math.random() * height,
          chars,
          speed: 0.08 + Math.random() * 0.15,
          opacity: 0.08 + Math.random() * 0.18,
          fontSize: 10 + Math.floor(Math.random() * 8),
          offset: Math.random() * 1000,
        });
      }

      pulses = [];
      for (let i = 0; i < Math.floor(traceCount * 0.35); i++) spawnPulse();
    }

    function spawnPulse() {
      if (!traces.length) return;
      pulses.push({
        traceIndex: Math.floor(Math.random() * traces.length),
        progress: Math.random(),
        speed: 0.0002 + Math.random() * 0.0005,
        size: 1.5 + Math.random() * 2.5,
        color: PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)],
        tail: 0.06 + Math.random() * 0.1,
      });
    }

    function getPos(trace: Trace, p: number): Pt {
      const pts = trace.points, segs = pts.length - 1;
      const sp = p * segs, si = Math.min(Math.floor(sp), segs - 1), t = sp - si;
      return { x: pts[si].x + (pts[si+1].x - pts[si].x) * t, y: pts[si].y + (pts[si+1].y - pts[si].y) * t };
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Diagonal hatching
      ctx.strokeStyle = 'rgba(15,30,70,0.5)';
      ctx.lineWidth = 0.5;
      for (let x = -height; x < width + height; x += 90) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + height, height); ctx.stroke();
      }

      // Traces
      [0, 1].forEach((layer) => {
        traces.forEach((trace) => {
          if (trace.layer !== layer) return;
          const pts = trace.points;
          if (pts.length < 2) return;
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
          ctx.strokeStyle = `rgba(37,99,235,${layer === 0 ? 0.06 : 0.18})`;
          ctx.lineWidth = layer === 0 ? 0.8 : 1.2;
          ctx.stroke();
        });
      });

      // Circles
      circles.forEach((c) => {
        if (c.type === 'pad') {
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(37,99,235,0.22)'; ctx.fill();
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r*0.45, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(96,165,250,0.35)'; ctx.fill();
        } else if (c.type === 'via') {
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(37,99,235,0.3)'; ctx.lineWidth = 1; ctx.stroke();
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r*0.35, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(37,99,235,0.25)'; ctx.fill();
        } else {
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(37,99,235,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r*0.62, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(96,165,250,0.2)'; ctx.lineWidth = 1; ctx.stroke();
          ctx.beginPath(); ctx.arc(c.x, c.y, c.r*0.22, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(37,99,235,0.35)'; ctx.fill();
        }
      });

      // Binary streams
      binaryStreams.forEach((stream) => {
        ctx.font = `${stream.fontSize}px monospace`;
        const lineH = stream.fontSize * 1.5;
        const totalH = stream.chars.length * lineH;
        const scrollY = (time * stream.speed * 0.04 + stream.offset * lineH) % totalH;
        stream.chars.forEach((ch, i) => {
          const wy = (((stream.y + i * lineH - scrollY) % height) + height) % height;
          const dist = Math.abs(i - stream.chars.length / 2) / (stream.chars.length / 2);
          const alpha = stream.opacity * (1 - dist * 0.4);
          const highlight = Math.sin(time * 0.0008 + i * 2.1 + stream.offset) > 0.88;
          ctx.fillStyle = highlight ? `rgba(186,230,253,${alpha*3})` : `rgba(37,99,235,${alpha})`;
          ctx.fillText(ch, stream.x, wy);
        });
      });

      // Pulses
      pulses.forEach((pulse) => {
        const trace = traces[pulse.traceIndex];
        if (!trace) return;
        const pos = getPos(trace, pulse.progress);
        const { r, g, b } = hexToRgb(pulse.color);

        for (let t = 16; t >= 0; t--) {
          const tp = pulse.progress - (pulse.tail * t) / 16;
          if (tp < 0) continue;
          const tpos = getPos(trace, Math.max(0, tp));
          ctx.beginPath();
          ctx.arc(tpos.x, tpos.y, pulse.size * (0.3 + 0.7*(1-t/16)), 0, Math.PI*2);
          ctx.fillStyle = `rgba(${r},${g},${b},${(1-t/16)*0.55})`;
          ctx.fill();
        }

        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, pulse.size*5);
        grad.addColorStop(0, `rgba(${r},${g},${b},0.75)`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},0.25)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath(); ctx.arc(pos.x, pos.y, pulse.size*5, 0, Math.PI*2);
        ctx.fillStyle = grad; ctx.fill();

        ctx.beginPath(); ctx.arc(pos.x, pos.y, pulse.size, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${r},${g},${b},1)`; ctx.fill();

        ctx.beginPath(); ctx.arc(pos.x, pos.y, pulse.size*0.35, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fill();

        pulse.progress += pulse.speed;
        if (pulse.progress > 1) {
          pulse.traceIndex = Math.floor(Math.random() * traces.length);
          pulse.progress = 0;
          pulse.speed = 0.0002 + Math.random() * 0.0005;
          pulse.color = PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)];
        }
      });

      if (Math.random() < 0.005 && pulses.length < traces.length * 0.45) spawnPulse();
      animationId = requestAnimationFrame(draw);
    }

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
      build();
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.85 }} />;
}

// ── Hero Section ─────────────────────────────────────────
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth >= 1024 ? 65 : 999;
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - navbarHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20 pb-20">

      {/* PCB animated background */}
      <PCBBackground />

      {/* Glow overlays + vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content — all centered */}
     <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">

        {/* Badge */}
        <div className={`mb-8 transition-all duration-700 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-[#2563EB]/30 bg-[#000000]/60 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.45)]">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm text-[#9CA3AF] font-medium">Building modern web experiences</span>
          </div>
        </div>

        {/* Picture + Text side by side */}
       <div className="flex flex-col lg:flex-row items-center gap-10 mb-8 w-full lg:justify-start">

          {/* Profile picture — left on desktop */}
          <div className={`flex-shrink-0 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
              <div className="absolute inset-0 rounded-full border-2 border-[#2563EB] animate-pulse" />
              <div className="absolute inset-3 rounded-full border border-[#2563EB]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#2563EB] shadow-2xl shadow-[#2563EB]/50">
                <Image
                  src="/images/Screenshot 2026-03-03 101434.png"
                  alt="Profile" fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                  className="object-cover" priority
                />
              </div>
            </div>
          </div>

          {/* Headline + Subheading — right on desktop, centered on mobile */}
          <div className="flex flex-col items-center text-center">
            <div className={`mb-6 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-[#F9FAFB] mb-2">Fullstack Developer</span>
                <span className="block bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent leading-tight">
                  Crafting Secure Web Solutions
                </span>
              </h1>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl">
                I build production-grade fullstack applications with a focus on security,
                performance, and user experience. Specializing in Next.js, React, Node.js, and Supabase.
              </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => handleScrollToSection('projects')}
            className="group px-7 py-4 bg-[#2563EB] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#1d4ed8] shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 text-base"
          >
            <span>View My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => handleScrollToSection('contact')}
            className="px-7 py-4 border-2 border-[#2563EB]/30 text-[#F9FAFB] rounded-lg font-semibold hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 text-base backdrop-blur-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-400 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="https://github.com/makekemba-cloud" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#1f2937] bg-[#000000]/40 backdrop-blur-sm text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300" title="GitHub">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/makekemba-vhutali" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg border border-[#1f2937] bg-[#000000]/40 backdrop-blur-sm text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300" title="LinkedIn">
            <Linkedin size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`flex justify-center transition-opacity duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <span className="text-xs text-[#9CA3AF] uppercase tracking-widest font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-[#1f2937] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-2.5 bg-[#2563EB] rounded-full animate-bounce" />
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
    </section>
  );
}