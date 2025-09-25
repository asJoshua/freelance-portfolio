import { CSSProperties, ReactNode } from "react";

interface GlassBtnProps {
  icon?: ReactNode;          // optional icon
  label: string;             // text label
  link?: string;             // optional link to navigate
  newTab?: boolean;          // open link in new tab
  style?: CSSProperties;     // optional custom styles
}

export const GlassBtn = ({
  icon,
  label,
  link,
  newTab = false,
  style,
}: GlassBtnProps) => {
  const handleClick = () => {
    if (link) window.open(link, newTab ? "_blank" : "_self");
  };

  return (
    <div
      onClick={handleClick}
      style={{
       display: 'flex',
        padding: '0.5rem 1rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '6.25rem',
        background: 'rgba(255, 255, 255, 0.10)',
        cursor: 'pointer',
        ...style
      }}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      )}
      <span>{label}</span>
    </div>
  );
};
