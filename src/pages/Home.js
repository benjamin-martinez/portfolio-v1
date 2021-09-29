import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import BottomSection from "../components/bottomSection/BottomSection";
import MusicPlayer from "../components/global/MusicPlayer";
import Socials from "../components/global/Socials";
import HomeBanner from "../components/home/HomeBanner";
import LeftSection from "../components/leftSection/LeftSection";
import RightSection from "../components/rightSection/RightSection";
import TopSection from "../components/topSection/TopSection";
import { H1 } from "../ui-styles/texts";
import useWindowDimensions from "../customHooks/useWindowDimensions";

export default function Home() {

    const [activeSide, setActiveSide] = useState('center')
    const { height, width } = useWindowDimensions();

    function handleButtonClick(selection) {
        setActiveSide(selection)
    }

    function handleBackToCenter() {
        setActiveSide('center')
    }

    // const options = {
    //     reverse:        false,  // reverse the tilt direction
    //     max:            10,     // max tilt rotation (degrees)
    //     perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    //     speed:          100,    // Speed of the enter/exit transition
    //     transition:     true,   // Set a transition on enter/exit.
    //     axis:           null,   // What axis should be disabled. Can be X or Y.
    //     reset:          true,    // If the tilt effect has to be reset on exit.
    //     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // }


    return (
        <Wrapper>
            <ContentWrapper>
                <MusicPlayer />
                {/* <NightMode /> */}
                <Socials />
                <TextWrapper activeSide={activeSide} height={height} width={width}><H1>Benjamin<br/>Martinez<br/>Web Developer</H1></TextWrapper>
                <BannerWrapper activeSide={activeSide}>
                    <HomeBanner activeSide={activeSide} handleButtonClick={handleButtonClick} />
                    <TopSection activeSide={activeSide} handleBackToCenter={handleBackToCenter}/>
                    <LeftSection activeSide={activeSide} handleBackToCenter={handleBackToCenter}/>
                    <RightSection activeSide={activeSide} handleBackToCenter={handleBackToCenter}/>
                    <BottomSection activeSide={activeSide} handleBackToCenter={handleBackToCenter}/>
                </BannerWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

const fadeInAnimation = keyframes` 
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
`

const Wrapper = styled.div`
animation: ${fadeInAnimation} cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
`

const ContentWrapper = styled.div`
`

const BannerWrapper = styled.div`
position: relative;
margin-left: ${props => props.activeSide === "center" ? '-22.5px' : '0px'};
`

const TextWrapper = styled.div`
position: absolute;
display: ${props => props.activeSide === "center" ? "grid" : "none"};
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
text-align: left;
top: ${props => props.height-200}px;
left: 25px;

@media only screen and (max-width: 1200px) {
    top: ${props => props.height-140}px;
    left: 25px;
  }

animation: ${fadeInAnimation} cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
`