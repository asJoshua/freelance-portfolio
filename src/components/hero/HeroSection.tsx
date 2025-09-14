import sprialUrl from '../../assets/HeroVector.svg'
import { GlassBtn } from '../global/GlassBtn';
import { IconContentWrapper } from '../global/IconContentWrapper';
import { Container } from '../global/SectionContainer';
import { TextContentWrapper } from '../global/TextContentWrapper';

export const HeroSection = () => {
    return (
        <Container>
            <TextContentWrapper alignItems='flex-start'>
                <h1>JOSHUA SADLEIR</h1>
                <h3>Full-Stack Developer</h3>
                <IconContentWrapper>
                    <GlassBtn children={'Github'}></GlassBtn>
                    <GlassBtn children={'LinkedIn'}></GlassBtn>
                    <GlassBtn children={'CV'}></GlassBtn>
                </IconContentWrapper>
            </TextContentWrapper>
            <div>
                <img src={sprialUrl} alt="" />
            </div>
        </Container>
        
    );
}