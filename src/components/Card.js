import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../ui-styles/colors"



export default function Card({ gridRow, gridCol, icon, fadeCount }) {
    

    return (
        <Wrapper gridRow={gridRow} gridCol={gridCol} fadeCount={fadeCount}>
            <ContentWrapper>
                <Icon src={icon}></Icon>
            </ContentWrapper>
        </Wrapper>
    )
}

const fadeInAnimation = (fadeCount) => keyframes` 
    0% {
        opacity: 0;
    }
    ${fadeCount}% {
        opacity: 0;
     }
    100% {
        opacity: 1;
     }
`

const Wrapper = styled.div`
height: 175px;
width: 175px;
background-color: ${themes[0].card.backgroundColor};
transform: translateZ(20px);
border-radius: 8px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 12px rgba(170, 170, 170, 0.1);
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
z-index: 10;

animation: ${props => fadeInAnimation(props.fadeCount)} ease-in-out 1s;
animation-iteration-count: 1;
animation-fill-mode: forwards;

:hover {
    transform: scale(1.2);
    cursor: pointer;
}

@media (prefers-color-scheme: dark) {
    background-color: ${themes[1].card.backgroundColor};
}

@media only screen and (max-width: 1200px) {
    height: 125px;
    width: 125px;
  }
`

const ContentWrapper = styled.div`
height: 175px;
width: 175px;
display: grid;
justify-items: center;
align-items: center;

@media only screen and (max-width: 1200px) {
    height: 125px;
    width: 125px;
  }
`

const Icon = styled.img`
width: 125px;
height: 125px;
align-self: center;
transition: .2s cubic-bezier(0.075, 0.82, 0.165, 1);
${Wrapper}:hover & {
    filter: invert();  
  }

  @media only screen and (max-width: 1200px) {
    height: 75px;
    width: 75px;
  }

`