import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated } from "react-spring";
import GDPR from './11_GDPR';

const Footer = () => {

    const [gdpropen, setOpener] = useState(false);

    const gdprOpener = (e) => {
        
        setOpener(!gdpropen);               
    }

     //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#00ffff"
    },
    to: {
      transform: gdpropen ? "rotate(180deg)" : "rotate(0deg)",
      color: gdpropen ? "rgba(230, 240, 100, 1)" : "#00ffff"
    },
    config: { 
      duration: "500" 
    }
  });

    return (

        <div>

            {
                gdpropen === true
                ?
                <GDPR/>
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
                <div className="gdpr" onClick={gdprOpener}><button className="button-wo-design">Adatvédelem</button><animated.div style={iconAnimation}><ExpandMoreIcon/></animated.div></div>
                <div className="cookies"><a href="7_2_cookie_text.html" target="_blank">Süti (cookie) szabályzat</a></div>
                <div className="terms-and-conditions"><a href="7_5_terms_and_conditions.html" target="_blank">Felhasználási feltételek</a></div>            
            </div>

        </div>


    );
}

export default Footer;