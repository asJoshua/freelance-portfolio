export const theme = {
  colors: {
    primaryText: '#E6E0F2',
    secondaryText: '#C2B5E1',
    mutedText: '#9282AB',
    accent: '#7F3AFB',
    altAccent: '#2BC5F0',
    background: '#10061C',
    success: '#1FBF6D',
    warning: '#FFB547',
    error: '#FF5D5D',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: { 
      fontSize: 'clamp(2rem, 5vw, 3.75rem)',      // 32px → 60px
      lineHeight: 'clamp(2.5rem, 6vw, 4.5rem)',   // 40px → 72px
      fontWeight: 700,
    },

    h2: { 
      fontSize: 'clamp(1.75rem, 4vw, 3rem)',      // 28px → 48px
      lineHeight: 'clamp(2.25rem, 5vw, 3.5rem)',  // 36px → 56px
      fontWeight: 700,
    },

    h3: { 
      fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',   // 20px → 36px
      lineHeight: 'clamp(1.75rem, 4vw, 2.75rem)', // 28px → 44px
      fontWeight: 700,
    },

    h4: { 
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',     // 16px → 18px
      lineHeight: 'clamp(1.25rem, 2.2vw, 1.25rem)', // ~20px fixed
      fontWeight: 700,
    },

    p: { 
      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',   // 14px → 16px
      lineHeight: 'clamp(1.25rem, 2vw, 1.5rem)',  // 20px → 24px
      fontWeight: 400,
    },
  },
};

export type Theme = typeof theme;
