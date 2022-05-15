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
                <button className="forsale" >Production license for sale!</button>
            </div>

            <div className="hero-image" >            
        
            {

                modal === true 

                ?

                <div className="modal">
                    <div className="modal-text" onClick={forSaleSwitch}><a className="modal-text" href="#contact-id">Production license is for sale including full documentation for manufacturing. The product is patent protected. For more information write email to the contact person, please!</a></div>
                </div>

                :

                null
            }
        
            </div>
        </div>

    );
}

export default HeroEng;