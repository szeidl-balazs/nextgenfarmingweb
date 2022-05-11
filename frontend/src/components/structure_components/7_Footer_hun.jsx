import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import GDPRHun from './11_GDPR_hun';
import CookiesHun from './10_Cookies_hun';
import TermsHun from './12_terms_and_conditions_hun'
import ImprintHun from './13_imprint_hun';

const Footer = () => {

  //GDPR opener/closer 
  const [gdpropen, setGdprOpener] = useState(false);

  const gdprOpener = (e) => {        
    setGdprOpener(!gdpropen);               
  }

  //Cookie rules opener/closer

  const [cookieopen, setCookieOpener] = useState(false);

  const cookieOpener = (e) => {
    setCookieOpener(!cookieopen);
  }

  // Terms and conditions opener

  const [termsopen, setTermsOpener] = useState(false);

  const termsOpener = (e) => {        
    setTermsOpener(!termsopen);               
  }

  // Imprint opener

  const [imprint, setImprint] = useState(false);

  const imprintOpener = (e) => {
    setImprint(!imprint);
  }


  //rotate animation
    const iconAnimation1 = useSpring({
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

    const iconAnimation2 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
       transform: cookieopen ? "rotate(0deg)" : "rotate(180deg)",
       color: cookieopen ? "rgba(230, 240, 100, 1)" : "#00ffff"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation3 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
       transform: termsopen ? "rotate(0deg)" : "rotate(180deg)",
       color: termsopen ? "rgba(230, 240, 100, 1)" : "#00ffff"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation4 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
       transform: imprint ? "rotate(0deg)" : "rotate(180deg)",
       color: imprint ? "rgba(230, 240, 100, 1)" : "#00ffff"        
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
                  <button className="gdpr button-wo-design closingIcon" onClick={gdprOpener}><animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                  <GDPRHun />
                </div>
                :
                null
            }

            {
              cookieopen === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={cookieOpener}><animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <CookiesHun />
              </div>
              :
              null
            }

            {
              termsopen === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={termsOpener}><animated.div style={iconAnimation3} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <TermsHun />
              </div>
              :
              null
            }

            {
              imprint === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={imprintOpener}><animated.div style={iconAnimation4} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <ImprintHun />
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
                <button className="gdpr button-wo-design" onClick={gdprOpener}>Adatvédelem <animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={cookieOpener}>Süti (cookie) szabályzat <animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={termsOpener}>Felhasználási feltételek <animated.div style={iconAnimation3} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={imprintOpener}>Imprint<animated.div style={iconAnimation4} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
            </div>

        </div>


    );
}

export default Footer;