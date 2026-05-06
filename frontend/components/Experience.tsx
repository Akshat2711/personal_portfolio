"use client";
import React from "react";
import Image from "next/image";
import { jobs } from "@/lib/data";

export default function Experience() {
  const extruded = "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";
  const insetDeep = "shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]";
  const insetShallow = "active:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]";

  return (
    <section id="experience" className="py-32 flex flex-col items-center px-6">
      {/* Injecting the slow-spin animation directly */}
      <style jsx>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 6s linear infinite;
        }
      `}</style>

      <div className="max-w-5xl w-full">
         {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-16 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D4852] tracking-tighter">Work Experience</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {jobs.map((job, index) => (
            /* 1. OUTER WRAPPER: Handles the shadows and the hover state */
            <div 
              key={index} 
              className={`relative p-[2px] rounded-[34px] group transition-all duration-500 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] ${extruded} hover:-translate-y-2`}
            >
              {/* 2. THE MOVING GLOW LAYER: Only visible on hover */}
              <div className="absolute inset-0 rounded-[34px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#6C63FF_180deg,transparent_210deg,transparent_360deg)] animate-slow-spin" />
              </div>

              {/* 3. INNER CONTENT CARD: Matches site background */}
              <div className="relative bg-[#E0E5EC] rounded-[32px] p-10 h-full w-full">
                <div className="flex justify-between items-start mb-6">
                  {/* LOGO WELL */}
                  <div className={`p-2 rounded-2xl bg-[#E0E5EC] ${insetDeep}`}>
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/40 flex items-center justify-center p-2">
                      <Image 
                        src={job.logo} 
                        alt={job.company} 
                        width={56} 
                        height={56} 
                        className="object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>

                  <span className={`px-4 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-[#6B7280] bg-[#E0E5EC] ${insetDeep}`}>
                    {job.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors duration-300">
                    {job.role}
                  </h3>
                  <p className="text-[#6C63FF] font-medium">{job.company}</p>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-8">
                  {job.description}
                </p>

                {/* COMPANY URL */}
                <a 
                  href={job.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-[#3D4852] bg-[#E0E5EC] transition-all duration-300 ${extruded} hover:text-[#6C63FF] ${insetShallow}`}
                >
                  Visit Website
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}