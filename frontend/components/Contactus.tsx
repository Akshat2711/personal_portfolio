"use client";

import React, { useState } from "react";
import { Mail, Send, MessageSquare, User } from "lucide-react";

export const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const extruded =
    "shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]";

  const extrudedHover =
    "hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]";

  const insetDeep =
    "shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]";

  const iconWell =
    "shadow-[inset_3px_3px_6px_rgb(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]";

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = "akshatsrivastava206@gmail.com";

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
`Name: ${name}

Email: ${email}

Message:
${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-32 flex items-center justify-center px-6 bg-[#E0E5EC]"
    >
      <style jsx>{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slow-spin {
          animation: slow-spin 8s linear infinite;
        }
      `}</style>

      <div
        className={`relative max-w-4xl w-full p-[2px] rounded-[48px] group transition-all duration-500 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] ${extruded}`}
      >
        <div className="absolute inset-0 rounded-[48px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_170deg,#6C63FF_180deg,transparent_190deg,transparent_360deg)] animate-slow-spin" />
        </div>

        <div className="relative bg-[#E0E5EC] rounded-[46px] overflow-hidden grid lg:grid-cols-5 gap-0">
          {/* LEFT */}
          <div className="lg:col-span-2 p-12 bg-[#E0E5EC] border-r border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.4),-9px_-9px_16px_rgba(255,255,255,0.4)] flex items-center justify-center">
              <div
                className={`w-40 h-40 rounded-full ${insetDeep} flex items-center justify-center`}
              >
                <div className={`w-20 h-20 rounded-full ${extruded}`} />
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-[#3D4852] mb-6 tracking-tighter leading-tight">
                Let's <br />{" "}
                <span className="text-[#6C63FF]">Connect.</span>
              </h2>

              <p className="text-[#6B7280] font-medium leading-relaxed max-w-[200px]">
                Have a project in mind? Drop a message and let's build
                something tactile.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-[#E0E5EC] flex items-center justify-center text-[#6C63FF] ${extruded}`}
                >
                  <Mail size={20} />
                </div>

                <div className="text-xs font-bold text-[#3D4852]">
                  <p className="text-[#6B7280] uppercase tracking-widest mb-1">
                    Response Time
                  </p>

                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38B2AC] shadow-[0_0_8px_#38B2AC] animate-pulse" />
                    Under 24 Hours
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-[#E0E5EC] ${iconWell}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 p-12 bg-[#E0E5EC]">
            <form className="space-y-8" onSubmit={handleSendMail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 ml-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#6C63FF]">
                    <User size={12} /> Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full bg-[#E0E5EC] rounded-2xl p-5 outline-none focus:ring-4 focus:ring-[#6C63FF]/5 transition-all placeholder:text-[#A3B1C6] text-sm ${insetDeep}`}
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 ml-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#6C63FF]">
                    <Mail size={12} /> Email
                  </label>

                  <input
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full bg-[#E0E5EC] rounded-2xl p-5 outline-none focus:ring-4 focus:ring-[#6C63FF]/5 transition-all placeholder:text-[#A3B1C6] text-sm ${insetDeep}`}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 ml-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#6C63FF]">
                  <MessageSquare size={12} /> Message
                </label>

                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={`w-full bg-[#E0E5EC] rounded-[32px] p-6 outline-none focus:ring-4 focus:ring-[#6C63FF]/5 transition-all placeholder:text-[#A3B1C6] text-sm resize-none ${insetDeep}`}
                />
              </div>

              <button
                type="submit"
                className={`w-full group flex items-center justify-center gap-3 bg-[#E0E5EC] py-6 rounded-[24px] font-black text-lg text-[#6C63FF] transition-all duration-300 ${extruded} ${extrudedHover} active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6)]`}
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />

                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};