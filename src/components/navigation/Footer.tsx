import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../global/SectionContainer";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { GlassBtn } from "../global/GlassBtn";
import { fadeInChild, fadeInParent } from "../../styles/animations";

const projectItems = [
  "PERSONAL PORTFOLIO",
  "CHIL DATA VISUALISATION",
  "ADDITIONAL PROJECTS",
];

const servicesDescription =
  "I build booking and reservation systems, staff scheduling and operations " +
  "dashboards, and custom workflow tools for hospitality and service businesses " +
  "— the kind of software that replaces spreadsheets and paper processes with " +
  "something your team will actually use. Full-stack delivery, from the first " +
  "client conversation to a deployed product.";

const contactLinks = [
  {
    label: "contact@joshuasadleir.com",
    icon: <Mail size={18} />,
    link: "mailto:contact@joshuasadleir.com",
  },
  {
    label: "GitHub",
    icon: <Github size={18} />,
    link: "https://github.com/asJoshua",
    newTab: true,
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
    link: "https://www.linkedin.com/in/joshuasadleir/",
    newTab: true,
  },
];

interface FooterProps {
  // The footer is shared across pages whose content reaches different heading
  // depths before it — pass the level that continues the page's own hierarchy
  // without skipping a level. Defaults to 4 (Home: h1 hero -> h2 section -> h3
  // card title -> h4 footer).
  headingLevel?: 2 | 3 | 4;
}

export const Footer = ({ headingLevel = 4 }: FooterProps) => {
  const HeadingTag = `h${headingLevel}` as "h2" | "h3" | "h4";
  const headingStyle = { fontSize: "var(--h4-fontSize)", lineHeight: "var(--h4-lineHeight)" };

  return (
    <footer className="footer">
      <Container
        className="glass"
        style={{
          flexDirection: "column",
          gap: "3rem",
          minHeight: "auto",
        }}
      >
        <motion.div
          variants={fadeInParent}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "4rem",
            width: "100%",
          }}
        >
          <motion.div variants={fadeInChild}>
            <TextContentWrapper>
              <HeadingTag style={headingStyle}>PROJECTS</HeadingTag>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                {projectItems.map((item) => (
                  <li key={item} style={{ color: "var(--mutedText)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </TextContentWrapper>
          </motion.div>

          <motion.div variants={fadeInChild}>
            <TextContentWrapper style={{ maxWidth: "32ch" }}>
              <HeadingTag style={headingStyle}>SERVICES</HeadingTag>
              <p style={{ color: "var(--mutedText)", textAlign: "center" }}>
                {servicesDescription}
              </p>
            </TextContentWrapper>
          </motion.div>

          <motion.div id="contact" variants={fadeInChild}>
            <TextContentWrapper>
              <HeadingTag style={headingStyle}>CONTACT</HeadingTag>
              <IconContentWrapper style={{ justifyContent: "center" }}>
                {contactLinks.map((c) => (
                  <GlassBtn
                    key={c.label}
                    icon={c.icon}
                    label={c.label}
                    link={c.link}
                    newTab={c.newTab}
                  />
                ))}
              </IconContentWrapper>
            </TextContentWrapper>
          </motion.div>
        </motion.div>

        <p style={{ color: "var(--mutedText)" }}>
          © {new Date().getFullYear()} Joshua Sadleir. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};