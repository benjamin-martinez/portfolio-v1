import React from "react"
import styled from "styled-components"
import useWindowDimensions from "../../customHooks/useWindowDimensions"

export default function Socials() {

    const { width } = useWindowDimensions();

    return (
        <Wrapper width={width}>
            <ContentWrapper>
                <a href="https://github.com/benjamin-martinez" target="_blank" rel="noreferrer"><Icon src="github.png" /></a>
                <a href="https://www.linkedin.com/in/benjamin-martinez-02950a202/" target="_blank" rel="noreferrer"><Icon src="linkedin.png"/></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><Icon src="twitter.png"/></a>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
left: ${props=> props.width-125}px;
top: 25px;
z-index: 20;`

const ContentWrapper = styled.div` 
width: 100px;
display: grid;
justify-items: center;
gap: 5px;
align-items: center;
grid-auto-flow: column`

const Icon = styled.img`
width: 25px;
height: 25px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);

:hover {
    cursor: pointer;
    filter: invert(50%);
    }
`