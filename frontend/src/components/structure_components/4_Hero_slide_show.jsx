import React from 'react';
import { CCarousel } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import gocsej from '../images/gocsej.png';


const SlideShow = () => {   
    

    return (

        <div className="carousel-wrap">

        

        <CCarousel controls indicators className="carousel-container">

            <CCarouselItem>
                <CImage className="d-block w-100 slide-image" fluid src={gocsej} alt="slide 1"/>
                <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>

            </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="/images/vue.jpg" alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>

        </CCarousel>

        

        </div>

    )
}

export default SlideShow;