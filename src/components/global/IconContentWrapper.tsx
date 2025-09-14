import { CSSProperties, ReactNode } from 'react';

interface IconContentWrapperProps {
  children: ReactNode;
style?: CSSProperties;
}

export const IconContentWrapper = ({ children, style }: IconContentWrapperProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: '0.5rem',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
