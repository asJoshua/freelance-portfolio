import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { GlassLabel } from "../global/GlassLabel";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { Project } from "../../data/types";

interface CardProps {
  project: Project;
  style?: CSSProperties;
}

export const Card = ({ project, style }: CardProps) => {
  const { title, summary, image, imageAlt, tags, liveUrl } = project;

  return (
    <motion.div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        maxWidth: "350px",
        background: "rgba(255, 255, 255, 0.10)",
        cursor: "pointer",
        ...style,
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 15,
      }}
      onClick={() => {
        if (liveUrl) window.open(liveUrl, "_blank");
      }}
    >
      <img
        src={image}
        alt={imageAlt ?? title}
        style={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          objectFit: "cover",
        }}
      />

      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          gap: "8px",
        }}
      >
        <TextContentWrapper alignItems="flex-start">
          <h4>{title}</h4>
          <p>{summary}</p>
        </TextContentWrapper>

        <IconContentWrapper style={{ fontSize: "1vh" }}>
          {tags.map((tag, idx) => (
            <GlassLabel key={idx} icon={tag.icon} label={tag.label} />
          ))}
        </IconContentWrapper>
      </div>
    </motion.div>
  );
};
