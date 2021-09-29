import React from "react";
import styled from "styled-components"
import { themes } from "../../ui-styles/colors";
import { BodyIntro, MediumText } from "../../ui-styles/texts";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

export default function BottomSection({activeSide, handleBackToCenter}) {

    const { height, width } = useWindowDimensions();
    return (
        <Wrapper activeSide={activeSide} height={height} >
            <ContentWrapper>
                <BlockChainWrapper>
                    <TextWrapper>
                        <BodyIntro>Coming Soon - Check out Council Platform on Terra!</BodyIntro>
                        <MediumText>A new and innovative take on decentralized social media is in development!</MediumText>
                    </TextWrapper>
                </BlockChainWrapper>
                <BackToCenterButton onClick={handleBackToCenter} height={height} width={width}><Icon src="arrow.svg"/></BackToCenterButton>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
top: ${props => props.activeSide === 'bottom' ? '0' : props.height}px;
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
top: 25px;
left: ${props => props.width/2 -25}px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);    

:hover {
    cursor: pointer;
    filter: invert(50%);
    }
`

const BlockChainWrapper = styled.div`
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
height: 500px;
width: 800px;

display: grid;
justify-items: center;
align-items: center;

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 800px) {
    height: 600px;
    width: 400px;
  }
`

const TextWrapper = styled.div``

const Icon = styled.img`
transform: rotate(270deg);
width: 50px;
height: 50px;
`