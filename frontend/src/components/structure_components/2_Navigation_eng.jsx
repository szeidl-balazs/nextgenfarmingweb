import React, {useState} from 'react';
import { useSpring, animated } from "react-spring"; /*Has to be installed!!! npm install use-spring */
import { Squash as Hamburger } from 'hamburger-react' /*Has to be installed!!! npm install hamburger-react */

const NavigationEng = (props) => {

  //show variable controls that the menu is visible in page laod or not

    const [show, setShow] = useState(false);

    const menuToggle = (e) => {
        setShow(!show);
    }

    //isOpen variable controls that the Hamburger icon is open or closed

    const [isOpen, setOpen] = useState(false);

    
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
                            <h1 className="main-title">BAL<span className="orsi-title">O</span>REA WEB</h1> {/*Main title*/}
                            
                            {/*Page logo*/}
                            <div className="logo-container">

                                <div className="bal">BAL</div>                  
                                <div className="orsi">O</div>
                                <div className="rea">REA</div>             
                                <div className="t">T</div>
                                <div className="e">E</div>
                                <div className="a">A</div>
                                <div className="m">M</div>                               

                            </div> 

                        </div>                        
                        
                        <div className="menu-titles-mover"></div>
                                                  
                          {

                          show === true
                        
                            ?
                            
                              <animated.div className="menu-titles" id="menu-links" style={openAnimation}> 
                                <div className="menu menu-benefit"><a href="#benefit-id">Introduction</a></div>
                                <div className="menu menu-specification"><a href="#specifications-id">Reference projects</a></div>           
                                <div className="menu menu-workout"><a href="#recommendation-id">Services</a></div>
                                <div className="menu menu-contact"><a href="#contact-id">Contact</a></div>    
                                <select className="language-selector" value={props.data} onChange={props.function}>
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

export default NavigationEng;