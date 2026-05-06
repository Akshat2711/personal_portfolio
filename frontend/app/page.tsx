"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Mail, ArrowUpRight, Cpu, Activity } from "lucide-react";
import Projects from "@/components/Projects";
import { Contactus } from "@/components/Contactus";
import GithubMetrics from "@/components/Github";

export default function Home() {
  const extruded = "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";
  const insetDeep = "shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]";
  const insetShallow = "active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)]";
  const iconWell = "shadow-[inset_4px_4px_8px_rgb(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]";

  return (
    <div className="bg-[#E0E5EC] min-h-screen font-sans text-[#3D4852] selection:bg-[#6C63FF]/20 relative overflow-hidden">
      
      {/* 1. BLUEPRINT BACKGROUND DOODLE */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#3D4852 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <style jsx global>{`
        @keyframes ambient-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float { animation: ambient-float 6s ease-in-out infinite; }
      `}</style>

      <Navbar />

      <main className="pt-20 relative z-10">
        
        {/* ABOUT SECTION */}
        <section id="about" className="py-32 flex items-center justify-center px-6 relative">
          
          {/* DECORATIVE: Top-Right "Hardware" Detail */}
          <div className="absolute top-20 right-10 hidden lg:block opacity-40">
            <div className={`p-6 rounded-3xl ${insetDeep} flex flex-col gap-3`}>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
                <div className="w-8 h-1 bg-[#3D4852]/20 rounded-full" />
              </div>
              <div className="w-24 h-1 bg-[#3D4852]/10 rounded-full" />
              <div className="w-16 h-1 bg-[#3D4852]/10 rounded-full" />
            </div>
          </div>

          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT - IMAGE WELL & ACOUSTIC DOODLE */}
            <div className="flex justify-center relative">
              {/* Decorative Concentric Rings (The "Sensor" Doodle) */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className={`w-[350px] h-[350px] rounded-full border border-[#3D4852]/5 animate-pulse`} />
                <div className={`absolute w-[450px] h-[450px] rounded-full border border-[#3D4852]/5`} />
              </div>

              <div className={`p-4 rounded-full bg-[#E0E5EC] ${insetDeep} animate-float`}>
                <div className={`p-2 rounded-full bg-[#E0E5EC] ${extruded}`}>
                  <Image
                    src="/assets/profile_photo.jpg"
                    alt="Profile"
                    width={250}
                    height={250}
                    className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div>
              {/* STATUS PILL with Live LED */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#3D4852] bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgb(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B2AC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38B2AC]"></span>
                </span>
                Currently Exploring AI Agents
              </div>
              
              <h2 className="text-6xl font-bold mb-6 tracking-tighter text-[#3D4852] leading-[1.1]">
                Akshat <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6C63FF] to-[#38B2AC]">Srivastava</span>
              </h2>
              
              <p className="text-[#6B7280] text-lg mb-10 leading-relaxed max-w-md">
                Engineering intelligent systems with <span className="font-semibold text-[#3D4852]">AI agents</span>, scalable backend architectures, and modern full-stack technologies for high-performance user experiences.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex gap-5 mb-12">
                {[
                  { name: 'GitHub', href: 'https://github.com/Akshat2711', path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akshat-srivastava-5a52b1240/', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#E0E5EC] transition-all duration-300 font-bold text-sm ${extruded} hover:-translate-y-1 ${insetShallow} group`}
                  >
                    <span className={`p-2 rounded-lg ${iconWell} transition-colors flex items-center justify-center`}>
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#6B7280] group-hover:fill-[#6C63FF] transition-colors">
                        <path d={social.path} />
                      </svg>
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>

              {/* ACTION: RESUME */}
              <a
                href="assets/19FEB_LATEST.pdf"
                className={`group inline-flex items-center gap-4 bg-[#6C63FF] text-white px-10 py-5 rounded-[24px] font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5 ${extruded}`}
              >
                  Resume
                <div className="p-1 rounded-lg bg-white/20">
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </section>


        <Experience />
        <Projects />
        <GithubMetrics/>
        <Contactus />
                
      </main>

      <Footer />
    </div>
  );
}