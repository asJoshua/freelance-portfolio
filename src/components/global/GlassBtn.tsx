import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface GlassBtnProps {
  icon?: ReactNode;
  label: string;
  link?: string;
  newTab?: boolean;
  onClick?: () => void;
  variant?: "default" | "primary";
  style?: CSSProperties;
}

export const GlassBtn = ({
  icon,
  label,
  link,
  newTab = false,
  onClick,
  variant = "default",
  style,
}: GlassBtnProps) => {
  const isPrimary = variant === "primary";
  // --primaryText only contrasts ~4.2:1 against --accent, short of WCAG AA's
  // 4.5:1 for normal text — white text on the solid accent fill clears ~5.4:1.
  const iconColor = isPrimary ? "#FFFFFF" : "#7F3AFB";

  const sharedStyle: CSSProperties = {
    // inline-flex, not flex: this renders as a real <a>/<button> now, and a
    // block-level flex box stretches to fill its container when there's no
    // surrounding flex-row wrapper (e.g. a lone CTA) — inline-flex keeps the
    // pill shrink-to-fit everywhere, matching its original div-based sizing.
    display: "inline-flex",
    padding: "0.5rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "6.25rem",
    background: isPrimary ? "var(--accent)" : "rgba(255, 255, 255, 0.10)",
    cursor: "pointer",
    border: "none",
    font: "inherit",
    fontWeight: isPrimary ? 600 : undefined,
    color: isPrimary ? "#FFFFFF" : "inherit",
    textDecoration: "none",
    ...style,
  };

  const sharedMotionProps = {
    className: isPrimary ? undefined : "glass",
    whileHover: { scale: 1.05 },
    transition: { type: "spring" as const, stiffness: 220, damping: 15 },
  };

  const content = (
    <>
      {icon && (
        <span style={{ display: "flex", alignItems: "center", color: iconColor }}>
          {icon}
        </span>
      )}
      <span>{label}</span>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={sharedStyle}
        {...sharedMotionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={sharedStyle}
      {...sharedMotionProps}
    >
      {content}
    </motion.button>
  );
};
