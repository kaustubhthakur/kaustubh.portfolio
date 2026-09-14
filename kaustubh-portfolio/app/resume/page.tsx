import Link from "next/link";
import { ArrowLeft, Download, Eye } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} />
              back home
            </Link>

            <p className="font-mono text-sm text-accent">
              ~/resume
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Resume
            </h1>

            <p className="mt-3 max-w-xl text-muted">
              View my resume directly in your browser or download a PDF copy.
            </p>
          </div>

          {/* Resume actions */}
          <div className="flex items-center gap-3">
            {/* View */}
            <a
              href="#resume-viewer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent"
            >
              <Eye size={16} />
              view
            </a>

            {/* Download */}
            <a
              href="/kaustubh.thakur.pdf"
              download="Kaustubh-Thakur-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-text px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-85"
            >
              <Download size={16} />
              download
            </a>
          </div>
        </div>

        {/* Resume viewer */}
        <section
          id="resume-viewer"
          className="overflow-hidden rounded-xl border border-border bg-bg shadow-2xl"
        >
          <iframe
            src="/kaustubh.thakur.pdf"
            title="Kaustubh Thakur Resume"
            className="h-[80vh] min-h-[700px] w-full"
          />
        </section>
      </div>
    </main>
  );
}