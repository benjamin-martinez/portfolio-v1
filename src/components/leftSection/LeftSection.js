import React from "react";
import styled from "styled-components"
import { themes } from "../../ui-styles/colors";
import { BodyIntro } from "../../ui-styles/texts"
import SupernovaProjectCard from "./SupernovaProjectCard";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import ProjectCard from "./ProjectCard";

export default function LeftSection({activeSide, handleBackToCenter}) {

    const { height, width } = useWindowDimensions();
    return (
        <Wrapper activeSide={activeSide} width={width} >
            <ContentWrapper>
                <ProjectsWrapper>
                    <ProfessionalProjects>
                        <BodyIntro>Real-world Projects</BodyIntro>
                        <Projects>
                            <SupernovaProjectCard isEmpty={false}/>
                            <ProjectCard isEmpty={true}/>
                            <ProjectCard isEmpty={true}/>
                            <ProjectCard isEmpty={true}/>
                        </Projects>
                    </ProfessionalProjects>
                    <PersonalProjects>
                        <BodyIntro>Personal Projects</BodyIntro>
                        <Projects>
                            <ProjectCard isEmpty={true}/>
                            <ProjectCard isEmpty={true}/>
                            <ProjectCard isEmpty={true}/>
                            <ProjectCard isEmpty={true}/>
                        </Projects>
                    </PersonalProjects>
                </ProjectsWrapper>
                <BackToCenterButton onClick={handleBackToCenter} height={height} width={width}><Icon src="arrow.svg"/></BackToCenterButton>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
left: ${props => props.activeSide === 'left' ? '0' : -props.width}px;
height: 100vh;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); `

const ContentWrapper = styled.div`
display: grid;
height: 100%;
justify-items: center;
align-items: center;
position: relative;
`

const BackToCenterButton = styled.a`
position: absolute;
text-shadow: 0px 2px 3px #555;
top: ${props => props.height/2 -25}px;
left: ${props => props.width -75}px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);    

:hover {
    cursor: pointer;
    filter: invert(50%);
    }
`

const ProjectsWrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: 1fr 1fr;
gap: 16px; 


@media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const PersonalProjects = styled.div`
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
height: 400px;
width: 400px;
padding: 5%;
z-index: -9;


@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 600px) {
    height: 300px;
    width: 300px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    height: 350px;
    width: 350px;
  }
`

const ProfessionalProjects = styled.div`
background-color: ${themes[0].card.backgroundColor};
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
height: 400px;
width: 400px;
padding: 5%;

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 600px) {
    height: 300px;
    width: 300px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    height: 350px;
    width: 350px;
  }
`

const Icon = styled.img`
transform: rotate(0deg);
width: 50px;
height: 50px;
`

const Projects = styled.div`
display: grid;
height: 90%;
padding-top: 2%;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 4px;`