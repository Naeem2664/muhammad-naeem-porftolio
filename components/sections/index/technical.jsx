// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="I build scalable, maintainable, and performant applications using modern JavaScript frameworks, backend technologies, and cloud tooling."
        />

        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="How I Work"
              icon={["fat", "chart-network"]}
              copy="My focus is writing clean, modular code and designing systems that are easy to maintain and scale. I work across the full stack—architecting APIs, building robust UIs, integrating databases, and deploying to modern cloud platforms. I adapt fast, ship reliably, and solve problems with a pragmatic, engineering-first mindset."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Tools I Use Daily"
              copy="These are the core tools I rely on for building, debugging, testing, and deploying modern web applications."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />

            <BadgesBlock
              title="Technologies I Build With"
              copy="I work across the entire stack—from modern React frontends to scalable Node.js/Express APIs, optimized databases, and cloud deployments."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "vscode", name: "VS Code", type: "devicon" },
  { key: "postman", name: "Postman", type: "devicon" },
  { key: "git", name: "Git / GitHub", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "cloudflare", name: "Cloudflare", type: "devicon" },
  { key: "vercel", name: "Vercel", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "jira", name: "Jira", type: "fas" },
  { key: "notion", name: "Notion", type: "fas" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "trello", name: "Trello", type: "devicon" },
  { key: "slack", name: "Slack", type: "devicon" },
  { key: "zoom", name: "Zoom", type: "devicon" },
  { key: "twitch", name: "Twitch", type: "devicon" },
  { key: "spotify", name: "Spotify", type: "devicon" },
  { key: "discord", name: "Discord", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "Next.js", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "apollo", name: "Apollo GraphQL", type: "devicon" },
  { key: "aws", name: "AWS", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "express", name: "Express.js", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "postgres", name: "PostgreSQL", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "supabase", name: "Supabase", type: "devicon" },
  { key: "redis", name: "Redis", type: "devicon" },
  { key: "prisma", name: "Prisma ORM", type: "devicon" },
  { key: "tailwind", name: "Tailwind CSS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "vercel", name: "Vercel", type: "devicon" },
];
