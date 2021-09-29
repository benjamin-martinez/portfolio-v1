import React from "react";
import styled from "styled-components"
import { themes } from "../../ui-styles/colors";
import { BodyIntro, MediumText } from "../../ui-styles/texts";

import useWindowDimensions from "../../customHooks/useWindowDimensions";

export default function RightSection({activeSide, handleBackToCenter}) {

    const { height, width } = useWindowDimensions();
    return (
        <Wrapper activeSide={activeSide} width={width} >
            <ContentWrapper>
            <BlogWrapper>
                    <BodyIntro>Check out FF2 Media!</BodyIntro>
                    <BodyWrapper>
                        <MediumText>I'm the web manager for a movie review organization called FF2 Media!
                                    They are dedicated to providing reviews, features, interviews, and editorials for
                                    the underrepresented voices of women directors and
                                    screenwriters in film and the broader entertainment industry. 
                        </MediumText>
                        <a href="https://www.ff2media.com/"><FF2Logo src="ff2logoslogan.png"/></a>
                    </BodyWrapper>
                </BlogWrapper>
                <BackToCenterButton onClick={handleBackToCenter} height={height} width={width}><Icon src="arrow.svg"/></BackToCenterButton>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
left: ${props => props.activeSide === 'right' ? '0' : props.width}px;
height: 100vh;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); `

const ContentWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
height: 100vh;`

const BackToCenterButton = styled.a`
position: absolute;
text-shadow: 0px 2px 3px #555;
top: ${props => props.height/2 -25}px;
left: 50px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);    

:hover {
    cursor: pointer;
    filter: invert(50%);
    }
`

const BlogWrapper = styled.div`
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
height: 500px;
width: 800px;
display: grid;
justify-items: center;
align-items: center;  
padding: 5%;

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 1200px) {
    height: 600px;
    width: 400px;
  }
`

const BodyWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;   
`

const Icon = styled.img`
transform: rotate(180deg);
width: 50px;
height: 50px;
`

const FF2Logo = styled.img`
@media only screen and (max-width: 1200px) {
    width: 300px;
  }`