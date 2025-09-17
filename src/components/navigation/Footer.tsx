import { Container } from "../global/SectionContainer";

const sections = [
  {
    title: "PROJECTS",
    items: [
      "CHIL DATA VISUALISATION",
      "BIPSYNC ONBOARDING TOOL",
      "ADDITIONAL PROJECTS",
    ],
  },
  {
    title: "CONTACT",
    items: [
      { label: "EMAIL", href: "mailto:someone@example.com" },
      { label: "GITHUB", href: "https://github.com" },
      { label: "LINKEDIN", href: "https://linkedin.com" },
    ],
  },
  {
    title: "SERVICES",
    items: [
      "UI/UX DESIGN",
      "FRONT-END DEVELOPMENT",
      "FULL-STACK DEVELOPMENT",
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <Container flexDirection="column" 
      style={{ 
        gap: "16px",
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(18px) saturate(180%)',
        WebkitBackdropFilter: 'blur(18px) saturate(180%)' }}
        >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "64px",
            flexWrap: "wrap",
          }}
        >
          {sections.map((section) => (
            <section
              key={section.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4>{section.title}</h4>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: '8px'
                }}
              >
                {section.items.map((item, index) =>
                  typeof item === "string" ? (
                    <li key={index}>{item}</li>
                  ) : (
                    <li key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </footer>
  );
};
