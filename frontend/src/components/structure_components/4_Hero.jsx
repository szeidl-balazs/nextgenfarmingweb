import {React, useState} from 'react';

const Hero = () => {

    const [modal, setModal] = useState(false);

    
    /*
    const forSaleSwitch = () => {
        alert('Production license is for sale including full documentation for manufacturing. The product is patent protected. Patent registration number: 005188. For more information call or write the contact!')
    }
    */

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
                    <div className="modal-text" onClick={forSaleSwitch}><a className="modal-text" href="#contact-id">Production license is for sale including full documentation for manufacturing. The product is patent protected. Patent registration number: 005188. For more information call or write the contact!</a></div>
                </div>

                :

                null
            }
        
            </div>
        </div>

    );
}

export default Hero;