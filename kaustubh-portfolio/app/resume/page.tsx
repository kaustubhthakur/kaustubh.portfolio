import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 pb-16 pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Top navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            back home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              ~/resume
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text md:text-6xl">
              Resume
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted md:text-base">
              A concise overview of my experience, technical skills,
              projects, and education.
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="/kaustubh.thakur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 font-mono text-xs text-text transition-all duration-200 hover:border-accent hover:text-accent"
            >
              <ExternalLink size={15} />
              open pdf
            </a>

            <a
              href="/kaustubh.thakur.pdf"
              download="Kaustubh-Thakur-Resume.pdf"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-text px-4 font-mono text-xs text-bg transition-opacity duration-200 hover:opacity-85"
            >
              <Download size={15} />
              download
            </a>
          </div>
        </div>

        {/* Resume viewer */}
        <section
          id="resume-viewer"
          className="relative overflow-hidden rounded-xl border border-border bg-[#171717] shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
        >
          {/* Viewer header */}
          <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />

              <span className="font-mono text-[11px] text-white/60">
                kaustubh.thakur.pdf
              </span>
            </div>

            <span className="font-mono text-[10px] uppercase tracking-wider text-white/30">
              resume
            </span>
          </div>

          {/* PDF */}
          <div className="bg-[#202020] p-2 sm:p-4 md:p-6">
            <iframe
              src="/kaustubh.thakur.pdf"
              title="Kaustubh Thakur Resume"
              className="h-[75vh] min-h-[650px] w-full rounded-md border border-white/5 bg-white"
            />
          </div>
        </section>

        {/* Bottom information */}
        <div className="mt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            PDF · Updated resume
          </p>

          <a
            href="/kaustubh.thakur.pdf"
            download="Kaustubh-Thakur-Resume.pdf"
            className="font-mono transition-colors hover:text-accent"
          >
            download a copy →
          </a>
        </div>
      </div>
    </main>
  );
}