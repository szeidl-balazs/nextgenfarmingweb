import React from 'react';
import '../css_files/3_1_hero.css';

const SlideShow = () => {

    /*slide show*/

    /*
    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    } */
    

    return (

        <div className="slide-show-wrap">

                <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="../images/farkasgym1.png" alt="slideimage" id="farkasgym1" className="slide-img"/>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="../images/game_character.png" alt="slideimage" className="slide-img"/>
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="../images/pricing_table2.png" alt="slideimage" className="slide-img"/>
                    <div className="text">Caption Three</div>
                </div>

            </div>


            <div className="dot-wrap">
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
            </div>

        </div>

    )
}

export default SlideShow;