import React from 'react';

const PresentationsEng = () => {

    return (

        <div className="presentation">
            <div id="recommendation-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
            <h2>RECOMMENDED WORKOUTS</h2>

            {/*vimeo*/}
            <iframe className="video" title="Farkas Gym video" src="https://player.vimeo.com/video/664006203?h=a9da9e12ec" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

    );
}

export default PresentationsEng;