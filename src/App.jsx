import React from "react";

const skills = [
  "Java",
  "Python",
  "SQL",
  "PySpark",
  "Apache Spark",
  "Databricks",
  "AWS",
  "Azure",
  "Google Cloud",
  "Apache Kafka",
  "Airflow",
  "Generative AI",
  "LLMs",
  "RAG",
  "FastAPI",
  "Spring Boot"
];

const projects = [
  {
    title: "Expense Validator AI",
    category: "Generative AI · Document Intelligence",
    description:
      "An AI-assisted expense validation solution that processes receipts, extracts information using OCR, and checks expenses against travel policies.",
    technologies: ["Python", "FastAPI", "Streamlit", "OCR"]
  },
  {
    title: "Travel Policy Assistant",
    category: "Generative AI · Conversational AI",
    description:
      "A conversational assistant designed to answer travel-policy questions using document processing, prompt engineering, and grounded responses.",
    technologies: ["Python", "Google Gemini", "Streamlit", "RAG concepts"]
  },
  {
    title: "Banking Risk ETL Pipeline",
    category: "Data Engineering · Cloud",
    description:
      "A data-processing pipeline concept covering incremental data loads, data quality, and layered data transformations for banking risk data.",
    technologies: ["Databricks", "PySpark", "Delta Lake", "ADLS"]
  },
  {
    title: "Retail Data Platform",
    category: "Software Engineering · Data Platforms",
    description:
      "A retail data platform project involving backend services, relational data, event streaming, and reporting integrations.",
    technologies: ["Java", "Spring Boot", "Oracle", "Kafka"]
  }
];

const experience = [
  {
    role: "Data Engineer",
    company: "LTM Limited",
    description:
      "Working across data engineering and software-related initiatives, with exposure to data processing, cloud technologies, automation, and enterprise development."
  }
];

const certifications = [
  "Databricks Certified Data Engineer Professional",
  "Databricks Certified Generative AI Associate",
  "Databricks Certified Data Engineer Associate",
  "Oracle Certified Associate Java SE 8 Programmer",
  "Snowflake SnowPro Core"
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          ST<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s Connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              DATA ENGINEERING · CLOUD · GENAI
            </div>

            <p className="eyebrow">HELLO, I&apos;M</p>

            <h1>
              Suryavamsi
              <br />
              <span>Tatavarthi.</span>
            </h1>

            <h2>Building intelligent solutions with data and technology.</h2>

            <p className="hero-description">
              I work across data engineering, software development, cloud
              platforms, and Generative AI to build practical, data-driven
              solutions.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="button secondary" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/tatavarthi-suryavamsi-ab652018b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn ↗
              </a>
              <span>·</span>
              <a href="mailto:tatavarthisuryavamsi4uk@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Professional profile graphic">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="visual-card">
              <div className="visual-card-top">
                <span>PORTFOLIO / 2026</span>
                <span className="visual-indicator"></span>
              </div>

              <div className="monogram">ST</div>

              <p className="visual-name">Suryavamsi Tatavarthi</p>
              <p className="visual-role">Data · Code · Intelligence</p>

              <div className="visual-tags">
                <span>DATA</span>
                <span>CLOUD</span>
                <span>AI</span>
              </div>
            </div>

            <div className="floating-label label-top">{"<"} Data Engineer</div>
            <div className="floating-label label-bottom">Generative AI ✳</div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span></span> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Turning complex data
              <br />
              into <span>meaningful solutions.</span>
            </h2>
          </div>

          <div className="about-grid">
            <p className="about-lead">
              I&apos;m a technology professional interested in the intersection
              of data engineering, cloud computing, software development, and
              Generative AI.
            </p>

            <div className="about-detail">
              <p>
                My work spans data pipelines, backend development, document
                intelligence, and AI-assisted applications. I enjoy solving
                practical problems and learning technologies that help build
                reliable, scalable solutions.
              </p>
              <p>
                I value clean engineering, thoughtful problem-solving, and
                turning technical ideas into useful applications.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TECHNICAL TOOLKIT</p>
            <h2>
              Tools I use to
              <br />
              <span>build and innovate.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-chip" key={skill}>
                <span className="skill-mark">✳</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects with
                <br />
                <span>purpose and impact.</span>
              </h2>
            </div>
            <p className="heading-note">
              A selection of work across AI applications, data platforms, and
              software engineering.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>PROJECT / 0{index + 1}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              Learning, building,
              <br />
              <span>and delivering.</span>
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-marker"></div>
                <div>
                  <p className="eyebrow">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="experience-type">PROFESSIONAL</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">05 / CERTIFICATIONS</p>
            <h2>
              Committed to
              <br />
              <span>continuous learning.</span>
            </h2>
          </div>

          <div className="certification-list">
            {certifications.map((certification, index) => (
              <div className="certification-item" key={certification}>
                <span className="certification-number">
                  0{index + 1}
                </span>
                <span>{certification}</span>
                <span className="certification-star">✳</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <p className="eyebrow">06 / EDUCATION</p>
          <div className="education-item">
            <div>
              <h3>MSc Data Science and Data Analytics</h3>
              <p>Brunel University of London</p>
            </div>
            <span>Currently studying</span>
          </div>

          <div className="education-item">
            <div>
              <h3>B.Tech — Electrical and Electronics Engineering</h3>
              <p>Sri Vasavi Engineering College</p>
            </div>
            <span>Undergraduate</span>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">07 / GET IN TOUCH</p>
          <h2>
            Have an interesting
            <br />
            <span>problem to solve?</span>
          </h2>
          <p className="contact-description">
            I&apos;m always open to connecting with people working across data,
            cloud, software, and AI.
          </p>

          <a
            className="button primary contact-button"
            href="mailto:tatavarthisuryavamsi4uk@gmail.com"
          >
            Say Hello <span>↗</span>
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/tatavarthi-suryavamsi-ab652018b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:tatavarthisuryavamsi4uk@gmail.com">Email ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          ST<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Suryavamsi Tatavarthi</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
