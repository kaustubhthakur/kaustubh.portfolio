export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:text-left">
      <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-muted md:h-56 md:w-56">
        {/* 3D profile picture will replace this */}
        [ 3d avatar ]
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-mono text-sm text-accent">~/hello</p>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          I&apos;m Your Name, a developer who builds things for the web.
        </h1>
        <p className="max-w-xl text-muted">
          Short intro about what you do, what you're into, and what you're
          currently working on. Two or three sentences, written like you'd
          say it out loud.
        </p>
      </div>
    </section>
  );
}