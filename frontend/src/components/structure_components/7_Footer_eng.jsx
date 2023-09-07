import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import GDPREng from './11_GDPR_eng';
import CookiesEng from './10_Cookies_eng';
import TermsEng from './12_terms_and_conditions_eng'
import ImprintEng from './13_imprint_eng';

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

  //Imprint opener

  const [imprintEng, setImprintOpener] = useState(false);

  const imprintEngOpener = (e) => {
    setImprintOpener(!imprintEng);
  }


  //rotate animation
    const iconAnimation1 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#0fee0f"        
      },
      to: {
       transform: gdpropen ? "rotate(0deg)" : "rotate(180deg)",
       color: gdpropen ? "rgba(230, 240, 100, 1)" : "#0fee0f"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation2 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#0fee0f"        
      },
      to: {
       transform: cookieopen ? "rotate(0deg)" : "rotate(180deg)",
       color: cookieopen ? "rgba(230, 240, 100, 1)" : "#0fee0f"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation3 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#0fee0f"        
      },
      to: {
       transform: termsopen ? "rotate(0deg)" : "rotate(180deg)",
       color: termsopen ? "rgba(230, 240, 100, 1)" : "#0fee0f"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation4 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#0fee0f"        
      },
      to: {
       transform: imprintEng ? "rotate(0deg)" : "rotate(180deg)",
       color: imprintEng ? "rgba(230, 240, 100, 1)" : "#0fee0f"        
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
                <TermsEng />
              </div>
              :
              null
            }

            {
              imprintEng === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={imprintEngOpener}><animated.div style={iconAnimation4} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <ImprintEng />
              </div>
              :
              null
            }


            <div id="contact-id" className="footer">            
                <div className="contact">Contact:
                    <div>                
                        <a href="mailto: office.nextgenfarming.ro">✉ Email message</a>
                        <a href="🖀 +36 1 222 3333">🖀 +36 1 222 3333</a>
                    </div>
                </div>
                <div className="copyright">Copyright © 2023. NEXT GEN FARMING Ltd. All rights reserved!</div>
                <button id="gdpr-id" className="gdpr button-wo-design" onClick={gdprOpener}>Privacy policy <animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={cookieOpener}>Cookie policy <animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={termsOpener}>General terms & conditions <animated.div style={iconAnimation3} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={imprintEngOpener}>Imprint <animated.div style={iconAnimation4} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
            </div>

        </div>


    );
}

export default FooterEng;