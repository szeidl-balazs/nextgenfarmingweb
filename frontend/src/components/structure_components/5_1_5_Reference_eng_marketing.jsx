import React from 'react';
import { CImage } from '@coreui/react';
import balorea from '../images/balorea_logo_black.png';
import farkasgym_facebook from '../images/farkas_gym_logo_facebook_profile.png';

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
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={balorea} alt="balorea"/>
                </div>

            </div>


            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">FARKAS GYM logo</p>
                    <p className="accordion__content">Function: brand logo of FARKAS GYM fitness machines.</p>
                    <p className="accordion__content">  
                        Description: FARKAS GYM is the brand of an innovative fitness machine.
                    </p>
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={farkasgym_facebook} alt="farkasgym"/>
                </div>

            </div>


        </div>

    );
}

export default MarketingComponents;