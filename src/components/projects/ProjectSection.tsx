import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import Carousel from "./Carousel"
import { fadeInChild, fadeInParent } from "../../styles/animations"

export const ProjectSection = () => {
    return (
        <Container style={{ flexDirection:'column', gap:'0', justifyContent: 'center' }} className='projects'>
            <motion.div
            variants={fadeInParent}
                    initial="hidden"
                    animate="show">
                <TextContentWrapper>
                <motion.h2 variants={fadeInChild}>PROJECT SHOWCASE</motion.h2>
                </TextContentWrapper>
            </motion.div>
                <Carousel></Carousel>
        </Container>
    );
};
