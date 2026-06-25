import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Projects", "Skills", "Experience", "About", "Contact"];

const PROJECTS = [
  {
    tag: "SQL · Tableau",
    year: "2024",
    title: "E-Commerce Revenue Dashboard",
    desc: "End-to-end analysis of 500K+ transactions. Identified top revenue segments and reduced churn by 18% through behavioral cohort analysis.",
    metrics: ["↑ 18% Retention", "↓ 23% Churn", "500K+ Rows"],
    color: "#00E5A0",
  },
  {
    tag: "Python · Looker",
    year: "2024",
    title: "Supply Chain Demand Forecasting",
    desc: "Built predictive model using ARIMA & XGBoost to forecast monthly demand. Achieved 92% accuracy across 40 product categories.",
    metrics: ["92% Accuracy", "40 SKUs", "ARIMA + XGBoost"],
    color: "#5B8DFF",
  },
  {
    tag: "R · Power BI",
    year: "2023",
    title: "Customer Segmentation Engine",
    desc: "K-Means clustering on 200K+ customer profiles to build 6 distinct personas, enabling hyper-targeted campaigns with 3.4x ROI lift.",
    metrics: ["6 Segments", "3.4x ROI", "200K+ Profiles"],
    color: "#FFB547",
  },
  {
    tag: "Python · Streamlit",
    year: "2023",
    title: "Real-time Fraud Detection System",
    desc: "Deployed ML pipeline to flag suspicious transactions in <200ms. Reduced false positives by 41% while maintaining 99.2% precision.",
    metrics: ["<200ms Latency", "99.2% Precision", "↓ 41% FP"],
    color: "#FF6B6B",
  },
];

const SKILLS = [
  { category: "Languages", items: ["Python", "SQL", "R", "Bash"] },
  { category: "Visualization", items: ["Tableau", "Power BI", "Looker", "Streamlit", "D3.js"] },
  { category: "Data Engineering", items: ["Spark", "Airflow", "dbt", "BigQuery", "PostgreSQL"] },
  { category: "Machine Learning", items: ["Scikit-learn", "XGBoost", "TensorFlow", "ARIMA", "Prophet"] },
  { category: "Cloud & Tools", items: ["GCP", "AWS S3", "Docker", "Git", "Jupyter"] },
];

