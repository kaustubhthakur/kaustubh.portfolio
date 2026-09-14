const projects = [
{
    number: "01",
    title: "Nond",
    description: [
      "Built a full-stack inventory management platform for small retailers, enabling store onboarding, product and warehouse management, shelf- and box-level inventory tracking, supplier and customer management, and purchase, sale, and stock-adjustment transactions.",

      "Designed an AI-driven business intelligence layer that analyzes transaction history and inventory data to generate monthly insights, demand predictions, and stock alerts, supported by dashboards, reports, and Firebase push notifications for vendors.",
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "AI",
      "Inventory",
    ],
    github: "https://github.com/kaustubhthakur/Nond",
  },
 {
    number: "02",
    title: "EigenX",
   description: [
  "Developed a Mental Math application with three difficulty levels and a real-time multiplayer duel feature, enabling users to improve calculation speed and accuracy by competing with friends or randomly matched opponents in a gamified environment.",

  "Implemented a dynamic ranking dashboard and user profile system featuring ranking levels, user statistics, performance tracking, and other personalized insights.",
],
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Postgresql",
      "SQL",
      "Typescript",
      "Javascript",
      "Websockets",
    ],
    github: "https://github.com/kaustubhthakur/EigenX",
  },
  {
    number: "03",
    title: "FootBuzz",
 description: [
  "Developed a football prediction application that analyzes match data to forecast winning outcomes and goal projections using XGBoost and Logistic Regression models.",

  "Implemented secure authentication, multi-league support, and community-driven features that allow users to vote on predicted match winners, share predictions, and engage with insights from other users.",
],
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Postgresql",
      "SQL",
      "Typescript",
      "Javascript",
      "Websockets",
      "Python",
      "Numpy",
      "Pandas"
    ],
    github: "https://github.com/kaustubhthakur/trendcast",
  },{
    number: "04",
    title: "QuickCache",
 description: [
  "Developed an in-memory key-value database in Go that supports concurrent access from multiple clients, implementing efficient data storage and retrieval while ensuring thread-safe operations under high request volumes.",

  "Implemented a TCP server that binds to a designated port, accepts multiple client connections, and handles concurrent requests to enable reliable client-server communication.",
],
    tags: [
     "Golang"
    ],
    github: "https://github.com/kaustubhthakur/redis",
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

        <p className="mt-6 max-w-xl leading-7 text-muted">
          A collection of experiments, products, and systems I&apos;ve
          built while exploring the intersection of hardware and software.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group rounded-2xl border border-border p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-muted/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-muted">
                {project.number}
              </span>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs transition-all hover:bg-foreground hover:text-background"
              >
                GitHub
                <span className="text-sm">↗</span>
              </a>
            </div>

            {/* Project */}
            <h2 className="mt-12 text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-3 max-w-md leading-7 text-muted">
              {project.description}
            </p>

            {/* Technologies */}
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