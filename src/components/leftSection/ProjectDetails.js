import React from "react"
import styled, { keyframes } from "styled-components"
import { MediumText} from "../../ui-styles/texts"

export default function ProjectDetails() {
    return (
        <Wrapper>
            <ContentWrapper>
                <ProjectLink href="https://github.com/benjamin-martinez/" target="_blank">
                    <MediumText>Go to repo</MediumText>
                    <Icon src="github.png" />
                    </ProjectLink>
                <ProjectLink href="http://supernova-virtual-designer-rfe.herokuapp.com/" target="_blank">
                    <MediumText>Go to demo</MediumText>
                    <Icon src="react-logo.svg" />
                    </ProjectLink>
                
            </ContentWrapper>
        </Wrapper>
    )
}

const fadeInAnimation = keyframes` 
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    15% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
     }
`


const Wrapper = styled.div`
grid-column: 2/-1;
grid-row: 1/-1;

animation: ${fadeInAnimation} cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
animation-iteration-count: 1;
animation-fill-mode: forwards;

@media only screen and (max-width: 1200px) { 
grid-column: 1;
grid-row: 3;
}
`

const ContentWrapper = styled.div`
display:  grid;
justify-items: center;
align-items: center;
gap:16px;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;

@media only screen and (max-width: 1200px) { 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    }
`

const ProjectLink = styled.a`
background: white;
height: 300px;
width: 200px;
padding: 16px;
border-radius: 8px;
text-decoration: none;
color: black;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
display: grid;
justify-items: center;
align-items: center;
gap: 8px;

:hover {
    transform: scale(1.1)
}

@media only screen and (max-width: 1200px) { 
    height: 150px;
    width: 150px;
    }
`

const Icon = styled.img`
width: 100px;

@media only screen and (max-width: 1200px) { 
    width: 75px;
    }
    `