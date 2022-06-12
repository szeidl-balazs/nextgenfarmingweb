import React from 'react';

const MarketingComponents = () => {

    return (

        
        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">BALOREA logo</p>
                    <p className="accordion__content">Function: corporate logo of BALOREA TEAM Ltd.</p>
                    <p className="accordion__content">  
                    Description: BALOREA TEAM Ltd. is a family company focusing on sport coaching and web development services.
                    </p>
                    <p className="accordion__content">
                    Highlights: sport coaching, rhythmic gymnastics, web development.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="balorea"></div>
                </div>

            </div>


            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">FARKAS GYM logo</p>
                    <p className="accordion__content">Function: brand logo of FARKAS GYM fitness machines.</p>
                    <p className="accordion__content">  
                    Description: FARKAS GYM is the brand of an innovative fitness machine.
                    </p>
                    <p className="accordion__content">
                    Highlights: sport, fitness, fitness machine.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="farkasgym-logo"></div>
                </div>

            </div>


        </div>

    );
}

export default MarketingComponents;