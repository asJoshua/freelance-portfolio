import "../../styles/project-grid.css";
import { motion } from "framer-motion";
import { Card } from "./Card";
import { Project } from "../../data/types";
import { fadeInChild, fadeInParent } from "../../styles/animations";

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <motion.div
      className="project-grid"
      variants={fadeInParent}
      initial="hidden"
      animate="show"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInChild}>
          <Card project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};
