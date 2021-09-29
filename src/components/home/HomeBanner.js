import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tilt from "react-tilt"
import Card from "../Card";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

export default function HomeBanner({handleButtonClick, activeSide}) {

    const { height, width } = useWindowDimensions();

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        if (activeSide === 'center') {
            slideCenter()
        }
    }, [activeSide])
    //transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
    //transition: 1s cubic-bezier(.03,.98,.52,.99); 


    const options = {
        reverse:        false,  // reverse the tilt direction
        max:            10,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          100,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(0.075, 0.82, 0.165, 1)",    // Easing on enter/exit.
    }

    function slideLeft() {
        setLeft(-width)
        handleButtonClick('right')
    }

    function slideRight() {
        setLeft(width)
        handleButtonClick('left')
    }

    function slideUp() {
        setTop(-height)
        handleButtonClick('bottom')
    }

    function slideDown() {
        setTop(height)
        handleButtonClick('top')
    }

    function slideCenter() {
        setTop(0)
        setLeft(0)
    }

    return (
        <Wrapper width={width} left={left} top={top}>
            <Tilt className="Tilt" options={options} >
                <ContentWrapper className="Tilt-inner" >
                    {/*Top Card*/}
                    <CardWrapper gridRow="1" gridCol="2" onClick={slideDown}><Card icon="user.svg" fadeCount={20} /></CardWrapper>
                    {/*Left Card*/}
                    <CardWrapper gridRow="2" gridCol="1" onClick={slideRight}><Card icon="react-logo.svg" fadeCount={40}/></CardWrapper>
                    {/*Right Card*/}
                    <CardWrapper gridRow="2" gridCol="3" onClick={slideLeft}><Card icon="wordpress.svg" fadeCount={40}/></CardWrapper>
                    {/*Bottom Card*/}
                    <CardWrapper gridRow="3" gridCol="2" onClick={slideUp}><Card icon="blockchain.svg" fadeCount={60}/></CardWrapper>
                </ContentWrapper>
            </Tilt>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
display: grid;
justify-items: center;
align-items: center;
top: ${props => props.top}px;
left: ${props => props.left}px;
height: 100vh;
z-index: 5;
width: ${props => props.width}px;
transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); 
`

const ContentWrapper = styled.div` 

margin: 5%;
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap:32px;
transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1); 
`

const CardWrapper = styled.div`
grid-row: ${props => props.gridRow};
grid-column: ${props => props.gridCol};`