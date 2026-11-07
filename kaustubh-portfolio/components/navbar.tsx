"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pulling, setPulling] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // dark theme = lamp OFF, light theme = lamp ON
  const isLight = mounted && theme === "light";

  // Applies the theme without any library: class + data-theme + color-scheme
  const applyTheme = (t: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(t);
    root.setAttribute("data-theme", t);
    root.style.colorScheme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {}
  };

  const toggleTheme = () => {
    const next = isLight ? "dark" : "light";
    setPulling(true);
    setTheme(next);
    applyTheme(next);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
    setTimeout(() => setPulling(false), 600);
  };

  // Load saved theme on first render (default: dark)
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);

    // stay in sync with the floating lamp on the homepage
    const onChange = (e: Event) => setTheme((e as CustomEvent<"light" | "dark">).detail);
    window.addEventListener("theme-change", onChange);
    return () => window.removeEventListener("theme-change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lamp button as a plain render function (not a component).
  // `uid` keeps SVG gradient ids unique since it's rendered twice.
  const lampButton = (uid: string) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg/60 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
    >
      <svg viewBox="0 0 48 48" className="h-8 w-8 overflow-visible" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-cone`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd36a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd36a" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${uid}-halo`}>
            <stop offset="0%" stopColor="#ffd36a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffd36a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Light cone + halo (only when ON) */}
        <g
          className={`lamp-glow ${isLight ? "on" : ""} ${pulling ? "pulling" : ""}`}
          style={{ opacity: isLight ? 1 : 0, transition: "opacity .35s ease" }}
        >
          <circle cx="24" cy="20" r="20" fill={`url(#${uid}-halo)`} />
          <polygon points="15,22 33,22 46,50 2,50" fill={`url(#${uid}-cone)`} />
        </g>

        {/* Base + stem */}
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text">
          <path d="M14 42 H34" />
          <path d="M24 42 V24" />
        </g>

        {/* Head: bulb + shade + chain (swings from stem top) */}
        <g
          className={`lamp-head ${pulling ? "pulling" : ""}`}
          style={{ transformOrigin: "24px 24px" }}
        >
          <circle
            cx="24"
            cy="21"
            r="3"
            className="text-text"
            style={{
              fill: isLight ? "#ffd36a" : "transparent",
              stroke: "currentColor",
              strokeWidth: 1.5,
              transition: "fill .3s ease",
            }}
          />
          <path
            d="M14 22 L19 8 H29 L34 22 Z"
            strokeWidth="2"
            strokeLinejoin="round"
            className="text-text"
            style={{
              stroke: "currentColor",
              fill: isLight ? "rgba(255, 211, 106, 0.25)" : "transparent",
              transition: "fill .3s ease",
            }}
          />
          <g className={`lamp-chain ${pulling ? "pulling" : ""}`}>
            <line x1="31" y1="15" x2="31" y2="26" stroke="currentColor" strokeWidth="1.2" className="text-muted" />
            <circle cx="31" cy="27.5" r="1.6" fill="currentColor" className="text-accent" />
          </g>
        </g>
      </svg>
    </button>
  );

  return (
    <>
      {/* Lamp animations */}
      <style>{`
        @keyframes lamp-chain-pull {
          0%   { transform: translateY(0); }
          40%  { transform: translateY(3.5px); }
          100% { transform: translateY(0); }
        }
        @keyframes lamp-shade-swing {
          0%   { transform: rotate(0deg); }
          30%  { transform: rotate(-5deg); }
          65%  { transform: rotate(3deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes lamp-flicker {
          0%, 100% { opacity: 1; }
          20% { opacity: .55; }
          40% { opacity: 1; }
          55% { opacity: .75; }
        }
        .lamp-chain.pulling { animation: lamp-chain-pull .35s ease-out; }
        .lamp-head.pulling  { animation: lamp-shade-swing .6s ease-out; }
        .lamp-glow.on.pulling { animation: lamp-flicker .35s linear; }
        @media (prefers-reduced-motion: reduce) {
          .lamp-chain.pulling, .lamp-head.pulling, .lamp-glow.on.pulling { animation: none; }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
          scrolled ? "border-border bg-bg/80 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="font-mono text-sm text-text">
            <span className="text-muted">~/</span>Kaustubh Thakur
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative font-mono text-sm transition-colors hover:text-text ${
                      isActive ? "text-text" : "text-muted"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop theme + mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">{lampButton("lamp-desktop")}</div>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center text-text md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-50 bg-bg transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-mono text-sm text-muted">~/menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center text-text"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-6 pt-8">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                className={`transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  className={`block py-3 font-display text-3xl font-medium ${
                    isActive ? "text-accent" : "text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile theme toggle */}
        <div className="absolute bottom-8 left-6">{lampButton("lamp-mobile")}</div>
      </div>
    </>
  );
}