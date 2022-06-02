import React from 'react';

const PresentationsEng = () => {

    return (

        <div className="presentation">
            <div id="recommendation-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
            <h2>SERVICES</h2>

            {/*vimeo*/}
            <iframe className="video" title="Farkas Gym video" src="https://player.vimeo.com/video/676863215?h=243d66f469" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

    );
}

export default PresentationsEng;