import { Container } from "../global/SectionContainer"
import { TextContentWrapper } from "../global/TextContentWrapper"
import { Card } from "./Card"
import Carousel from "./Carousel"

export const ProjectSection = () => {
    return (
        <Container flexDirection="column" style={{ gap:'0' }}>
            <TextContentWrapper>
                <h2>Project Showcase</h2>
                <p>Last Updated - 20th of August</p>
            </TextContentWrapper>
            <Carousel></Carousel>
        </Container>
    )
}
