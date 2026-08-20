import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { GlassLabel } from "../global/GlassLabel";
import { GlassBtn } from "../global/GlassBtn";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { Project } from "../../data/types";

interface CardProps {
  project: Project;
  style?: CSSProperties;
}

export const Card = ({ project, style }: CardProps) => {
  const { id, title, summary, image, imageAlt, tags, liveUrl, liveUrlNote } = project;

  return (
    <motion.div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        maxWidth: "350px",
        background: "rgba(255, 255, 255, 0.10)",
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
    >
      <Link
        to={`/projects/${id}`}
        style={{ display: "flex", flexDirection: "column", color: "inherit", textDecoration: "none" }}
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

        <div style={{ padding: "8px" }}>
          <TextContentWrapper alignItems="flex-start">
            {/* Semantically h3 (nested under the section's h2) but kept at the
                card's original h4 visual scale so the design doesn't shift. */}
            <h3 style={{ fontSize: "var(--h4-fontSize)", lineHeight: "var(--h4-lineHeight)" }}>
              {title}
            </h3>
            <p>{summary}</p>
          </TextContentWrapper>
        </div>
      </Link>

      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 8px 8px",
          gap: "8px",
        }}
      >
        <IconContentWrapper style={{ fontSize: "1vh" }}>
          {tags.map((tag, idx) => (
            <GlassLabel key={idx} icon={tag.icon} label={tag.label} />
          ))}
        </IconContentWrapper>

        {liveUrl && (
          <div>
            <GlassBtn
              icon={<ExternalLink size={14} />}
              label="View live"
              link={liveUrl}
              newTab
              style={{ padding: "0.375rem 0.75rem", fontSize: "0.85rem" }}
            />
            {liveUrlNote && (
              <p style={{ color: "var(--mutedText)", fontSize: "0.75rem", marginTop: "0.375rem" }}>
                {liveUrlNote}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
