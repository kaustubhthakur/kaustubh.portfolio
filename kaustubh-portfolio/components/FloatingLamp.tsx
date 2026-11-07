"use client";

import { useEffect, useState } from "react";

/**
 * Floating table lamp for the homepage.
 * Hovers like the profile photo, casts a real light cone,
 * and you pull its chain (or click it) to switch theme.
 * Dark theme = lamp OFF, light theme = lamp ON.
 * Stays in sync with the navbar lamp through a "theme-change" window event.
 */
export default function FloatingLamp({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [pulling, setPulling] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => root.classList.contains("light") || root.getAttribute("data-theme") === "light";
    setIsLight(read());
    setMounted(true);

    const onChange = (e: Event) => setIsLight((e as CustomEvent<string>).detail === "light");
    window.addEventListener("theme-change", onChange);
    return () => window.removeEventListener("theme-change", onChange);
  }, []);

  const toggle = () => {
    const next = isLight ? "dark" : "light";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setIsLight(next === "light");
    window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
    setPulling(true);
    setTimeout(() => setPulling(false), 700);
  };

  const on = mounted && isLight;

  return (
    <div className={`relative select-none ${className}`}>
      <style>{`
        @keyframes fl-float {
          0%, 100% { transform: translateY(0) rotate(-1.5deg); }
          50%      { transform: translateY(-14px) rotate(1.5deg); }
        }
        @keyframes fl-shadow {
          0%, 100% { transform: scale(1);   opacity: .35; }
          50%      { transform: scale(.78); opacity: .18; }
        }
        @keyframes fl-chain {
          0%   { transform: translateY(0); }
          35%  { transform: translateY(9px); }
          65%  { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        @keyframes fl-flicker {
          0%, 100% { opacity: 1; }
          20% { opacity: .4; }
          45% { opacity: 1; }
          60% { opacity: .7; }
        }
        .fl-lamp   { animation: fl-float 5s ease-in-out infinite; transform-origin: 50% 100%; }
        .fl-shadow { animation: fl-shadow 5s ease-in-out infinite; }
        .fl-chain.pulling { animation: fl-chain .5s ease-out; }
        .fl-light.pulling { animation: fl-flicker .45s linear; }
        .fl-chain-hit:hover .fl-chain-line { stroke-width: 2.4; }
        @media (prefers-reduced-motion: reduce) {
          .fl-lamp, .fl-shadow, .fl-chain.pulling, .fl-light.pulling { animation: none; }
        }
      `}</style>

      {/* ground shadow */}
      <div className="fl-shadow pointer-events-none absolute -bottom-3 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-black/60 blur-md" />

      <button
        type="button"
        onClick={toggle}
        aria-label={on ? "Turn lamp off (dark theme)" : "Turn lamp on (light theme)"}
        aria-pressed={on}
        className="fl-lamp block cursor-pointer rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      >
        <svg viewBox="0 0 160 220" className="h-44 w-32 overflow-visible md:h-56 md:w-40" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="fl-cone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffd36a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffd36a" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="fl-halo">
              <stop offset="0%" stopColor="#ffd36a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffd36a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="fl-shade-on" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e8a93a" />
              <stop offset="45%" stopColor="#ffe08a" />
              <stop offset="100%" stopColor="#d9962a" />
            </linearGradient>
            <linearGradient id="fl-shade-off" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#262a35" />
              <stop offset="45%" stopColor="#3b4152" />
              <stop offset="100%" stopColor="#1f232d" />
            </linearGradient>
            <linearGradient id="fl-base" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a5063" />
              <stop offset="40%" stopColor="#8a92aa" />
              <stop offset="100%" stopColor="#3a3f50" />
            </linearGradient>
          </defs>

          {/* light: halo + cone */}
          <g
            className={`fl-light ${pulling ? "pulling" : ""}`}
            style={{ opacity: on ? 1 : 0, transition: "opacity .4s ease" }}
          >
            <circle cx="80" cy="96" r="78" fill="url(#fl-halo)" />
            <polygon points="48,100 112,100 156,214 4,214" fill="url(#fl-cone)" />
          </g>

          {/* base + stem */}
          <ellipse cx="80" cy="206" rx="34" ry="8" fill="url(#fl-base)" />
          <rect x="77.5" y="104" width="5" height="100" rx="2.5" fill="url(#fl-base)" />

          {/* bulb */}
          <circle
            cx="80"
            cy="102"
            r="8"
            style={{
              fill: on ? "#fff3c4" : "#5b6275",
              filter: on ? "drop-shadow(0 0 8px #ffd36a)" : "none",
              transition: "fill .3s ease",
            }}
          />

          {/* shade */}
          <path
            d="M46 100 L62 42 Q80 34 98 42 L114 100 Q80 108 46 100 Z"
            fill={on ? "url(#fl-shade-on)" : "url(#fl-shade-off)"}
            stroke={on ? "#b9791a" : "#4a5063"}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <ellipse cx="62" cy="62" rx="3" ry="14" fill="#fff" opacity={on ? 0.35 : 0.1} transform="rotate(12 62 62)" />
          <circle cx="80" cy="34" r="3.5" fill={on ? "#b9791a" : "#4a5063"} />

          {/* pull chain */}
          <g className="fl-chain-hit">
            <g className={`fl-chain ${pulling ? "pulling" : ""}`}>
              <line className="fl-chain-line" x1="108" y1="92" x2="108" y2="132" stroke="#9aa2b8" strokeWidth="1.6" strokeDasharray="2 2" />
              <circle cx="108" cy="136" r="4.5" fill="#6c7bff" stroke="#fff" strokeOpacity=".5" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}