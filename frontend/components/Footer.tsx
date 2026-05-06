"use client";

import React from "react";

export default function Footer() {
  const extruded = "shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]";
  const insetDeep = "shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]";
  const iconWell = "shadow-[inset_3px_3px_6px_rgb(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 pt-20 px-6 flex flex-col items-center">
      {/* Horizontal Divider - molded line */}
      <div className={`w-full max-w-5xl h-[2px] rounded-full mb-12 ${insetDeep}`} />

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Branding & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#3D4852] mb-2">
            Portfolio<span className="text-[#6C63FF]">.</span>
          </h2>
          <p className="text-sm text-[#6B7280] font-medium">
            © {currentYear} Akshat Srivastava.
          </p>
        </div>

        {/* Right: Quick Links in a "Footer Pill" */}
        <div className={`flex items-center gap-2 px-6 py-3 rounded-full bg-[#E0E5EC] ${extruded}`}>
          {[
            { name: "GitHub", href: "https://github.com/Akshat2711" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/akshat-srivastava-5a52b1240/" },
            { name: "Mail", href: "mailto:akshatsrivastava206@gmail.com" }
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1 text-xs font-bold text-[#6B7280] hover:text-[#6C63FF] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Detail */}
      <div className="mt-12 flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${iconWell} bg-[#6C63FF]`} />
        <div className={`w-2 h-2 rounded-full ${iconWell} bg-[#38B2AC]`} />
        <div className={`w-2 h-2 rounded-full ${iconWell} bg-[#E0E5EC]`} />
      </div>
    </footer>
  );
}