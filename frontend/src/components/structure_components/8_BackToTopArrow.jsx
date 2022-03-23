import React from 'react';
import arrow_up from '../images/arrow_up.svg'

const BackToTopArrow = () => {

    return (

        <div className="back-to-top-wrapper">
            <a href="#top" class="back-to-top-link tooltip" label="Scroll to Top"><span class="tooltiptext">Tetejére</span><img src={arrow_up} alt={"up-arrow"}/></a>
        </div>

    );
}

export default BackToTopArrow;