import React from "react";
import { HeroBg, HeroContainer, VideoBg } from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4">
          <HeroH1> Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.s
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup">
              Get startted {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </VideoBg>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
