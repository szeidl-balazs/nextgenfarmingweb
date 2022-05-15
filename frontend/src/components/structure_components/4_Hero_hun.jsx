import {React, useState} from 'react';

const HeroHun = () => {

    const [modal, setModal] = useState(false);

    
    const forSaleSwitch = (e) => {
        setModal(!modal);
    }



    return (
        
        <div className="intro-container">

            <div className="forsale-wrap">
                <div className="disc" onClick={forSaleSwitch}></div>
                <button className="forsale" >Gyártási licensz eladó!</button>
            </div>

            <div className="hero-image" >            
        
            {

                modal === true 

                ?

                <div className="modal">
                    <div className="modal-text" onClick={forSaleSwitch}><a className="modal-text" href="#contact-id">Gyártási licensz eladó a teljes gyártási dokumentációval. A termék szabadalmi oltalommal védett. Részletes információért kérem hívjon a "kapcsolat" menüben megadott telefonszámon!</a></div>
                </div>

                :

                null
            }
        
            </div>
        </div>

    );
}

export default HeroHun;