import { motion } from "framer-motion";
import { fadeInParent, fadeInChild } from "../../styles/animations";
import { GlassBtn } from "../global/GlassBtn";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { Container } from "../global/SectionContainer";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { Github, LetterTextIcon, Linkedin } from "lucide-react";
import heroVector from "../../assets/HeroVector.svg";
import cv from "../../assets/Joshua_Sadleir_SE_CV.pdf";

export const HeroSection = () => {
  return (
    <Container className="home">

      <img
        src={heroVector}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "900px",
          opacity: 0.13,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        variants={fadeInParent}
        initial="hidden"
        animate="show"
        style={{ display: "flex", position: "relative", zIndex: 1  }}
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
                link={cv}
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
        style={{ display: "flex", position: "relative", zIndex: 1  }}
      >
        <TextContentWrapper alignItems="flex-start" style={{ gap: "1.5rem" }}>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            Hello! This is Joshua speaking. I am a graduate{" "}
            <strong>Software Engineer</strong> who loves the details, be it
            dynamic structuring on the frontend or clean code in the backend.
            From the first conversation with a client to the final delivery of
            a deployed product, I thrive building{" "}
            <strong>full-stack applications</strong>.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            I graduated with a degree in Applied Software Engineering from{" "}
            <strong>Cardiff University</strong>. Alongside this, I have
            multiple years of experience leading teams and creating standard
            procedures for teams across multiple{" "}
            <strong>hospitality environments</strong>. This cocktail of
            experiences has allowed me to communicate technical parts of a
            project to any level of user — a key skill to have when creating
            products.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            During my time at university, I worked alongside a team of 3–5
            members each year to create a product from start to finish. In my
            final year, we created a website to display{" "}
            <strong>CHIL's satellite data</strong> from their sensors deployed
            across the globe, where I personally led the{" "}
            <strong>front-end development</strong> and client presentations,
            alongside developing key <strong>API points</strong> for
            communication with our backend framework.
          </motion.p>
          <motion.p variants={fadeInChild} style={{ maxWidth: "55ch", textAlign: "justify" }}>
            Aside from the above, I have participated in multiple national-level{" "}
            <strong>debate leagues</strong> with CICAE, won a regional{" "}
            <strong>World Robotic Olympiad</strong>, and completed Wasteland's
            ski rep training. If I am not working on my next project, you can
            probably find me running, talking to people about a new random
            topic, or working on a new cocktail.
          </motion.p>
        </TextContentWrapper>
      </motion.div>
    </Container>
  );
};