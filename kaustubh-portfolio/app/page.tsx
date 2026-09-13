import Link from "next/link";
import {  Mail, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/github-icon";
import Profile3D from "@/components/profile-3d-client";

const socials = [
  { icon: GithubIcon, href: "https://github.com/your-username", label: "GitHub" },
  { icon: GithubIcon, href: "https://linkedin.com/in/your-username", label: "LinkedIn" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
];

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem-4.5rem)] max-w-5xl flex-col justify-center px-6 py-16">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        {/* 3D scene — floating, no frame */}
        <div className="relative h-64 w-64 shrink-0 md:h-80 md:w-80">
          <Profile3D />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center md:items-start md:text-left">
          <p className="font-mono text-sm text-accent">~/hello</p>

          <h1 className="max-w-xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
            I&apos;m Your Name, a developer who builds things for the web.
          </h1>

          <p className="max-w-md text-muted">
            I design and build fast, accessible web apps end to end —
            from interface to infrastructure. Currently focused on
            [what you&apos;re into right now].
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
            <Link
              href="/projects"
              className="rounded-md bg-text px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-85"
            >
              view my work
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent"
            >
              get in touch
            </Link>
          </div>

          <div className="flex items-center gap-5 pt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center md:mt-24">
        <ArrowDown size={16} className="animate-bounce text-muted" />
      </div>
    </section>
  );
}