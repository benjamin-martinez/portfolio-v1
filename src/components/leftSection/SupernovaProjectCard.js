import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import ProjectDetails from "./ProjectDetails";

export default function SupernovaProjectCard({isEmpty}) {

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        console.log(isActive)
        setIsActive(() => !isActive)
    }

    return (
        <Wrapper>
            {isActive && <X src="x.svg"onClick={handleClick} />}
            {!isEmpty &&
            <ContentWrapper isActive={isActive} onClick={handleClick}>
                <CoverImage src="supernova-logo-white.png"/>
                {isActive && <TechStack>
                    <Tag>React.js</Tag>
                    <Tag>Redux</Tag>
                    <Tag>MongoDB</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>GraphQL</Tag>
                    <Tag>Shopify</Tag>
                </TechStack>}
                {isActive && <ProjectDetails isActive={isActive} /> }
                
            </ContentWrapper>
            }
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
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
position: relative;
`

const ContentWrapper = styled.div`
height: ${props => props.isActive ? '400px' : '100%'};
width: ${props => props.isActive ? '818px' : '100%'};
z-index: ${props => props.isActive ? '100' : '10'};
margin-left: ${props => props.isActive ? '-20px' : '0px'};
margin-top: ${props => props.isActive ? '-60px' : '0px'};
padding: ${props => props.isActive ? '16px' : '0px'};
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
display: grid;
grid-template-columns: ${props => props.isActive ? '1fr 1fr 1fr' : '1fr'};
grid-template-rows: ${props => props.isActive ? '1fr 1fr' : '1fr'};
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
background: black;
justify-items: center;
align-items: center;

:hover {
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    transform: ${props => props.isActive ? 'scale(1)' : 'scale(1.025)'};
}

@media only screen and (max-width: 600px) {
    height: ${props => props.isActive ? '616px' : '100%'};
    width: ${props => props.isActive ? '300px' : '100%'};
    z-index: ${props => props.isActive ? '10000' : '10'};
    margin-left: ${props => props.isActive ? '-15px' : '0px'};
    margin-top: ${props => props.isActive ? '-54px' : '0px'};

    grid-template-columns: 1fr;
    grid-template-rows: ${props => props.isActive ? '1fr' : '1fr 1fr 1fr'};
}

@media only screen and (max-width: 1200px) {
    height: ${props => props.isActive ? '716px' : '100%'};
    width: ${props => props.isActive ? '350px' : '100%'};
    z-index: ${props => props.isActive ? '10000' : '10'};
    margin-left: ${props => props.isActive ? '-17px' : '0px'};
    margin-top: ${props => props.isActive ? '-57px' : '0px'};
    grid-template-columns: 1fr;
    grid-template-rows: ${props => props.isActive ? '1fr' : '1fr 1fr 1fr'};
    gap:16px;
}

`

const CoverImage = styled.img`
max-width: 150px;
max-height: 150px;

@media only screen and (max-width: 600px) {
    width: 100px;
}
`

const X = styled.img`
position: absolute;
top: -45px;
left: -5px;
z-index: 5000;
filter: invert();
height: 25px;
width: 25px;

:hover {
    cursor: pointer;
}
`

const TechStack = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

animation: ${fadeInAnimation} cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
animation-iteration-count: 1;
animation-fill-mode: forwards;`

const Tag = styled.div`
color: black;
background: white;
padding: 12px;
border-radius: 24px;`