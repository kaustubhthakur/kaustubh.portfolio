"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Vercel",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    description:
      "Lead the developer experience team building the Next.js dashboard and analytics platform. Reduced bundle size by 40% and improved Core Web Vitals across the board.",
    stack: ["Next.js", "TypeScript", "Turborepo", "Rust"],
    current: true,
  },
  {
    company: "Stripe",
    role: "Full-Stack Engineer",
    period: "2021 — 2023",
    location: "Dublin, Ireland",
    description:
      "Built and scaled payment infrastructure powering millions of transactions. Designed the new developer docs platform used by 500k+ developers worldwide.",
    stack: ["React", "Ruby", "PostgreSQL", "Redis"],
    current: false,
  },
  {
    company: "Shopify",
    role: "Software Developer",
    period: "2019 — 2021",
    location: "Ottawa, Canada",
    description:
      "Developed merchant-facing tools for the Admin platform. Shipped A/B tested features that increased merchant conversion rates by 18%.",
    stack: ["React", "GraphQL", "Rails", "MySQL"],
    current: false,
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2017 — 2019",
    location: "Remote",
    description:
      "Designed and built 20+ websites and web apps for startups and agencies across Europe. Specialized in performance-focused React applications.",
    stack: ["React", "Node.js", "MongoDB", "Figma"],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
          style={{ marginBottom: "1rem" }}
        >
          02 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "4rem",
          }}
        >
          Where I've <span style={{ color: "var(--accent)" }}>worked.</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                style={{
                  position: "relative",
                  paddingLeft: "3rem",
                  paddingBottom: i < experiences.length - 1 ? "3.5rem" : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -5,
                    top: 6,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: exp.current ? "var(--accent)" : "var(--bg-secondary)",
                    border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                    boxShadow: exp.current ? "0 0 12px var(--accent-glow)" : "none",
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.5rem",
                    padding: "1.75rem",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <h3
                          style={{
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="mono"
                            style={{
                              fontSize: "0.6rem",
                              background: "var(--accent-glow)",
                              color: "var(--accent)",
                              border: "1px solid var(--accent)",
                              borderRadius: "1rem",
                              padding: "0.15rem 0.6rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        className="mono"
                        style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                      >
                        {exp.period}
                      </p>
                      <p
                        className="mono"
                        style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "var(--tag-bg)",
                          border: "1px solid var(--border)",
                          borderRadius: "0.15rem",
                          padding: "0.2rem 0.6rem",
                          fontSize: "0.72rem",
                          fontFamily: "'DM Mono', monospace",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}