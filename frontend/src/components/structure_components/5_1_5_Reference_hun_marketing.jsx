import React from 'react';
import { CImage } from '@coreui/react';
import balorea from '../images/balorea_logo_black.png';
import farkasgym_facebook from '../images/farkas_gym_logo_facebook_profile.png';

const MarketingComponentsHun = () => {

    return (

        
        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">BALOREA cég logó</p>
                    <p className="accordion__content">Rendeltetés: a BALOREA TEAM cég logója.</p>
                    <p className="accordion__content">  
                        Részletek: BALOREA TEAM Kft. egy családi vállalkozás, mely sport és webfejlesztési szolgáltatásokkal foglalkozik. 
                    </p>
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={balorea} alt="balorea"/>
                </div>

            </div>


            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">FARKAS GYM termék logó</p>
                    <p className="accordion__content">Rendeltetés: FARKAS GYM fitneszgép logója.</p>
                    <p className="accordion__content">  
                        Részletek: FARKAS GYM egy innovatív fitnesz gép márkája.
                    </p>
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={farkasgym_facebook} alt="farkasgym"/>
                </div>

            </div>


        </div>

    );
}

export default MarketingComponentsHun;