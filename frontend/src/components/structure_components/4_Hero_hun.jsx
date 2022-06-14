import {React, useState} from 'react';
import SlideShow from './4_Hero_slide_show';

const HeroHun = () => {

    const [modal, setModal] = useState(false);

    
    const forSaleSwitch = (e) => {
        setModal(!modal);
    }

    
    return (
        
        <div className="intro-container">

            <div className="forsale-wrap">
                <div className="disc" onClick={forSaleSwitch}></div>
                <button className="forsale" >Hívjon ajánlatért!</button>
            </div>

            <div className="hero-image" >  

            <SlideShow/>          
        
            {

                modal === true 

                ?

                <div className="modal">
                    <div className="modal-text" onClick={forSaleSwitch}><a className="modal-text" href="#contact-id">Egyedi weboldal programozás. Részletesebb információért érdeklődjön emailben vagy hívjon a megadott telefonszámon!</a></div>
                </div>

                :

                null
            }
        
            </div>
        </div>

    );
}

export default HeroHun;