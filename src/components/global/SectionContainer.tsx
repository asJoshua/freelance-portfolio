import React, { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`container ${className ?? ""}`}
      style={{ display: "flex", ...style }}
    >
      {children}
    </div>
  );
};
