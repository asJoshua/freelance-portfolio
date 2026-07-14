import { CSSProperties, ReactNode } from "react";

interface TextContentWrapperProps {
  children: ReactNode;
  style?: CSSProperties;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'strech'
  
}

export const TextContentWrapper = ({ children, alignItems = 'center', style }: TextContentWrapperProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems,
            gap: '0.5rem',
            }}>
                  {children}
        </div>
    )
}