// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I design, build, and maintain full stack applications—owning everything from frontend architecture to backend APIs, databases, and deployment."
        />

        <section className={career.area}>
          {/* ===== COMPANY 1: Codesinc ===== */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Menakta Tech</h3>
                <h4>Full Stack Engineer</h4>
                <h4>Dec 2025 – Present</h4>
                <h5>Onsite · Lahore, Pakistan</h5>
              </span>
              <p>
                Worked on Menakta Tech Official Website and currently working on OP Skillsim a web application for 3D simulation platform, focusing on performance
                optimization, reusable components, interactive visualizations with WebRTC streaming,
                and API integrations. Implemented dark theme support, improved
                state management, and optimized rendering across complex UI
                modules.
              </p>

              <p>Key Contributions 👇</p>
              <ul className={career.list}>
                <li>
                  OP Skillsim
                  <span className={career.subList}>
                    <span className={career.bullet}></span> 
                    A 3D simulation platform for learning and training in the field of
                    plumbing and electrical engineering. Features real-time
                    streaming, interactive visualizations with WebRTC, and
                    API integrations.
                  </span>
                </li>
                <li>
                Menakta Tech Official Website
                  <span className={career.subList}>
                    <span className={career.bullet}></span> An informative 3D website for Menakta Tech
                    that showcases services, portfolio, and contact information
                  </span>
                </li>
              </ul>

              <Badges
                list={fullStack}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* ===== COMPANY 2: Decimal Solution ===== */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Decimal Solution</h3>
                <h4>Full Stack Developer</h4>
                <h4>Jan 2025 – Nov 2025</h4>
                <h5>Onsite · Islamabad, Pakistan</h5>
              </span>
              <p>
                Full Stack Developer responsible for front-end modules, backend
                APIs, and database integrations. Improved API performance by 20%
                and reduced delivery times by 15% through optimized workflows.
                Built reusable TypeScript components and contributed to multiple
                production admin panels.
              </p>

              <p>Key Projects 👇</p>
              <ul className={career.list}>
                <li>
                  Company Books Admin Panel
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Resolved 90+ UI &
                    backend issues
                  </span>
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Implemented PDF/XLSX
                    export & dynamic forms
                  </span>
                </li>

                <li>
                  LeafEm Admin Panel
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Built CRUD for
                    Users, Appointments, Transactions
                  </span>
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Role-based access +
                    Zod validation
                  </span>
                </li>
              </ul>

              <Badges
                list={fullStack}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* ===== COMPANY 4: XpertSpot Systems (Internship) ===== */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>XpertSpot Systems</h3>
                <h4>MERN Stack Developer</h4>
                <h4>Feb 2024 – Dec 2024</h4>
                <h5>On-site · Rahim Yar Khan, Pakistan</h5>
              </span>
              <p>
                Assisted in frontend development, backend integration, and bug
                fixes. Strengthened React, Express, and MongoDB fundamentals
                through hands-on tasks and teamwork.
              </p>

              <Badges
                list={stack}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", },
  { key: "webrtc", name: "WebRTC", },
  { key: "typescript", name: "TypeScript", },
  { key: "react", name: "React.js",  },
  { key: "nextjs", name: "Next.js",  },
  { key: "redux", name: "Redux Toolkit",  },
  { key: "tailwindcss", name: "Tailwind CSS",  },
  { key: "mui", name: "MUI", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap",  },
  { key: "nodejs", name: "Node.js",  },
  {
    key: "express",
    name: "Express.js",
    
    url: "/img/logos/express.svg",
  },
  { key: "rest", name: "REST APIs",  url: "/img/logos/api.svg" },
  { key: "jwt", name: "JWT Auth",  url: "/img/logos/jwt.svg" },
  { key: "mongodb", name: "MongoDB",  },
  { key: "postgresql", name: "PostgreSQL",  },
  { key: "mysql", name: "MySQL",  },
  {
    key: "supabase",
    name: "Supabase",
    
    url: "/img/logos/supabase.svg",
  },
  { key: "docker", name: "Docker",  },
  { key: "aws", name: "AWS",  },
  { key: "git", name: "Git",  },
];

const stack = [
  { key: "javascript", name: "JavaScript",  },
  { key: "react", name: "React.js",  },
  { key: "nextjs", name: "Next.js",  },
  { key: "redux", name: "Redux Toolkit",  },
  { key: "nodejs", name: "Node.js",  },
  {
    key: "express",
    name: "Express.js",
    
    url: "/img/logos/express.svg",
  },
  { key: "mongodb", name: "MongoDB",  },
  { key: "tailwindcss", name: "Tailwind CSS",  },
  { key: "mui", name: "MUI",  },
  { key: "git", name: "Git"  },
];
