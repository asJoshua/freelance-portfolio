import { CSSProperties } from "react";
import { GlassLabel } from "../global/GlassLabel";
import { IconContentWrapper } from "../global/IconContentWrapper";
import { TextContentWrapper } from "../global/TextContentWrapper";
import { motion } from "framer-motion";

interface GlassBtnConfig {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  newTab?: boolean;
  style?: CSSProperties;
}

interface CardProps {
  style?: CSSProperties;
  title: string;
  description: string;
  image: string;
  link?: string;
  buttons: GlassBtnConfig[];
}

export const Card = ({ style, title, description, image, link, buttons = [] }: CardProps) => {
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

        <IconContentWrapper style={{fontSize: '1vh'}}>
            {buttons.map((btn, idx) => (
              <GlassLabel
                key={idx}
                icon={btn.icon}
                label={btn.label}
                style={btn.style}
              />
            ))}
        </IconContentWrapper>
      </div>
    </motion.div>
  );
};
