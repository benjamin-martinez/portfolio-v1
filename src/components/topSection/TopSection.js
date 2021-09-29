import React from "react";
import styled from "styled-components"


import { themes } from "../../ui-styles/colors";
import { MediumText, MediumBold } from "../../ui-styles/texts";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

export default function TopSection({activeSide, handleBackToCenter}) {

    const { height, width } = useWindowDimensions();

    return (
        <Wrapper activeSide={activeSide} height={height} >
            <ContentWrapper>
                <AboutWrapper>
                    <MyFace src="my-portrait.png"></MyFace>
                    <Description>
                        <MediumBold>Thanks for visiting! My name is Ben.</MediumBold>
                        <MediumText>I began my journey as a web developer while going to college for computer science
                        in 2019. I've done remote work for startups, and small organizations while teaching myself 
                        programming and design.</MediumText>
                        <MediumText>I continuously seek to improve and expand my skills to keep pace with the everchanging world of innovation.
                                    Technologies I enjoy working with are listed below.
                        </MediumText>
                        </Description>
                    <SecondDescription>
                    <Technologies>
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>React.js</Tag>
                        <Tag>MongoDB</Tag>
                        <Tag>Node.js</Tag>
                        <Tag>Redux</Tag>
                        <Tag>Vue.js</Tag>
                    </Technologies>
                    </SecondDescription>
                </AboutWrapper>
                <BackToCenterButton onClick={handleBackToCenter} height={height} width={width}><Icon src="arrow.svg"/></BackToCenterButton>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: grid;
justify-content: center;
align-content: center;
position: absolute;
top: ${props => props.activeSide === 'top' ? '0' : -props.height}px;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); `

const ContentWrapper = styled.div`
height: 100vh;
display: grid;
justify-content: center;
align-content: center;
`

const AboutWrapper = styled.div`
display: grid;
height: 500px;
width: 800px;
gap: 16px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;

@media only screen and (max-width: 1200px) {
    height: 500px;
    width: 400px;
    margin-top: -96px;
    gap: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const BackToCenterButton = styled.a`
position: absolute;
text-shadow: 0px 2px 3px #555;
top: ${props => props.height-75}px;
left: ${props => props.width/2-25}px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);    

:hover {
    cursor: pointer;
    filter: invert(50%);
    }
`

const MyFace = styled.img`
grid-row: 1;
grid-column: 1;
width: 100%;
background-color: ${themes[0].card.backgroundColor};
border-radius: 50%;
justify-self: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
padding: 10%;

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 1200px) { 
    width: 200px;
    padding: 5%;
    }
`

const Description = styled.div`
grid-row: 1;
grid-column: 2/3;
width: 200%;
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
padding: 10%;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
display: grid;
justify-items: center;
align-items: center;

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 1200px) {
    grid-row:2;
    grid-column: 1;
    display: grid;
justify-items: center;
align-items: center;
gap:16px;
    width: 100%;
    padding: 0%;
  }`

const SecondDescription = styled.div`
grid-row: 2;
width: 200%;
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
display: grid;
justify-items: center;
align-items: center;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 1200px) {
    grid-row:3;
    grid-column: 1;
    width: 100%;
  }`



const Icon = styled.img`
transform: rotate(90deg);
width: 50px;
height: 50px;
`

const Technologies = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 16px; 
padding-top: 12px; `

const Tag = styled.div`
color: black;
background: ${themes[0].card.backgroundColor};
padding: 12px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
border-radius: 24px;`