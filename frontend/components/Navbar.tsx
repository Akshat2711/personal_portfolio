"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Constant for the tactile "molded" shadow
  const extruded = "shadow-[6px_6px_12px_rgb(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]";
  const insetShallow = "active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]";

  const pathname = usePathname();
  const isDemoPage = pathname === "/project_demo";

  // Navigation items array
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Outer wrapper for positioning
    <nav className="fixed top-6 w-full z-50 flex justify-center px-6">

      {/* The "Island" Pill */}
      <div className={`
        flex items-center justify-between
        max-w-4xl w-full
        px-6 md:px-10 py-4
        rounded-full
        bg-[#E0E5EC]
        ${extruded}
        backdrop-blur-sm bg-opacity-95
      `}>

        {/* LOGO SECTION - Click to go home */}
        <Link href="/" className="font-bold text-[#3D4852] text-lg tracking-tight hidden sm:block hover:text-[#6C63FF] transition-colors">
          Portfolio<span className="text-[#6C63FF]">.</span>
        </Link>

        {/* LINKS SECTION */}
        <div className="flex gap-1 md:gap-3 w-full sm:w-auto justify-center sm:justify-end">
          {navItems.map((item) => (
            isDemoPage ? (
              <Link
                key={item.name}
                href={`/${item.href}`}
                className={`
                  px-4 md:px-6 py-2 rounded-full
                  text-[12px] md:text-sm font-bold text-[#6B7280]
                  hover:text-[#6C63FF]
                  transition-all duration-300
                  hover:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.4)]
                  ${insetShallow}
                `}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`
                  px-4 md:px-6 py-2 rounded-full
                  text-[12px] md:text-sm font-bold text-[#6B7280]
                  hover:text-[#6C63FF]
                  transition-all duration-300
                  hover:shadow-[inset_4px_4px_8px_rgb(163,177,198,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.4)]
                  ${insetShallow}
                `}
              >
                {item.name}
              </a>
            )
          ))}
        </div>

      </div>
    </nav>
  );
}