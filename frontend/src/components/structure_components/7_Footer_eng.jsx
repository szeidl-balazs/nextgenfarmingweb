import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import GDPREng from './11_GDPR_eng';
import CookiesEng from './10_Cookies_eng';
import Terms from './12_terms_and_conditions'

const FooterEng = () => {

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

    return (

        <div>

            {
                gdpropen === true
                ?
                <div className="legal-wrap">
                  <button className="gdpr button-wo-design closingIcon" onClick={gdprOpener}><animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                  <GDPREng />
                </div>
                :
                null
            }

            {
              cookieopen === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={cookieOpener}><animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <CookiesEng />
              </div>
              :
              null
            }

{
              termsopen === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={termsOpener}><animated.div style={iconAnimation3} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <Terms />
              </div>
              :
              null
            }


            <div id="contact-id" className="footer">            
                <div className="contact">Contact:
                    <div>                
                        <a href="mailto: fjuszas@gmail.com">✉ Email message</a>
                        <a href="🖀 +36 30 936 1899">🖀 +36 30 936 1899</a>
                    </div>
                </div>
                <div className="copyright">Copyright © 2021. Farkas János s.p. All rights reserved!</div>
                <button className="gdpr button-wo-design" onClick={gdprOpener}>Privacy policy <animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={cookieOpener}>Cookie policy <animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={termsOpener}>General terms & conditions <animated.div style={iconAnimation3} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
            </div>

        </div>


    );
}

export default FooterEng;