import { motion } from "framer-motion";
import { Container } from "./SectionContainer";
import { TextContentWrapper } from "./TextContentWrapper";
import { GlassBtn } from "./GlassBtn";
import { fadeInChild, fadeInParent } from "../../styles/animations";
import { scrollToSection } from "../../utils/scrollTo";

export const CtaBanner = () => {
  return (
    <Container style={{ justifyContent: "center", minHeight: "auto", padding: "3rem 8rem" }}>
      <motion.div variants={fadeInParent} initial="hidden" animate="show">
        <TextContentWrapper style={{ gap: "1rem" }}>
          <motion.h3 variants={fadeInChild}>Have a project in mind?</motion.h3>
          <motion.p variants={fadeInChild} style={{ maxWidth: "45ch", textAlign: "center" }}>
            If you're running a hospitality or service business and spreadsheets
            and paper processes are slowing your team down, let's talk.
          </motion.p>
          <motion.div variants={fadeInChild}>
            <GlassBtn
              label="Get in touch"
              variant="primary"
              onClick={() => scrollToSection("#contact")}
            />
          </motion.div>
        </TextContentWrapper>
      </motion.div>
    </Container>
  );
};
