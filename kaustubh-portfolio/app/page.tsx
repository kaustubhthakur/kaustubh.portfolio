import Link from "next/link";
import { Mail, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/github-icon";
import Profile3D from "@/components/profile-3d-client";

const socials = [
  { icon: GithubIcon, href: "https://github.com/kaustubhthakur", label: "GitHub" },
  { icon: Mail, href: "mailto:kaustubhthakur66@gmail.com", label: "Email" },
];

export default function HomePage() {
  return (
    <>
      {/* full-page particle background — fixed behind everything, clicks pass through */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_0%,black_25%,white_75%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black_0%,black_25%,white_75%)]">
        <Profile3D />
      </div>

      <section className="mx-auto flex min-h-[calc(100vh-4rem-4.5rem)] max-w-5xl flex-col justify-center px-6 py-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="font-mono text-sm text-accent">~/Kaustubh Thakur</p>

         <h1 className="max-w-xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
  I&apos;m Kaustubh, an engineer who builds across hardware and software.
</h1>

<p className="max-w-md text-muted">
  I design and build things end to end — from electronics and embedded
  systems to applications and software. I enjoy turning ideas into
  real, working products.
</p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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

        <div className="mt-16 flex justify-center md:mt-24">
          <ArrowDown size={16} className="animate-bounce text-muted" />
        </div>
      </section>
    </>
  );
}