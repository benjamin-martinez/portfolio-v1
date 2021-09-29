import React, { useState } from "react"
import styled from "styled-components"
import { themes, switchThemes } from "../../ui-styles/colors"

export default function NightMode() {

    const [isDay, setIsDay] = useState(true);

    function handleClick() {
        switchThemes();

        console.log(themes)

        setIsDay(() => !isDay)
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <ButtonWrapper>
                    <ToggleButton isDay={isDay} onClick={handleClick}>
                        { isDay ? <Icon src="sun.svg" /> : <Icon src="moon.svg" />}
                    </ToggleButton>
                    <Slider/>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
top: 25px;
left: 75px;

`

const ContentWrapper = styled.div`
`

const ButtonWrapper = styled.div`
position: relative;
`

const ToggleButton = styled.div`
position: absolute;
top: 2px;
left: ${props => props.isDay ? '2px' : '28px'};
height: 24px;
width: 24px;
border-radius: 50%;
background: ${themes[0].card.backgroundColor};
z-index: 12;
transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);

display: grid;
justify-items: center;
align-items: center;

:hover {
    cursor: pointer;
    filter: invert(20%);
    }

    @media (prefers-color-scheme: dark) {
        background-color: ${themes[1].card.backgroundColor};
    }

`

const Slider = styled.div`
position: absolute;
height: 28px;
width: 54px;
border-radius: 20px;
color: white;
background: black;
`

const Icon = styled.img`
width: 16px;
`