import React, {useState} from 'react';
import { useSpring, animated } from "react-spring"; /*Has to be installed!!! npm install use-spring */
import { Squash as Hamburger } from 'hamburger-react' /*Has to be installed!!! npm install hamburger-react */

const NavigationHun = (props) => {

    const [show, setShow] = useState(true);

    const menuToggle = (e) => {
        setShow(!show);
    }

    const [isOpen, setOpen] = useState(true);



    
    //open animation with react spring for the navigation line
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
                            
                            <div className="menu-icon-container" onClick={menuToggle}>
                              <Hamburger toggled={isOpen} toggle={setOpen} duration={.8}/>
                            </div>
                            <h1 className="main-title">Farkas Gym</h1> {/*Main title*/}
                            <div className="logo-container"></div> {/*Page logo*/}
                        </div>
                        <div className="menu-titles-mover"></div>

                          
                          {

                          show === true
                        
                            ?
                        
                            <animated.div className="menu-titles" id="menu-links" style={openAnimation}> {/*Menu titles*/}
                                <div className="menu menu-benefit"><a href="#benefit-id">Előnyök</a></div>
                                <div className="menu menu-specification"><a href="#specifications-id">Jellemzők</a></div>           
                                <div className="menu menu-workout"><a href="#recommendation-id">Gyakorlatok</a></div>
                                <div className="menu menu-contact"><a href="#contact-id">Kapcsolat</a></div>    
                                <select className="language-selector" id="language" value={props.data} onChange={props.function}>
                                  <option value="hun" >Hun</option>
                                  <option value="eng">Eng</option>
                                </select>                      
                            </animated.div>

                            :

                            null
                          }
                                
            </header>

    );

}

export default NavigationHun;