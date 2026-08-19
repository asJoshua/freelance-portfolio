import { CSSProperties, ReactNode } from "react";

interface GlassLabelProps {
  icon?: ReactNode;
  label: string;       
  style?: CSSProperties;     
}

export const GlassLabel = ({
  icon,
  label,
  style,
}: GlassLabelProps) => {
  return (
    <div className='glassLabel glass'
      style={{
       display: 'flex',
        padding: '0.5rem 0.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '6.25rem',
        cursor: 'pointer',
        color: 'var(--secondaryText)',
        ...style
      }}
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center'}}>
          {icon}
        </span>
      )}
      <span>{label}</span>
    </div>
  );
};
