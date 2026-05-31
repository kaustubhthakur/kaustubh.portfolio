"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Linux",
  "Python",
  "GraphQL",
  "Tailwind CSS",
  "SQL",
  "Git",
  "C#",
  "ASP.NET Core",
  "JavaScript",
  "SQL Server",
  "C++",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "12+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="section-label"
        style={{ marginBottom: "1rem" }}
      >
        01 — About me
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            I build things that{" "}
            <span style={{ color: "var(--accent)" }}>matter.</span>
          </motion.h2>

          {[
            "I'm a full-stack developer with a passion for building products at the intersection of design and engineering. I care deeply about performance, accessibility, and the details that separate good from great.",
            "Outside of code, you'll find me contributing to open source, writing about developer experience, and exploring the mountains on weekends.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
              }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginTop: "2rem" }}
          >
            <p
              className="mono"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Technologies
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  style={{
                    background: "var(--tag-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.2rem",
                    padding: "0.3rem 0.75rem",
                    fontSize: "0.78rem",
                    fontFamily: "'DM Mono', monospace",
                    color: "var(--text-secondary)",
                    transition: "border-color 0.2s, color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, var(--accent-glow) 0%, transparent 60%)",
              }}
            />
            <span
              className="mono"
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                position: "relative",
              }}
            >
              [ your photo ]
            </span>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {value}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}