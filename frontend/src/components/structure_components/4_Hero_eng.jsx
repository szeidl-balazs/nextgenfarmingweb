import {React, useState} from 'react';

const HeroEng = () => {

    const [modal, setModal] = useState(false);

    
    const forSaleSwitch = (e) => {
        setModal(!modal);
    }



    return (
        
        <div className="intro-container">

            <div className="forsale-wrap">
                <div className="disc" onClick={forSaleSwitch}></div>
                <button className="forsale" >Call for bid!</button>
            </div>

            <div className="hero-image hero-image--style" >            
        
            {

                modal === true 

                ?

                <div className="modal">
                    <div className="modal-text" onClick={forSaleSwitch}><a className="modal-text" href="#contact-id">Web design and web site development. For more information write email or call the contact person!</a></div>
                </div>

                :

                null
            }
        
            </div>
        </div>

    );
}

export default HeroEng;