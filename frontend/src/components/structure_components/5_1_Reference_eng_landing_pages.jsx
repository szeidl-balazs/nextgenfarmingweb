import React from 'react';

const LandingPages = () => {


    return (
    
        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Farkas Gym</p>
                    <p className="accordion__content">URL: <a href="https://farkasgym.hu/" rel="noreferrer" target="_blank">www.farkasgym.hu</a></p>
                    <p className="accordion__content">  
                        Description: Farkas Gym has been dedicated for introduction and promotion of an innovative fitness machine."
                    </p>
                    <p className="accordion__content">
                        Highlights: React technology, Material UI icons, Use Spring animation, bilingual, 
                        fix header section with menu icon - main title - logo, minimalist design - details only on click, 
                        lightening fast page load - section and language toggling, fully responsive in each device size readable.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="farkasgym1"></div>
                </div>

            </div>

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Göcsej Természetvédelmi Alapítvány</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/landing_page/" rel="noreferrer" target="_blank">gocsej alapitvany</a></p>
                    <p className="accordion__content">
                        Description: The site has been a team project in Code Cool frontend course where I created this site with Márta Marosi and Richárd Arany. 
                        The task has been to develop a web page for a nonprofit organization.
                    </p>
                    <p className="accordion__content">
                        Highlights: HTML, CSS, flex box, border styling.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="gocsej"></div>
                </div>

            </div>

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Pizza Dominium</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/table_booking/" rel="noreferrer" target="_blank">pizza-dominium</a></p>
                    <p className="accordion__content">
                        Description: The site has been a team project in Code Cool frontend course where I created this site with Márta Marosi and Richárd Arany. 
                        The task has been to develop a web page for a pizzeria including a form for table booking.
                    </p>
                    <p className="accordion__content">Highlights: HTML, CSS, flex box, border styling, booking form.</p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="pizza-dominium"></div>
                </div>

            </div>    
   
    

        </div>

        

    )
}

export default LandingPages;