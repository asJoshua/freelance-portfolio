import { CSSProperties } from "react";
import { GlassBtn } from "../global/GlassBtn";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { motion } from "framer-motion";
import { LetterTextIcon } from "lucide-react";

interface CardProps {
  style?: CSSProperties;
  title: string;
  description: string;
  image: string;
  tech: string[]; // array of tech stack labels
  link?: string; // optional project link
}

export const Card = ({ style, title, description, image, tech, link }: CardProps) => {
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
        border: "2px solid #e6e0f2",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 15,
      }}
      onClick={() => {
        if (link) window.open(link, "_blank");
      }}
    >
      <img
        src={image}
        alt={title}
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
          <p>{description}</p>
        </TextContentWrapper>

        <IconContentWrapper>
          <GlassBtn
                  icon={<LetterTextIcon size={20} />}
                  link="https://github.com/asJoshua"
                  label="CV"
                  newTab
                />
        </IconContentWrapper>
      </div>
    </motion.div>
  );
};
