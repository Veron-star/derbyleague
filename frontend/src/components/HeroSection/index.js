import React, { useState } from 'react';
import Videos from '../../Videos/Video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement';
import { Button } from '../ButtonElement';

const HeroSection = () => {
const [hover, setHover] = useState(false);
const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Videos} type="Video/mp4" />               
            </HeroBg>
            <HeroContent>
                <HeroH1>Never Trust 8 Wheels And A Smile</HeroH1>
                <HeroP>Sign up for a new account today to find your local league and receive results from SCRIM!</HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80} >
                        Let's Roll {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
