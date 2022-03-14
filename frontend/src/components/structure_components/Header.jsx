import React, {useState} from 'react';


const Header = () => {

    return (
            <header id="top" className="navbar topnav"> {/*Navbar contains menu icon, main title, logo img, menu titles*/}
                        <div className="menu-logo-line"> {/*menu-logo-line contains only menu icon, main title, logo img and position fixed*/}
                            
                            <div className="menu-icon-container">
                            
                                   {/* <input type="checkbox" id="menu_checkbox" onclick="myFunction()" /> */}{/*The menu icon animation is provided by input checkbox tag*/}
                                                        
                                    <label for="menu_checkbox" className="menu-cont"> {/*Menu icon with circle borders and 3 lines*/}
                                        <div className="menu line1"></div>
                                        <div className="menu line2"></div>
                                        <div className="menu line3"></div>
                                    </label>    
                                    
                            </div>
                            <h1 className="main-title">Ritmikus Gimnasztika Komárom</h1> {/*Main title*/}
                            <div className="logo-container"></div> {/*Page logo*/}
                        </div>
                        <div className="menu-titles-mover"></div>
                        
                        <div className="menu-titles" id="menu-links"> {/*Menu titles*/}
                            <div className="menu menu-benefit"><a href="#benefit-id">Előnyök</a></div>
                            <div className="menu menu-specification"><a href="#specifications-id">Jellemzők</a></div>           
                            <div className="menu menu-workout"><a href="#recommendation-id">Gyakorlatok</a></div>
                            <div className="menu menu-contact"><a href="#contact-id">Kapcsolat</a></div>    
                        </div>
                                
                    </header>

    );

}

export default Header;