export default function ContactPage() {
  const links = [
    {
      label: "GitHub",
      handle: "kaustubhthakur",
      href: "https://github.com/kaustubhthakur",
      description: "Code, projects & experiments",
    },
    {
      label: "LinkedIn",
      handle: "Kaustubh Thakur",
      href: "https://www.linkedin.com/in/kaustubh-thakur-a8734722a/",
      description: "Professional profile",
    },
    {
      label: "Chess.com",
      handle: "magnificentsteiner17",
      href: "https://www.chess.com/member/magnificentsteiner17",
      description: "Chess & strategy",
    },
    {
      label: "Codeforces",
      handle: "Nameless_Monster03",
      href: "https://codeforces.com/profile/Nameless_Monster03",
      description: "Competitive programming",
    },
    {
      label: "LeetCode",
      handle: "kaustubhthakur",
      href: "https://leetcode.com/u/kaustubhthakur/",
      description: "Algorithms & data structures",
    },
    {
      label: "AtCoder",
      handle: "Nameless_Monster",
      href: "https://atcoder.jp/users/Nameless_Monster",
      description: "Competitive programming",
    },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-16 pt-24 md:px-10">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pb-16">
        {/* subtle background detail */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              ~/contact
            </p>
          </div>

          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-text md:text-7xl">
            Let&apos;s build
            <br />
         
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I&apos;m always interested in interesting problems across
            hardware and software. If you have an idea, a product,
            or a technical challenge, let&apos;s talk.
          </p>

          {/* Email */}
          <div className="mt-10">
            <a
              href="mailto:kaustubhthakur66@gmail.com"
              className="group inline-flex items-center gap-4 rounded-lg border border-border bg-bg/60 px-5 py-4 font-mono text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,255,255,0.25)]" />

              <span className="text-text">
                kaustubhthakur66@gmail.com
              </span>

              <span className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Online presence */}
      <section className="pt-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Find me online
            </p>

            <p className="mt-2 text-sm text-muted">
              Code, work, and things I&apos;m building.
            </p>
          </div>

          <span className="hidden font-mono text-xs text-muted sm:block">
            06 links
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-lg border border-border bg-bg/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-muted/5"
            >
              {/* index */}
              <span className="absolute right-4 top-4 font-mono text-[10px] text-muted/40">
                0{index + 1}
              </span>

              <div className="flex min-h-[120px] flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-60 transition-opacity group-hover:opacity-100" />

                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {link.label}
                    </p>
                  </div>

                  <p className="mt-4 break-all text-sm font-medium text-text">
                    {link.handle}
                  </p>

                  <p className="mt-1.5 text-xs text-muted">
                    {link.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted/50 transition-colors group-hover:text-accent">
                    visit profile
                  </span>

                  <span className="text-sm text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="mt-16 border-t border-border pt-7">
        <div className="flex flex-col justify-between gap-3 text-xs text-muted sm:flex-row">
          <p className="font-mono">
            Mumbai,Maharastra
          </p>

          <p className="font-mono">
            Hardware × Software × Engineering
          </p>
        </div>
      </section>
    </main>
  );
}