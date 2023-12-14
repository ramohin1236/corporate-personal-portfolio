import { Bio } from "../../../public/data";
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, Span, SubTitle, TextLoop, Title } from "./HeroStyle";
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    {/* <HeroBgAnimation /> */}
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src='https://i.ibb.co/0GgjNTb/IMG-20210903-WA0032.jpg'alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    );
};

export default Hero;