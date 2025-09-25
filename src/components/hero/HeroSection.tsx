import { motion } from "framer-motion";
import { fadeInParent, fadeInChild } from "../../styles/animations";
import sprialUrl from "../../assets/HeroVector.svg";
import { GlassBtn } from "../global/GlassBtn";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { Container } from "../global/SectionContainer";
import { TextContentWrapper } from "../global/TextContentWrapper";

export const HeroSection = () => {
  return (
    <Container style={{flexDirection: "row"}} className='hero'>
      <motion.div
        variants={fadeInParent}
        initial="hidden"
        animate="show"
        style={{ display: 'flex '}}
      >
        <TextContentWrapper alignItems="flex-start">
          <motion.h1 variants={fadeInChild}>JOSHUA SADLEIR</motion.h1>
          <motion.h3 variants={fadeInChild}>Full-Stack Developer</motion.h3>
          <IconContentWrapper>
            <motion.div variants={fadeInChild}>
              <GlassBtn>Github</GlassBtn>
            </motion.div>
            <motion.div variants={fadeInChild}>
              <GlassBtn>LinkedIn</GlassBtn>
            </motion.div>
            <motion.div variants={fadeInChild}>
              <GlassBtn>CV</GlassBtn>
            </motion.div>
          </IconContentWrapper>
        </TextContentWrapper>

        <motion.div variants={fadeInChild}>
          <img src={sprialUrl} alt="spiral vector" 
          style={{
            width: "100%",       
            height: "100%",      
            maxWidth: "70vw",   
            maxHeight: "50vh"
          }}/>
        </motion.div>
      </motion.div>
    </Container>
  );
};
