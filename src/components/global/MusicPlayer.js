import React, { useState } from "react"
import styled from "styled-components"
import girlFromPetaluma from "../../ui-styles/girl-from-petaluma.mp3"
import recordScratch from "../../ui-styles/record-scratch.mp3"

export default function MusicPlayer() {

    const [play, setPlay] = useState("true")

    function toggleMusic() {
        if (play) 
            document.getElementById('player').play()
        else {
            document.getElementById('player-2').play();
            document.getElementById('player').pause();
        }
            
        setPlay(() => !play)
    }


    return (
        <Wrapper>
            <ContentWrapper>
                <audio id="player-2" src={recordScratch}></audio>
                <Audio id="player" src={girlFromPetaluma} loop autoplay/>
                <Controls>
                    {play && <Icon onClick={toggleMusic} src="play.png" /> }
                    {!play && <Icon onClick={toggleMusic} src="pause.png" /> }
                </Controls>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
top: 25px;
left: 25px;
z-index: 200;

:-webkit-media-controls-mute-button {
    display: block !important;
}
`

const ContentWrapper = styled.div`
`

const Audio = styled.audio`
z-index: 20

audio::-webkit-media-controls-mute-button {
    background: red;
}`

const Controls = styled.div`
`

const Icon = styled.img`
width: 25px;
height: 25px;
transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);

:hover {
cursor: pointer;
filter: invert(50%);
}
`