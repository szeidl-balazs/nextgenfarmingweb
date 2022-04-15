import React, {useState} from 'react';
import { useSpring, animated } from "react-spring";

const NavigationEng = () => {

    const [show, setShow] = useState(false);

    const menuToggle = (e) => {
        setShow(!show);
    }

    
    //open animation with react spring
   const openAnimation = useSpring({
    from: { 
      maxHeight: "500px" 
    },
    to: { 
      maxHeight: show ? "1200px" : "25px"
    },
    config: { 
      duration: "5000"
    }
  });

    return (
            <header id="top" className="navbar topnav"> {/*Navbar contains menu icon, main title, logo img, menu titles*/}
                        <div className="menu-logo-line"> {/*menu-logo-line contains only menu icon, main title, logo img and position fixed*/}
                            
                            <div className="menu-icon-container">
                            
                                   <input type="checkbox" id="menu_checkbox" /> {/*The menu icon animation is provided by input checkbox tag*/}
                                                        
                                    <label for="menu_checkbox" className="menu-cont" onClick={menuToggle}> {/*Menu icon with circle borders and 3 lines*/}
                                        <div className="menu line1"></div>
                                        <div className="menu line2"></div>
                                        <div className="menu line3"></div>
                                    </label>    
                                    
                            </div>
                            <h1 className="main-title">Farkas Gym</h1> {/*Main title*/}
                            <div className="logo-container"></div> {/*Page logo*/}
                        </div>
                        <div className="menu-titles-mover"></div>

                          
                          {

                          show === true
                        
                            ?
                        
                            <animated.div className="menu-titles" id="menu-links" style={openAnimation}> {/*Menu titles*/}
                                <div className="menu menu-benefit"><a href="#benefit-id">Benefits</a></div>
                                <div className="menu menu-specification"><a href="#specifications-id">Specifications</a></div>           
                                <div className="menu menu-workout"><a href="#recommendation-id">Recommendation</a></div>
                                <div className="menu menu-contact"><a href="#contact-id">Contact</a></div>    
                            </animated.div>

                            :

                            null
                          }
                                
            </header>

    );

}

export default NavigationEng;