const EXPERIENCES = [
  {
    org: "BEM Universitas Indonesia",
    role: "Head of Data & Research Division",
    period: "2023 – Present",
    desc: "Led a 12-person team producing policy research briefs. Developed dashboards tracking university KPIs used by executive board for strategic decisions.",
    tags: ["Leadership", "Research", "Dashboarding"],
  },
  {
    org: "HIMASTA — Statistics Student Association",
    role: "Data Analytics Committee",
    period: "2022 – 2023",
    desc: "Organized national data competition with 300+ participants. Mentored 40+ junior analysts in Python and visualization fundamentals.",
    tags: ["Event", "Mentoring", "Python"],
  },
  {
    org: "Google Developer Student Club UI",
    role: "Machine Learning Core Team",
    period: "2022 – 2023",
    desc: "Facilitated ML study sessions for 80+ members. Built and deployed end-to-end ML projects as learning case studies.",
    tags: ["ML", "Teaching", "Community"],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(5,12,28,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.35s ease",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.5px",
        }}>
          <span style={{ color: "#00E5A0" }}>{"<"}</span>
          YourName
          <span style={{ color: "#00E5A0" }}>{">"}</span>
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.65)", fontSize: 13.5,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                padding: "6px 14px", borderRadius: 8,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                e.target.style.color = "#fff";
                e.target.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={e => {
                e.target.style.color = "rgba(255,255,255,0.65)";
                e.target.style.background = "none";
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [tick, setTick] = useState(0);
  const roles = ["Data Analyst", "BI Developer", "ML Engineer", "Data Storyteller"];
  useEffect(() => {
    const t = setInterval(() => setTick(x => (x + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,70,50,0.45) 0%, transparent 70%), #050C1C",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "0 2rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Dot grid background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />
      {/* Glowing orbs */}
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%)",
        top: "5%", left: "10%", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(91,141,255,0.1) 0%, transparent 70%)",
        bottom: "15%", right: "8%", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.25)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 32,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E5A0", boxShadow: "0 0 6px #00E5A0" }} />
          <span style={{ fontSize: 13, color: "#00E5A0", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>
            Open to opportunities
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
          fontWeight: 800, lineHeight: 1.08,
          color: "#fff", margin: "0 0 16px",
          letterSpacing: "-2px",
        }}>
          Welcome to my<br />
          <span style={{
            background: "linear-gradient(135deg, #00E5A0 0%, #5B8DFF 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            digital abode
          </span>
        </h1>

        <div style={{
          fontSize: "clamp(1rem, 2vw, 1.3rem)",
          color: "rgba(255,255,255,0.55)",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: 40, minHeight: 36,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <span>I'm a</span>
          <span style={{
            color: "#00E5A0", fontWeight: 600,
            borderBottom: "2px solid rgba(0,229,160,0.4)",
            paddingBottom: 2,
            transition: "opacity 0.4s",
          }}>
            {roles[tick]}
          </span>
          <span>turning data into decisions.</span>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#00E5A0", color: "#050C1C",
              border: "none", borderRadius: 10, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
              fontSize: 15, padding: "14px 32px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(0,229,160,0.35)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
          >
            View Projects →
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              fontSize: 15, padding: "14px 32px",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.borderColor = "rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.2)"; }}
          >
            Let's Talk
          </button>
        </div>

        <div style={{
          display: "flex", gap: 48, justifyContent: "center",
          marginTop: 72,
          paddingTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          {[["4+", "Projects"], ["2+", "Years Exp."], ["3", "Orgs."]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{
      background: "#07101F",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#00E5A0", fontFamily: "'DM Mono', monospace", marginBottom: 12, textTransform: "uppercase" }}>
              Featured Work
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff",
              margin: 0, letterSpacing: "-1px",
            }}>
              Featured Case Studies
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, marginTop: 12, fontFamily: "'DM Sans', sans-serif" }}>
              A collection of projects that sharpened my sense of pride.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hovered === i ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16, padding: "32px 36px",
                  display: "flex", alignItems: "center", gap: 36,
                  cursor: "default",
                  transition: "all 0.25s ease",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Color accent bar */}
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                  background: p.color, borderRadius: "16px 0 0 16px",
                  opacity: hovered === i ? 1 : 0.4,
                  transition: "opacity 0.25s",
                }} />

                <div style={{ flex: 1, paddingLeft: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, letterSpacing: "0.1em",
                      color: p.color, fontFamily: "'DM Mono', monospace",
                      background: `${p.color}18`, border: `1px solid ${p.color}33`,
                      padding: "3px 10px", borderRadius: 6, textTransform: "uppercase",
                    }}>
                      {p.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace" }}>
                      {p.year}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    fontSize: 22, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.5px",
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.65, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                    {p.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 180 }}>
                  {p.metrics.map(m => (
                    <div key={m} style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 8, padding: "8px 14px",
                      fontSize: 13, color: "rgba(255,255,255,0.7)",
                      fontFamily: "'DM Mono', monospace",
                      textAlign: "center",
                    }}>
                      {m}
                    </div>
                  ))}
                </div>

                <div style={{
                  fontSize: 20, color: hovered === i ? p.color : "rgba(255,255,255,0.2)",
                  transition: "color 0.25s, transform 0.25s",
                  transform: hovered === i ? "translateX(4px)" : "none",
                }}>
                  →
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" style={{
      background: "#050C1C",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#5B8DFF", fontFamily: "'DM Mono', monospace", marginBottom: 12, textTransform: "uppercase" }}>
              Technical Arsenal
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff",
              margin: 0, letterSpacing: "-1px",
            }}>
              Skills & Tools
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {SKILLS.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <div style={{
                background: "rgba(91,141,255,0.04)",
                border: "1px solid rgba(91,141,255,0.12)",
                borderRadius: 14, padding: "24px 22px",
              }}>
                <div style={{
                  fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#5B8DFF", fontFamily: "'DM Mono', monospace", marginBottom: 18,
                }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map(item => (
                    <span key={item} style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 7, padding: "5px 12px",
                      fontSize: 13, color: "rgba(255,255,255,0.7)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={{
      background: "#07101F",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#FFB547", fontFamily: "'DM Mono', monospace", marginBottom: 12, textTransform: "uppercase" }}>
              Organizations
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff",
              margin: 0, letterSpacing: "-1px",
            }}>
              Organization Experience
            </h2>
          </div>
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 20, top: 0, bottom: 0,
            width: 1, background: "rgba(255,183,71,0.2)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingLeft: 60 }}>
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={exp.org} delay={i * 0.1}>
                <div style={{ position: "relative" }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute", left: -48, top: 8,
                    width: 12, height: 12, borderRadius: "50%",
                    background: "#FFB547", boxShadow: "0 0 12px rgba(255,183,71,0.5)",
                  }} />

                  <div style={{
                    background: "rgba(255,183,71,0.03)",
                    border: "1px solid rgba(255,183,71,0.1)",
                    borderRadius: 14, padding: "28px 28px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <h3 style={{
                          fontFamily: "'Syne', sans-serif", fontWeight: 700,
                          fontSize: 20, color: "#fff", margin: "0 0 4px",
                        }}>
                          {exp.org}
                        </h3>
                        <div style={{ fontSize: 14, color: "#FFB547", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                          {exp.role}
                        </div>
                      </div>
                      <span style={{
                        fontSize: 12, color: "rgba(255,255,255,0.35)",
                        fontFamily: "'DM Mono', monospace",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 6, padding: "4px 12px",
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.65, margin: "12px 0 16px", fontFamily: "'DM Sans', sans-serif" }}>
                      {exp.desc}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {exp.tags.map(t => (
                        <span key={t} style={{
                          fontSize: 12, color: "#FFB547",
                          background: "rgba(255,183,71,0.1)",
                          border: "1px solid rgba(255,183,71,0.2)",
                          borderRadius: 6, padding: "3px 10px",
                          fontFamily: "'DM Sans', sans-serif",
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{
      background: "#050C1C",
      padding: "100px 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <FadeIn>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#00E5A0", fontFamily: "'DM Mono', monospace", marginBottom: 12, textTransform: "uppercase" }}>
              About Me
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff",
              margin: "0 0 28px", letterSpacing: "-1px", lineHeight: 1.15,
            }}>
              Know who I am
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, margin: "0 0 18px", fontFamily: "'DM Sans', sans-serif" }}>
              I'm a Data Analytics student at Universitas Indonesia, passionate about transforming raw data into meaningful stories that drive real decisions.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, margin: "0 0 32px", fontFamily: "'DM Sans', sans-serif" }}>
              My journey started with curiosity about why some businesses grow and others fail — and data became my lens. I've since worked with teams ranging from student organizations to internship environments, building pipelines, dashboards, and models along the way.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "transparent", color: "#00E5A0",
                border: "1px solid rgba(0,229,160,0.4)",
                borderRadius: 10, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                fontSize: 14, padding: "12px 26px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.background = "rgba(0,229,160,0.08)"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; }}
            >
              Let's connect →
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: 32,
          }}>
            {[
              ["🎓", "Education", "Statistics, Universitas Indonesia — 2022–Present"],
              ["💼", "Focus Area", "Business Analytics, Predictive Modeling, BI"],
              ["🌍", "Location", "Depok, West Java, Indonesia"],
              ["⚡", "Currently", "Seeking internships & freelance analytics projects"],
            ].map(([icon, label, val]) => (
              <div key={label} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <span style={{ fontSize: 20, minWidth: 28 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,70,50,0.35) 0%, transparent 70%), #07101F",
      padding: "100px 2rem 80px",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#00E5A0", fontFamily: "'DM Mono', monospace", marginBottom: 12, textTransform: "uppercase" }}>
            Get in Touch
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff",
            margin: "0 0 14px", letterSpacing: "-1px",
          }}>
            Have any more questions?<br />Want to collaborate?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: "0 0 48px", fontFamily: "'DM Sans', sans-serif" }}>
            I'm always happy to chat about data, projects, or new opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {sent ? (
            <div style={{
              background: "rgba(0,229,160,0.08)", border: "1px solid rgba(0,229,160,0.25)",
              borderRadius: 16, padding: 40,
              color: "#00E5A0", fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 600,
            }}>
              ✓ Message sent! I'll get back to you soon.
            </div>
          ) : (
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "40px 40px",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["name", "Name", "Your name"], ["email", "Email", "your@email.com"]].map(([field, label, ph]) => (
                  <div key={field} style={{ textAlign: "left" }}>
                    <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</label>
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={ph}
                      value={form[field]}
                      onChange={handleChange}
                      style={{
                        width: "100%", boxSizing: "border-box",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 10, padding: "12px 16px",
                        color: "#fff", fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "left", marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    width: "100%", boxSizing: "border-box",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 10, padding: "12px 16px",
                    color: "#fff", fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                    outline: "none", resize: "vertical",
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%", background: "#00E5A0", color: "#050C1C",
                  border: "none", borderRadius: 10, cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: 15, padding: "14px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => { e.target.style.opacity = 0.88; }}
                onMouseLeave={e => { e.target.style.opacity = 1; }}
              >
                Send Message →
              </button>
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{
            display: "flex", justifyContent: "center", gap: 20, marginTop: 40, flexWrap: "wrap",
          }}>
            {[
              ["GitHub", "github.com/yourname"],
              ["LinkedIn", "linkedin.com/in/yourname"],
              ["Email", "you@email.com"],
            ].map(([platform, handle]) => (
              <div key={platform} style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: "rgba(255,255,255,0.4)",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>—</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{platform}</span>
                <span>{handle}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#050C1C",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "24px 2rem",
      textAlign: "center",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      color: "rgba(255,255,255,0.25)",
    }}>
      Built with curiosity & coffee ·{" "}
      <span style={{ color: "rgba(255,255,255,0.15)" }}>
        © {new Date().getFullYear()} YourName
      </span>
    </footer>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=DM+Mono&display=swap";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div style={{
      background: "#050C1C",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
