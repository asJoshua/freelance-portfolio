import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import Carousel from "./Carousel"
import { fadeInChild, fadeInParent } from "../../styles/animations"

export const ProjectSection = () => {
    return (
        <Container flexDirection="column" style={{ gap:'0' }}>
            <motion.div
            variants={fadeInParent}
                    initial="hidden"
                    animate="show">
                <TextContentWrapper>
                <motion.h2 variants={fadeInChild}>PROJECT SHOWCASE</motion.h2>
                <motion.p variants={fadeInChild}>Last Updated - 20th of August</motion.p>
                </TextContentWrapper>
            </motion.div>
                <Carousel></Carousel>
        </Container>
    );
};
