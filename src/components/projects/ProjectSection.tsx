import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import { ProjectGrid } from "./ProjectGrid"
import { projects } from "../../data/projects"
import { fadeInChild, fadeInParent } from "../../styles/animations"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

// Lazy-loaded so the GSAP ring (and GSAP itself) is only ever fetched by
// visitors who actually have enough projects to see it.
const Carousel = lazy(() => import("./Carousel"))

// Below this many real projects, the GSAP ring carousel looks sparse
// (cards end up opposite each other on the ring) — a simple grid reads better.
// Once enough projects exist, it upgrades to the carousel automatically.
export const CAROUSEL_MIN_PROJECTS = 4;

export const shouldShowCarousel = (
  projectCount: number,
  prefersReducedMotion: boolean
): boolean => projectCount >= CAROUSEL_MIN_PROJECTS && !prefersReducedMotion;

export const ProjectSection = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const useCarousel = shouldShowCarousel(projects.length, prefersReducedMotion);

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
                {useCarousel
                  ? <Suspense fallback={<ProjectGrid projects={projects} />}>
                      <Carousel projects={projects} />
                    </Suspense>
                  : <ProjectGrid projects={projects} />}
        </Container>
    );
};
