import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/github-icon";
import Profile3D from "@/components/profile-3d-client";

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/kaustubhthakur",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:kaustubhthakur66@gmail.com",
    label: "Email",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Full-page particle background */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_0%,black_25%,white_75%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_0%,black_25%,white_75%)]">
        <Profile3D />
      </div>

      <section className="mx-auto flex min-h-[calc(100vh-4rem-4.5rem)] max-w-6xl flex-col justify-center px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:gap-16">

          {/* ===================================== */}
          {/* LEFT — INTRO */}
          {/* ===================================== */}

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="font-mono text-sm text-accent">
              ~/Kaustubh Thakur
            </p>

            <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              I&apos;m Kaustubh, an engineer who builds across hardware and
              software.
            </h1>

            <p className="mt-6 max-w-xl text-muted">
              I design and build things end to end — from electronics and
              embedded systems to applications and software. I enjoy turning
              ideas into real, working products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
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

            {/* Socials */}
            <div className="mt-6 flex items-center gap-5">
              {socials.map(
                ({ icon: Icon, href, label }) => (
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
                )
              )}
            </div>
          </div>

          {/* ===================================== */}
          {/* RIGHT — LEVITATING PROFILE */}
          {/* ===================================== */}

          <div className="relative flex items-center justify-center md:justify-end">
            {/* Ambient glow behind portrait */}
            <div className="absolute h-64 w-64 rounded-full bg-accent/10 blur-3xl md:h-80 md:w-80" />

            {/* Floating portrait */}
            <div className="relative animate-[levitate_5s_ease-in-out_infinite]">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border/70 bg-bg/40 shadow-2xl backdrop-blur-sm md:h-72 md:w-72 lg:h-80 lg:w-80">

                <Image
                  src="/kaustubh.jpg"
                  alt="Kaustubh Thakur"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* Small floating accent */}
              <div className="absolute -right-3 top-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(83,109,255,0.8)]" />

              <div className="absolute -bottom-2 -left-3 h-2 w-2 rounded-full bg-accent/70" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center md:mt-24">
          <ArrowDown
            size={16}
            className="animate-bounce text-muted"
          />
        </div>
      </section>
    </>
  );
}