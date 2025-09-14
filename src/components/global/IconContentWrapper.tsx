import { ReactNode } from "react";

interface IconContentWrapperProps {
  children: ReactNode;
}

export const IconContentWrapper = ({ children }: IconContentWrapperProps) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            }}>
                  {children}
        </div>
    )
}