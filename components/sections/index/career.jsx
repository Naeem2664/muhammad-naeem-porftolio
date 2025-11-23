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
                <h3>Codesinc</h3>
                <h4>Full Stack Engineer</h4>
                <h4>Oct 2025 – Nov 2025</h4>
                <h5>Remote</h5>
              </span>
              <p>
                Worked on GeoEstate and NedTech, focusing on performance
                optimization, reusable components, dynamic report generation,
                and API integrations. Implemented dark theme support, improved
                state management, and optimized rendering across complex UI
                modules.
              </p>

              <p>Key Contributions 👇</p>
              <ul className={career.list}>
                <li>
                  GeoEstate
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Built expose
                    templates & proxy layer for image restrictions
                  </span>
                </li>
                <li>
                  NedTech
                  <span className={career.subList}>
                    <span className={career.bullet}></span> Enhanced UI
                    performance & reusable architecture
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
                <h4>Feb 2025 – Sep 2025</h4>
                <h5>Onsite · Pakistan</h5>
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
                <h4>MERN Stack Intern</h4>
                <h4>Mar 2023 – Dec 2023</h4>
                <h5>On-site · Pakistan</h5>
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
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "react", name: "React.js", type: "devicon" },
  { key: "nextjs", name: "Next.js", type: "devicon" },
  { key: "redux", name: "Redux Toolkit", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "mui", name: "MUI", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  {
    key: "express",
    name: "Express.js",
    type: "custom",
    url: "/img/logos/express.svg",
  },
  { key: "rest", name: "REST APIs", type: "custom", url: "/img/logos/api.svg" },
  { key: "jwt", name: "JWT Auth", type: "custom", url: "/img/logos/jwt.svg" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  {
    key: "supabase",
    name: "Supabase",
    type: "custom",
    url: "/img/logos/supabase.svg",
  },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "aws", name: "AWS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "react", name: "React.js", type: "devicon" },
  { key: "nextjs", name: "Next.js", type: "devicon" },
  { key: "redux", name: "Redux Toolkit", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  {
    key: "express",
    name: "Express.js",
    type: "custom",
    url: "/img/logos/express.svg",
  },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "mui", name: "MUI", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];
