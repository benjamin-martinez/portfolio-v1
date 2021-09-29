import React, { useState } from "react"
import styled from "styled-components"

export default function ProjectCard({isEmpty}) {

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        console.log(isActive)
        setIsActive(() => !isActive)
    }

    return (
        <Wrapper>
            {!isEmpty &&
            <ContentWrapper isActive={isActive} onClick={handleClick}>
                <CoverImage src="supernova-logo-white.png"/>
                {isActive && <ProjectDetails />}
            </ContentWrapper>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);



`

const ContentWrapper = styled.div`
height: ${props => props.isActive ? '400px' : '100%'};
width: ${props => props.isActive ? '818px' : '100%'};
z-index: ${props => props.isActive ? '10000' : '10'};
margin-left: ${props => props.isActive ? '-176px' : '0px'};
margin-top: ${props => props.isActive ? '-60px' : '0px'};
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
display: grid;
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
background: black;
justify-items: center;
align-items: center;

:hover {
    cursor: pointer;
    transform: scale(1.025);
}

@media only screen and (max-width: 600px) {
    height: ${props => props.isActive ? '616px' : '100%'};
    width: ${props => props.isActive ? '300px' : '100%'};
    z-index: ${props => props.isActive ? '10000' : '10'};
    margin-left: ${props => props.isActive ? '-15px' : '0px'};
    margin-top: ${props => props.isActive ? '-54px' : '0px'};
}

@media only screen and (min-width: 601px) and (max-width: 1200px) {
    height: ${props => props.isActive ? '716px' : '100%'};
    width: ${props => props.isActive ? '350px' : '100%'};
    z-index: ${props => props.isActive ? '10000' : '10'};
    margin-left: ${props => props.isActive ? '-17px' : '0px'};
    margin-top: ${props => props.isActive ? '-57px' : '0px'};
}

`

const CoverImage = styled.img`
max-width: 150px;
max-height: 150px;

@media only screen and (max-width: 600px) {
    width: 100px;
}
`

const ProjectDetails = styled.div``