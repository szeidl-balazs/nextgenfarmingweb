import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import GDPR from './11_GDPR';

const Footer = () => {

    const [gdpropen, setOpener] = useState(false);

    const gdprOpener = (e) => {
        
        setOpener(!gdpropen);               
    }

     //rotate animation
     

     const iconAnimation = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
        transform: gdpropen ? "rotate(0deg)" : "rotate(180deg)",
        color: gdpropen ? "rgba(230, 240, 100, 1)" : "#00ffff"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    return (

        <div>

            {
                gdpropen === true
                ?

                <div className="legal-wrap">
                  <button className="gdpr button-wo-design closingIcon" onClick={gdprOpener}><animated.div style={iconAnimation} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                  <GDPR/>
                </div>
                :
                null
            }

            <div id="contact-id" className="footer">            
                <div className="contact">Kapcsolat:
                    <div>                
                        <a href="mailto: fjuszas@gmail.com">✉ Email üzenet</a>
                        <a href="🖀 +36 30 936 1899">🖀 +36 30 936 1899</a>
                    </div>
                </div>
                <div className="copyright">Copyright © 2021. Farkas János ev. minden jog fenntartva!</div>
                <button className="gdpr button-wo-design" onClick={gdprOpener}>Adatvédelem <animated.div style={iconAnimation} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <div className="cookies"><a href="7_2_cookie_text.html" target="_blank">Süti (cookie) szabályzat</a></div>
                <div className="terms-and-conditions"><a href="7_5_terms_and_conditions.html" target="_blank">Felhasználási feltételek</a></div>            
            </div>

        </div>


    );
}

export default Footer;