import React from 'react';
import arrow_up from '../images/uparrow.svg'

const BackToTop = () => {

    return (
        <div className="back-to-top-wrapper">

            
                <a href="#top" >
                   
                    <img src={arrow_up} alt={"up-arrow"} className="top-arrow"/>
                    
                </a>
            

        </div>
    )
}

export default BackToTop;