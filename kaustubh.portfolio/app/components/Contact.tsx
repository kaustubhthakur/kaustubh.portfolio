"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "0.35rem",
    padding: "0.85rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "'Syne', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Let's work{" "}
          <span style={{ color: "var(--accent)" }}>together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 500,
            marginBottom: "4rem",
            fontSize: "0.95rem",
          }}
        >
          Open to full-time roles and interesting
          conversations. My inbox is always open.
        </motion.p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}
          className="contact-grid"
        >
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "var(--border)")
                  }
                />
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "var(--border)")
                  }
                />
              </div>
            </div>

            <div>
              <label
                className="mono"
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "var(--border)")
                }
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                background: sent ? "#2a4a2a" : "var(--accent)",
                color: sent ? "#6fcf6f" : "#0a0a0a",
                border: "none",
                borderRadius: "0.35rem",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.02em",
                transition: "background 0.3s, color 0.3s",
                alignSelf: "flex-start",
              }}
            >
              {sent ? (
                "Message sent ✓"
              ) : (
                <>
                  Send message
                  <Send size={14} />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "kaustubhthakur66@gmail.com",
                href: "mailto:kaustubhthakur66@gmail.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Mumbai,Maharastra",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "0.35rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <p
                    className="mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                      }
                    >
                      {value}
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.9rem" }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

        
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: 1000,
          margin: "5rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
        >
          © 2026 Kaustubh Thakur
        </span>
       
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}