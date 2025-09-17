import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"

export const AboutSection = () => {
    return (
        <Container flexDirection="column">
            <TextContentWrapper>
                <h2>ABOUT ME</h2>
            </TextContentWrapper>
            <iframe
                src="https://www.youtube.com/embed/vAoB4VbhRzM?si=QESZQqooRDzpaoCh" // replace with intro YouTube link
                title="About Me Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                width: "650px",
                height: "500px",
                }}
            ></iframe>
        </Container>
    )
}