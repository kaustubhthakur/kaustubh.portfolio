export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 md:px-10">
      <div className="max-w-3xl">
        <p className="mb-4 font-mono text-sm text-muted">
          ~/contact
        </p>

        <h1 className="text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">
          Let&apos;s build something.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          Have an idea, a project, or just want to talk engineering?
          I&apos;m always interested in interesting problems across
          hardware and software.
        </p>

        <a
          href="mailto:your@email.com"
          className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 font-mono text-sm transition-opacity hover:opacity-60"
        >
          your@email.com
          <span>↗</span>
        </a>
      </div>

      <div className="mt-24 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase text-muted">
            Email
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-3 block hover:underline"
          >
            your@email.com
          </a>
        </div>

        <div>
          <p className="font-mono text-xs uppercase text-muted">
            GitHub
          </p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="mt-3 block hover:underline"
          >
            github.com/yourusername
          </a>
        </div>

        <div>
          <p className="font-mono text-xs uppercase text-muted">
            LinkedIn
          </p>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="mt-3 block hover:underline"
          >
            linkedin.com/in/yourusername
          </a>
        </div>
      </div>
    </main>
  );
}