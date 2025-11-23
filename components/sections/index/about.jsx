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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Summary"
          subTitle="Full Stack Developer specialized in building high-performance web applications using React, Next.js, Node.js, and modern cloud platforms."
        />

        <section className={about.content}>
          <div className={about.image}>
            <Image src="/img/naeem.jpg" width={600} height={800} alt="Naeem"/>
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="How I Work"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="I focus on building scalable, maintainable, and secure applications. My strengths include problem-solving, clear communication, and taking ownership of complex features from planning to deployment. I collaborate effectively with product teams, move fast without breaking structure, and make decisions based on real user and business needs."
            />

            <BadgesBlock
              title="Engineering Focus"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="I enjoy breaking down complex problems into clear, modular components. My workflow includes planning system architecture, designing APIs, structuring scalable frontends, integrating secure backends, and deploying reliably using DevOps best practices."
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "diagram-project", name: "System Architecture", type: "fad" },
  { key: "code", name: "API Design", type: "fad" },
  { key: "server", name: "Backend Structure", type: "fad" },
  { key: "browser", name: "Frontend Engineering", type: "fad" },
  { key: "repeat", name: "CI/CD Workflow", type: "fad" },
  { key: "cloud", name: "Cloud Deployment", type: "fad" },
];
