import React from 'react';
import arrow_up from '../images/uparrow.svg'

const BackToTop = () => {

    return (
        <div className="back-to-top-wrapper">

            <a href="#top" className="back-to-top-link tooltip" label="Scroll to Top"><img src={arrow_up} alt="arrow_up" className="top-arrow"/></a>

        </div>
    )
}

export default BackToTop;