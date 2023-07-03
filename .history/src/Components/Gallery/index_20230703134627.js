import React from 'react'
import { GalleryContainer, GalleryH1, GalleryH2, GalleryWrapper, GalleryCard, GalleryIcon, GalleryP } from './GalleryComponents';
import Icon1 from '../../Images/music.svg';
import Icon2 from '../../Images/cooking.svg';
import Icon3 from '../../Images/reading.svg';
import Icon4 from '../../Images/exercise.svg';
import Icon5 from '../../Images/writing.svg';
const Gallery = () => {
    return (
        <>
            <GalleryContainer id="interests">
                <GalleryH1> Hobbies</GalleryH1>
                <GalleryWrapper>
                    <GalleryCard>
                        <GalleryIcon src={Icon1} />
                        <GalleryH2>Music</GalleryH2>
                        <GalleryP>Even though my training as a violin player is in classical music, I enjoy music across all genres and languages. Recently, I've really gotten into Kenshi Yonezu's music. Go check him out!</GalleryP>
                    </GalleryCard>
                    <GalleryCard>
                        <GalleryIcon src={Icon2} />
                        <GalleryH2>Cooking</GalleryH2>
                        <GalleryP>Born out of my love for good food, I'm always eager to try out new recipes. Szechuan cuisine is a personal favorite!</GalleryP>
                    </GalleryCard>
                    <GalleryCard>
                        <GalleryIcon src={Icon3} />
                        <GalleryH2>Reading</GalleryH2>
                        <GalleryP>I've always been an avid fantasy reader. Two of my top picks would definitely be Way of Kings and Name of the Wind. Always open to book recommendations! </GalleryP>
                    </GalleryCard>
                    <GalleryCard>
                        <GalleryIcon src={Icon4} />
                        <GalleryH2>Exercise</GalleryH2>
                        <GalleryP>A short distance swimmer at heart, swimming has been a big part of my life for years. When I'm not in the pool, I'll attempt to work out. Occasionally.</GalleryP>
                    </GalleryCard>
                    <GalleryCard>
                        <GalleryIcon src={Icon5} />
                        <GalleryH2>Writing</GalleryH2>
                        <GalleryP> Always striving to be a better writer and thinker. Check out some of my articles <a href="https://www.thedp.com/staff/andrew-lou" class="writingLink">here</a>!</GalleryP>
                    </GalleryCard>
                </GalleryWrapper>
            </GalleryContainer>
        </>
    )
}

export default Gallery
