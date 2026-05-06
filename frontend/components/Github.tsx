"use client";

import React from "react";
import { Zap, Star, GitCommit, Activity, Info } from "lucide-react";

// Official GitHub SVG Path (Zero-dependency version)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function GithubMetrics() {
  const githubId = "Akshat2711";
  
  // Neumorphic Design Tokens
  const extruded = "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";
  const insetDeep = "shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]";
  const iconWell = "shadow-[inset_4px_4px_8px_rgb(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]";

  return (
    <section id="github" className="py-32 flex flex-col items-center px-6 bg-[#E0E5EC]">
      <div className="max-w-5xl w-full">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className={`p-5 rounded-3xl mb-6 bg-[#E0E5EC] ${extruded}`}>
             <GithubIcon className="w-10 h-10 text-[#6C63FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D4852] tracking-tighter">Open Source Pulse</h2>
          <p className="text-[#6B7280] mt-3 font-medium max-w-lg">
            Real-time repository telemetry and contribution analytics for 
            <span className="text-[#6C63FF] font-bold ml-1">@{githubId}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* STATS COLUMN (Tactile Cards) */}
          <div className="lg:col-span-1 space-y-8">
            <StatCard icon={<Star size={18}/>} label="Stars Earned" value="25+" color="#6C63FF" />
            <StatCard icon={<GitCommit size={18}/>} label="Total Commits" value="450+" color="#38B2AC" />
            <StatCard icon={<Zap size={18}/>} label="Pull Requests" value="12" color="#6C63FF" />
            
            {/* Minimal Hardware Detail */}
            <div className={`p-6 rounded-3xl bg-[#E0E5EC] ${insetDeep} flex items-center gap-3 opacity-60`}>
                <Info size={14} className="text-[#6B7280]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                    Data Source: GitHub API v4
                </span>
            </div>
          </div>

          {/* ANALYTICS COLUMN (Heatmap & Skills) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Contribution Heatmap Card */}
            <div className={`p-8 md:p-10 rounded-[40px] bg-[#E0E5EC] ${extruded}`}>
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-[#3D4852] flex items-center gap-3">
                  <Activity size={20} className="text-[#6C63FF]" /> 
                  Activity Heatmap
                </h3>
                <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#38B2AC] opacity-40" />
                    ))}
                </div>
              </div>
              
              <div className={`w-full p-6 rounded-[24px] bg-[#E0E5EC] ${insetDeep} overflow-hidden`}>
                {/* External SVG Generator using your ID and Site Accent Color */}
                <img 
                  src={`https://ghchart.rshah.org/6C63FF/${githubId}`} 
                  alt="GitHub Contributions Heatmap" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 scale-[1.02]"
                />
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-[9px] text-[#6B7280] font-black uppercase tracking-[0.25em]">
                  Telemetry: 365 Day Cycle
                </p>
                <div className="flex items-center gap-2 text-[9px] font-bold text-[#6B7280]">
                    LESS <div className="w-16 h-1.5 rounded-full bg-[#E0E5EC] shadow-inner flex overflow-hidden">
                        <div className="w-1/4 h-full bg-[#6C63FF]/20" />
                        <div className="w-1/4 h-full bg-[#6C63FF]/40" />
                        <div className="w-1/4 h-full bg-[#6C63FF]/70" />
                        <div className="w-1/4 h-full bg-[#6C63FF]" />
                    </div> MORE
                </div>
              </div>
            </div>

            {/* Language Distribution Display */}
            <div className={`p-8 md:p-10 rounded-[40px] bg-[#E0E5EC] ${extruded}`}>
               <h3 className="font-bold text-[#3D4852] mb-8 tracking-tight">Technical Stack Distribution</h3>
               <div className="space-y-6">
                  <MetricBar label="Flutter & Dart" percentage="65%" color="#6C63FF" />
                  <MetricBar label="Next.js & TypeScript" percentage="25%" color="#38B2AC" />
                  <MetricBar label="Python & AI Agents" percentage="10%" color="#6B7280" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ icon, label, value, color }: any) {
  const extruded = "shadow-[7px_7px_14px_rgb(163,177,198,0.6),-7px_-7px_14px_rgba(255,255,255,0.5)]";
  const iconWell = "shadow-[inset_3px_3px_6px_rgb(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]";

  return (
    <div className={`p-6 rounded-3xl bg-[#E0E5EC] ${extruded} flex items-center gap-6 transition-all hover:-translate-y-1 hover:shadow-lg group`}>
      <div className={`p-4 rounded-2xl ${iconWell} group-hover:scale-110 transition-transform`} style={{ color }}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6B7280] mb-1">{label}</p>
        <p className="text-3xl font-bold text-[#3D4852]">{value}</p>
      </div>
    </div>
  );
}

function MetricBar({ label, percentage, color }: { label: string; percentage: string; color: string }) {
  const insetShallow = "shadow-[inset_2px_2px_5px_rgb(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]";
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-[#3D4852]">
        <span>{label}</span>
        <span className="text-[#6C63FF]">{percentage}</span>
      </div>
      <div className={`w-full h-3 rounded-full bg-[#E0E5EC] ${insetShallow} overflow-hidden p-[1px]`}>
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(108,99,255,0.3)]" 
          style={{ width: percentage, backgroundColor: color }} 
        />
      </div>
    </div>
  );
}