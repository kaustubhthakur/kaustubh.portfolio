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
      description: "Chess",
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
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 md:px-10">
      {/* Hero */}
      <section className="max-w-3xl">
        <p className="mb-5 font-mono text-sm text-muted">
          ~/contact
        </p>

        <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Let&apos;s build something
          <br />
          <span className="text-muted">worth building.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
          I&apos;m always interested in interesting problems across
          hardware and software. Whether it&apos;s an idea, a product,
          or a technical challenge, feel free to reach out.
        </p>

        {/* Email CTA */}
        <div className="mt-10">
          <a
            href="mailto:kaustubhthakur66@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 font-mono text-sm transition-all duration-200 hover:bg-foreground hover:text-background"
          >
            <span>kaustubhthakur66@gmail.com</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* Links */}
      <section className="mt-24 border-t border-border pt-10">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Find me online
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {link.label}
                  </p>

                  <p className="mt-3 break-all text-sm font-medium">
                    {link.handle}
                  </p>

                  <p className="mt-2 text-sm text-muted">
                    {link.description}
                  </p>
                </div>

                <span className="shrink-0 text-lg text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom */}
      <section className="mt-20 border-t border-border pt-8">
        <div className="flex flex-col justify-between gap-4 text-sm text-muted md:flex-row">
          <p className="font-mono">
            Based in India
          </p>

          <p className="font-mono">
            Hardware × Software × Engineering
          </p>
        </div>
      </section>
    </main>
  );
}