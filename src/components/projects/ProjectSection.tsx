import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import Carousel from "./Carousel"
import { ProjectGrid } from "./ProjectGrid"
import { projects } from "../../data/projects"
import { fadeInChild, fadeInParent } from "../../styles/animations"

// Below this many real projects, the GSAP ring carousel looks sparse
// (cards end up opposite each other on the ring) — a simple grid reads better.
// Once enough projects exist, it upgrades to the carousel automatically.
const CAROUSEL_MIN_PROJECTS = 4;

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
                {projects.length >= CAROUSEL_MIN_PROJECTS
                  ? <Carousel projects={projects} />
                  : <ProjectGrid projects={projects} />}
        </Container>
    );
};
