import Link from "next/link";
import {  Mail, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/github-icon";

const socials = [
  { icon: GithubIcon, href: "https://github.com/your-username", label: "GitHub" },
  { icon: GithubIcon, href: "https://linkedin.com/in/your-username", label: "LinkedIn" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
];

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem-4.5rem)] max-w-5xl flex-col justify-center px-6 py-16">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="relative shrink-0">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-border md:h-64 md:w-64">
            <div className="flex h-full w-full items-center justify-center bg-border/30 font-mono text-xs text-muted">
              [ photo ]
            </div>
          </div>

          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-bg px-3 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-text">open to work</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <p className="font-mono text-sm text-accent">~/hello</p>

          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            I&apos;m Your Name,
            <br className="hidden md:block" /> a developer who builds
            things for the web.
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