import React from 'react';
import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import wedding from '../images/weddingzoeandalex.png'
import pizza from '../images/pizza.png';
import gocsej from '../images/gocsej.png';
import farkasgym from '../images/farkasgym1.png';


const SlideShow = () => {   
    

    return (    

        <CCarousel controls indicators className="carousel-container">

            <CCarouselItem>
                <CImage className="d-block w-100" src={wedding} alt="slide 3" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100 slide-image" fluid src={gocsej} alt="slide 1"/>     
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={pizza} alt="slide 2" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={farkasgym} alt="slide 3" />
            </CCarouselItem>

        </CCarousel> 

    )
}

export default SlideShow;