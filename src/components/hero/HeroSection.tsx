import { motion } from "framer-motion";
import { fadeInParent, fadeInChild } from "../../styles/animations";
import { GlassBtn } from "../global/GlassBtn";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { Container } from "../global/SectionContainer";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { Github, LetterTextIcon, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <Container className="home">
      <motion.div
        variants={fadeInParent}
        initial="hidden"
        animate="show"
        style={{ display: "flex" }}
      >
        <TextContentWrapper alignItems="flex-start">
          <motion.h1 variants={fadeInChild}>JOSHUA SADLEIR</motion.h1>
          <motion.h3 variants={fadeInChild}>Full-Stack Developer</motion.h3>
          <motion.p variants={fadeInChild} style={{ maxWidth: "36ch" }}>
            I build accessible, detail-oriented full-stack experiences for
            the web.
          </motion.p>

          <IconContentWrapper style={{ marginTop: "1rem" }}>
            <motion.div variants={fadeInChild}>
              <GlassBtn
                icon={<Github size={20} />}
                link="https://github.com/asJoshua"
                label="GitHub"
                newTab
              />
            </motion.div>
            <motion.div variants={fadeInChild}>
              <GlassBtn
                icon={<Linkedin size={20} />}
                link="https://www.linkedin.com/in/joshuasadleir/"
                label="LinkedIn"
                newTab
              />
            </motion.div>
            <motion.div variants={fadeInChild}>
              <GlassBtn
                icon={<LetterTextIcon size={20} />}
                link="https://github.com/asJoshua"
                label="CV"
                newTab
              />
            </motion.div>
          </IconContentWrapper>
        </TextContentWrapper>
      </motion.div>

      <motion.div
        variants={fadeInParent}
        initial="hidden"
        animate="show"
        style={{ display: "flex" }}
      >
        <TextContentWrapper alignItems="flex-start">
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            Hi there! I'm Joshua, a detail-oriented, bilingual (
            <strong>English/Spanish</strong>) Software Engineer graduate who
            enjoys building full-stack applications end to end — from a
            clean UI down to the API that backs it.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            My path here wasn't a straight line through tech. I spent years
            in <strong>hospitality</strong>, working my way into managerial
            roles that taught me how to stay calm under pressure and lead a
            team through a busy shift — skills that translate directly into
            how I handle deadlines and client expectations today.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            Alongside my studies, I took on <strong>freelance</strong>{" "}
            projects, building sites and small applications for clients who
            needed someone to own a project from first conversation to final
            deploy. That experience pushed me to get comfortable across the{" "}
            <strong>full stack</strong>, not just the parts I found most
            interesting.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            Outside of code, I've competed in{" "}
            <strong>competitive debate leagues</strong>, which sharpened how
            I structure an argument and communicate under pressure — habits
            that show up now in how I write documentation, explain
            trade-offs to a team, or talk through a tricky bug.
          </motion.p>
        </TextContentWrapper>
      </motion.div>
    </Container>
  );
};