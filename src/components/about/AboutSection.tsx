import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import { fadeInChild, fadeInParent } from "../../styles/animations"

export const AboutSection = () => {
    return (
        <Container flexDirection="column">
            <motion.div
                variants={fadeInParent}
                initial="hidden"
                animate="show">
                <TextContentWrapper >
                    <motion.h2 variants={fadeInChild} style={{paddingBottom: '4rem'}}>ABOUT ME</motion.h2>
                </TextContentWrapper>
                <iframe
                    src="https://www.youtube.com/embed/vAoB4VbhRzM?si=QESZQqooRDzpaoCh" // replace with intro YouTube link
                    title="About Me Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                    width: "650px",
                    height: "500px",
                    }}
                ></iframe>
            </motion.div>
        </Container>
    )
}