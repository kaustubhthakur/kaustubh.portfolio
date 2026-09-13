const projects = [
  {
    number: "01",
    title: "Project One",
    description:
      "A hardware and software system built to solve a real-world problem from the ground up.",
    tags: ["Hardware", "Embedded", "Software"],
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "An application focused on making complex information simple, fast, and accessible.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "An experimental system combining electronics, firmware, and a custom application.",
    tags: ["IoT", "Electronics", "Python"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 md:px-10">
      <div className="mb-16">
        <p className="mb-4 font-mono text-sm text-muted">
          ~/projects
        </p>

        <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
          Things I&apos;ve built.
        </h1>

        <p className="mt-6 max-w-xl text-muted">
          A collection of experiments, products, and systems I&apos;ve
          built while exploring the intersection of hardware and software.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group rounded-2xl border border-border p-6 transition-colors hover:bg-muted/30"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-muted">
                {project.number}
              </span>

              <span className="text-xl transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <h2 className="mt-12 text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-3 leading-7 text-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}