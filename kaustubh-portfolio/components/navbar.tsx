"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

 
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
          scrolled ? "border-border bg-bg/80 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="font-mono text-sm text-text">
            <span className="text-muted">~/</span>Kaustubh Thakur
          </Link>

          {/* desktop links */}
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

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
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

      {/* mobile panel */}
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

        <div className="absolute bottom-8 left-6">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}