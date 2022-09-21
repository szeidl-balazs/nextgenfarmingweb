import React from 'react';
import arrow_up from '../images/go-up.png'

const BackToTop = () => {

    return (
        <div className="back-to-top-wrapper">

            <img src={arrow_up} alt="arrow_up" className="top-arrow"/>

        </div>
    )
}

export default BackToTop;