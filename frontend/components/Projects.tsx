"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { ChevronLeft, ChevronRight, LayoutGrid, MonitorPlay, Globe, Video } from "lucide-react";

const extruded = "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";
const insetDeep = "shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]";
const insetShallow = "shadow-[inset_4px_4px_8px_rgb(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function ImageSlider({ images, active }: { images: string[]; active: boolean }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!active || images.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images, active]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {images.map((src, idx) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${idx === imgIndex ? "opacity-100" : "opacity-0"}`}>
          <Image src={src} alt="Project" fill className="object-cover" priority={idx === 0} />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === imgIndex ? "w-6 bg-[#6C63FF]" : "w-1.5 bg-white/50"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeVideoProjectId, setActiveVideoProjectId] = useState<number | null>(null);

  const activeVideoProject = activeVideoProjectId !== null ? projects.find((project) => project.id === activeVideoProjectId) : null;

  const openVideo = useCallback((projectId: number) => {
    setActiveVideoProjectId(projectId);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideoProjectId(null);
  }, []);

  const handleProjectChange = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400); 
  }, [isAnimating]);

  const nextProject = useCallback(() => {
    handleProjectChange((currentIndex + 1) % projects.length);
  }, [currentIndex, handleProjectChange]);

  const prevProject = () => handleProjectChange((currentIndex - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (showAll || isAnimating) return;
    const interval = setInterval(nextProject, 8000); 
    return () => clearInterval(interval);
  }, [nextProject, showAll, isAnimating]);

  return (
    <section id="projects" className="py-32 flex flex-col items-center px-6 bg-[#E0E5EC] overflow-hidden">
      <div className="max-w-5xl w-full">
        {activeVideoProject && <VideoPlayer project={activeVideoProject} onClose={closeVideo} />}
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-[#3D4852] mb-4 tracking-tighter">Project Console</h2>
            <p className="text-[#6B7280] font-medium leading-relaxed">Tactile hardware telemetry for active deployments.</p>
          </div>
          <button onClick={() => setShowAll(!showAll)} className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-500 font-bold text-sm ${showAll ? `text-[#6C63FF] ${insetShallow}` : `text-[#3D4852] ${extruded}`}`}>
            {showAll ? <><MonitorPlay size={18} /> Exit Archive</> : <><LayoutGrid size={18} /> View All</>}
          </button>
        </div>

        {/* 1. HERO CONSOLE */}
        {!showAll && (
          <div className="relative">
            <div className={`p-8 md:p-12 rounded-[48px] bg-[#E0E5EC] ${extruded} flex flex-col gap-10 transition-all duration-500 ${isAnimating ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100"}`}>
              <div className={`aspect-video w-full rounded-[32px] overflow-hidden ${insetDeep} p-4`}>
                <ImageSlider key={projects[currentIndex].images.join(",")} images={projects[currentIndex].images} active={!isAnimating} />
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {projects[currentIndex].links.github && <LinkIcon href={projects[currentIndex].links.github} label="GitHub" icon={<GithubIcon className="w-4 h-4" />} />}
                  {projects[currentIndex].links.live && <LinkIcon href={projects[currentIndex].links.live} label="Live Demo" icon={<Globe size={16}/>} />}
                  {projects[currentIndex].videoUrl ? (
                    <button
                      onClick={() => openVideo(projects[currentIndex].id)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#6C63FF] text-white font-bold text-xs shadow-lg hover:brightness-110 transition-all"
                    >
                      Video Walkthrough <Video size={14} />
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E0E5EC] text-[#6B7280] font-bold text-xs shadow-inner">
                      No video available
                    </span>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-[#3D4852] tracking-tight">{projects[currentIndex].title}</h3>
                  <div className="flex flex-wrap gap-2">{projects[currentIndex].tags.map(tag => (<span key={tag} className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#6C63FF] rounded-lg ${insetShallow}`}>{tag}</span>))}</div>
                  <p className="text-[#6B7280] text-lg leading-relaxed max-w-3xl">{projects[currentIndex].description}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 z-10"><button onClick={prevProject} className={`p-4 rounded-full bg-[#E0E5EC] ${extruded} hover:text-[#6C63FF] transition-all`}><ChevronLeft size={28} /></button></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 z-10"><button onClick={nextProject} className={`p-4 rounded-full bg-[#E0E5EC] ${extruded} hover:text-[#6C63FF] transition-all`}><ChevronRight size={28} /></button></div>
          </div>
        )}

        {/* 2. ARCHIVE GRID (NO INFO HIDDEN) */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in zoom-in-95 duration-500">
            {projects.map((project) => (
              <div key={project.id} className={`p-8 rounded-[40px] bg-[#E0E5EC] ${extruded} flex flex-col group`}>
                <div className={`aspect-video rounded-2xl mb-8 overflow-hidden ${insetDeep} p-2`}>
                   <div className="relative w-full h-full rounded-xl overflow-hidden"><Image src={project.images[0]} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /></div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.links.github && <LinkIcon href={project.links.github} label="Git" icon={<GithubIcon className="w-4 h-4" />} />}
                  {project.links.live && <LinkIcon href={project.links.live} label="Live" icon={<Globe size={14}/>} />}
                  {project.videoUrl ? (
                    <button
                      onClick={() => openVideo(project.id)}
                      className={`p-2 rounded-lg bg-[#E0E5EC] ${insetShallow} text-[#6C63FF] hover:scale-110 transition-transform`}
                    >
                      <Video size={16} />
                    </button>
                  ) : null}
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors">{project.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function VideoPlayer({ project, onClose }: { project: (typeof projects)[number]; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm">
      <div className={`relative w-full max-w-5xl rounded-[48px] bg-[#E0E5EC] ${extruded} shadow-2xl border border-[#3D4852]/10 transform-gpu transition duration-700 rotate-3`}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E5EC] text-[#3D4852] shadow-lg transition hover:bg-[#6C63FF] hover:text-white"
        >
          ×
        </button>
        <div className={`aspect-video w-full rounded-[32px] overflow-hidden ${insetDeep} p-4`}>
          <video
            src={project.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster={project.images[0]}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-8 space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h3 className="text-4xl font-bold text-[#3D4852] tracking-tight">{project.title}</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-3xl bg-[#6C63FF] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Back to projects
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#6C63FF] rounded-lg ${insetShallow}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.links.github && <LinkIcon href={project.links.github} label="Code" icon={<GithubIcon className="w-4 h-4" />} />}
            {project.links.live && <LinkIcon href={project.links.live} label="Live" icon={<Globe size={14} />} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkIcon({ href, label, icon }: { href: string, label: string, icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E0E5EC] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-inner hover:text-[#6C63FF] transition-all text-[11px] font-bold text-[#3D4852]">
      {icon} {label}
    </a>
  );
}