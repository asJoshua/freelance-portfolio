import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";
import { Container } from "../components/global/SectionContainer";
import { TextContentWrapper } from "../components/global/TextContentWrapper";
import { IconContentWrapper } from "../components/global/IconContentWrapper";
import { GlassLabel } from "../components/global/GlassLabel";
import { GlassBtn } from "../components/global/GlassBtn";
import { projects } from "../data/projects";
import { fadeInChild, fadeInParent } from "../styles/animations";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    document.title = project
      ? `${project.title} — Joshua Sadleir`
      : "Project not found — Joshua Sadleir";
  }, [project]);

  if (!project) {
    return (
      <main>
        <Navbar />
        <Container style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TextContentWrapper alignItems="flex-start">
            <h1>Project not found</h1>
            <p>We couldn't find the project you're looking for.</p>
            <Link to="/">← Back to projects</Link>
          </TextContentWrapper>
        </Container>
        <Footer headingLevel={2} />
      </main>
    );
  }

  const { title, summary, image, imageAlt, liveUrl, liveUrlNote, caseStudy } = project;

  return (
    <main>
      <Navbar />
      <Container style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <motion.div variants={fadeInParent} initial="hidden" animate="show" style={{ width: "100%" }}>
          <TextContentWrapper alignItems="flex-start">
            <motion.div variants={fadeInChild}>
              <Link to="/">← Back to projects</Link>
            </motion.div>
            <motion.h1 variants={fadeInChild}>{title}</motion.h1>
            <motion.p variants={fadeInChild} style={{ maxWidth: "55ch" }}>
              {summary}
            </motion.p>
          </TextContentWrapper>

          <motion.img
            variants={fadeInChild}
            src={image}
            alt={imageAlt ?? title}
            style={{ width: "100%", maxWidth: "600px", borderRadius: "16px", margin: "1.5rem 0" }}
          />

          <TextContentWrapper alignItems="flex-start" style={{ gap: "1.5rem" }}>
            <motion.div variants={fadeInChild}>
              <h2>Problem</h2>
              <p style={{ maxWidth: "65ch" }}>{caseStudy.problem}</p>
            </motion.div>

            <motion.div variants={fadeInChild}>
              <h2>Approach</h2>
              <p style={{ maxWidth: "65ch" }}>{caseStudy.approach}</p>
            </motion.div>

            <motion.div variants={fadeInChild}>
              <h2>Outcome</h2>
              <p style={{ maxWidth: "65ch" }}>{caseStudy.outcome}</p>
            </motion.div>

            {caseStudy.role && (
              <motion.p variants={fadeInChild} style={{ maxWidth: "65ch", color: "var(--mutedText)" }}>
                {caseStudy.role}
              </motion.p>
            )}
          </TextContentWrapper>

          <motion.div variants={fadeInChild} style={{ marginTop: "1.5rem" }}>
            <h3>Tech stack</h3>
            <IconContentWrapper style={{ marginTop: "0.5rem" }}>
              {caseStudy.techStack.map((tech) => (
                <GlassLabel key={tech} label={tech} />
              ))}
            </IconContentWrapper>
          </motion.div>

          {liveUrl && (
            <motion.div variants={fadeInChild} style={{ marginTop: "1.5rem" }}>
              <GlassBtn label="View live demo" link={liveUrl} newTab />
              {liveUrlNote && (
                <p style={{ color: "var(--mutedText)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                  {liveUrlNote}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
      <Footer />
    </main>
  );
}
