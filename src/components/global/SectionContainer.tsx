import React, { ReactNode, CSSProperties } from 'react';

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  flexDirection?: 'row' | 'column';
}

export const Container = ({ children, style, flexDirection = 'row' }: ContainerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection,           
        padding: '4rem 8rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8rem',
        ...style,                
      }}
    >
      {children}
    </div>
  );
};
