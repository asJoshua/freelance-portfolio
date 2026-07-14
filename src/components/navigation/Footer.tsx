import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../global/SectionContainer";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { GlassBtn } from "../global/GlassBtn";
import { fadeInChild, fadeInParent } from "../../styles/animations";

const sections = [
  {
    title: "PROJECTS",
    items: [
      "CHIL DATA VISUALISATION",
      "BIPSYNC ONBOARDING TOOL",
      "ADDITIONAL PROJECTS",
    ],
  },
  {
    title: "SERVICES",
    items: [
      "UI/UX DESIGN",
      "FRONT-END DEVELOPMENT",
      "FULL-STACK DEVELOPMENT",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    icon: <Mail size={18} />,
    link: "mailto:someone@example.com",
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

export const Footer = () => {
  return (
    <footer className="footer">
      <Container
        className="glass"
        style={{
          flexDirection: "column",
          gap: "3rem",
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
          {sections.map((section) => (
            <motion.div key={section.title} variants={fadeInChild}>
              <TextContentWrapper>
                <h4>{section.title}</h4>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    textAlign: "center",
                  }}
                >
                  {section.items.map((item) => (
                    <li key={item} style={{ color: "var(--mutedText)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </TextContentWrapper>
            </motion.div>
          ))}

          <motion.div variants={fadeInChild}>
            <TextContentWrapper>
              <h4>CONTACT</h4>
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