export default function WorkPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 md:px-10">
      <div className="mb-16">
        <p className="mb-4 font-mono text-sm text-muted">
          ~/work
        </p>

        <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
          Things I&apos;ve worked on.
        </h1>

        <p className="mt-6 max-w-xl text-muted">
          I work across hardware and software, building systems from
          the physical electronics all the way to the applications that
          control and connect them.
        </p>
      </div>

      <div className="divide-y divide-border border-y border-border">
        <article className="grid gap-6 py-10 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-sm text-muted">
            Aug 2025 — Oct 2025
          </p>
 <p className="font-mono text-sm text-muted">
           Autosync
          </p>
          <div>
            <h2 className="text-2xl font-semibold">
            Fullstack Developer
            </h2>

        <ul className="mt-3 max-w-2xl space-y-4 leading-7 text-muted">
  <li className="flex gap-3">
    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
    <span>
      Designed, developed, and optimized multiple RESTful APIs to
      improve system performance, scalability, and reliability.
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
    <span>
      Gained extensive hands-on experience with MQTT, Firebase,
      Express.js, React.js, Postman, and Node.js, building and
      rigorously testing real-time, scalable applications.
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
    <span>
      Developed the IconSelector application using React and TypeScript,
      enabling users to design customizable panel variants based on
      their preferences and export finalized configurations as PDF files.
    </span>
  </li>
</ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["MQTT", "Python", "Javascript", "Node.js","Express.js","Next.js","Firebase"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </article>

        

        <article className="grid gap-6 py-10 md:grid-cols-[180px_1fr]">
           <p className="font-mono text-sm text-muted">
            Oct 2025 — Present
          </p>
 <p className="font-mono text-sm text-muted">
            Celusion Technologies
          </p>
          <div>
            <h2 className="text-2xl font-semibold">
             Software Engineer
            </h2>

           <ul className="mt-3 max-w-2xl space-y-4 leading-7 text-muted">
  <li>
    Developed and maintained enterprise-grade applications using C#,
    ASP.NET Core, Vue.js, SQL Server, HTML, RabbitMQ, and Postman,
    delivering scalable backend systems and high-quality software solutions.
  </li>

  <li>
    Designed and integrated RESTful APIs, optimized database interactions,
    and built secure, modular architectures to improve application
    performance, maintainability, and cross-service communication.
  </li>

  <li>
    Contributed to the development, deployment, and support of real-time
    production applications by delivering new features, resolving complex
    technical challenges, and improving system reliability and user
    experience.
  </li>

  <li>
    Collaborated directly with clients to troubleshoot and resolve issues
    across UAT and production environments, ensuring timely bug fixes,
    smooth releases, and improved end-user experience.
  </li>
</ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["APIs", "Docker", "C#", "Vue.js","Asp.Net Core","Linux","Javascript","SQL Server","MySql"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}