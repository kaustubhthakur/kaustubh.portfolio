"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics platform processing 10M+ events/day. Built with Next.js, WebSockets, and ClickHouse for sub-second query performance.",
    stack: ["Next.js", "TypeScript", "ClickHouse", "Redis", "WebSockets"],
    links: { github: "#", live: "#" },
    featured: true,
    color: "#e8d5b0",
  },
  {
    number: "02",
    title: "FlowCMS",
    description:
      "A headless CMS with a visual block editor, real-time collaboration, and one-click deployment integrations. Used by 3,000+ content teams.",
    stack: ["React", "Node.js", "PostgreSQL", "S3", "Stripe"],
    links: { github: "#", live: "#" },
    featured: true,
    color: "#b0c8e8",
  },
  {
    number: "03",
    title: "Pulsar CLI",
    description:
      "Developer toolchain for automating cloud deployments. Reduced deploy pipelines from 45 minutes to under 8 with smart caching and parallelization.",
    stack: ["Rust", "Docker", "GitHub Actions", "Terraform"],
    links: { github: "#", live: null },
    featured: false,
    color: "#c8e8b0",
  },
  {
    number: "04",
    title: "Lens Design System",
    description:
      "Open-source component library with 60+ accessible components, dark/light themes, and Figma token sync. 2k+ GitHub stars.",
    stack: ["React", "Storybook", "Radix UI", "CSS-in-JS"],
    links: { github: "#", live: "#" },
    featured: false,
    color: "#e8b0c8",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} style={{ padding: "8rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
          style={{ marginBottom: "1rem" }}
        >
          03 — Selected Work
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
          Things I've <span style={{ color: "var(--accent)" }}>built.</span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "1.5rem",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "default",
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = project.color + "80")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
              }
            >
              {/* Number watermark */}
              <span
                className="mono"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "var(--border)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {project.number}
              </span>

              {/* Accent line */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  background: project.color,
                  borderRadius: 2,
                  marginBottom: "1.25rem",
                }}
              />

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.75rem",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontSize: "0.88rem",
                  marginBottom: "1.5rem",
                  maxWidth: "90%",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "var(--tag-bg)",
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

              <div style={{ display: "flex", gap: "1rem" }}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    <ExternalLink size={14} />
                    Live site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}