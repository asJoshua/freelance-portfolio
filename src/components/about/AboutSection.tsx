import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import { fadeInChild, fadeInParent } from "../../styles/animations"

export const AboutSection = () => {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center'}} className="about">
            <motion.div
                variants={fadeInParent}
                initial="hidden"
                animate="show">
                <TextContentWrapper alignItems="flex-start">
                    <motion.h1 variants={fadeInChild}>SECTION</motion.h1>
                </TextContentWrapper>
            </motion.div>
        </Container>
    )
}