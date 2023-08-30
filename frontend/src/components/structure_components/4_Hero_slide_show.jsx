import React from 'react';
import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import wosr_noon from '../images/wosr_noon.jpg';
import wheat_sunset from '../images/wheat_sunset.jpg';
import corn_side from '../images/corn_side.jpg';
import soy_sunset from '../images/soy_sunset.jpg';
import sunflower_close from '../images/sunflower_close.jpg';


const SlideShow = () => {   
    

    return (    

        <CCarousel controls indicators className="carousel-container">

            <CCarouselItem>
                <CImage className="d-block w-100" src={wosr_noon} alt="slide 1" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100 slide-image" fluid src={corn_side} alt="slide 2"/>     
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={wheat_sunset} alt="slide 3" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={sunflower_close} alt="slide 4" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={soy_sunset} alt="slide 5" />
            </CCarouselItem>

        </CCarousel> 

    )
}

export default SlideShow;