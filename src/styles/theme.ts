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
    h1: { fontSize: '60px', lineHeight: '72px', fontWeight: 700 },
    h2: { fontSize: '48px', lineHeight: '56px', fontWeight: 700 },
    h3: { fontSize: '36px', lineHeight: '44px', fontWeight: 700 },
    h4: { fontSize: '12px', lineHeight: '14px', fontWeight: 700 },
    p: { fontSize: '12px', lineHeight: '14px', fontWeight: 400 },
  },
};

export type Theme = typeof theme;
