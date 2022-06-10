import React from 'react';
import Accordion from './5_2_Accordion';

const SpecificationsEng = () => {

    return (

      <div className="specifications">

        <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
        <h2>REFERENCE PROJECTS</h2>          

            <Accordion
              accordiontitle="Landing pages promoting organizations, products & services"
            
           
              projecttitle1="Farkas Gym"
              urlname1="www.farkasgym.hu"
              urladdress1="https://farkasgym.hu/"
              description1="Farkas Gym has been dedicated for introduction and promotion of an innovative fitness machine."
              highlights1="React technology, Material UI icons, Use Spring animation, bilingual, 
              fix header section with menu icon - main title - logo, minimalist design - details only on click, 
              lightening fast page load - section and language toggling, fully responsive in each device size readable."
              img_id1="farkasgym1"
             
            
              projecttitle2="Göcsej Természetvédelmi Alapítvány"
              urlname2="gocsej-alapitvany"
              urladdress2="https://szeidl-balazs.github.io/landing_page/"
              description2="The site has been a team project in Code Cool frontend course where I created this site with Márta Marosi and Richárd Arany. 
              The task has been to develop a web page for a nonprofit organization."
              highlights2="HTML, CSS, flex box, border styling."
              img_id2="gocsej"
            />
          

            <Accordion
              title="Landing pages promoting events"
            />

            <Accordion
              title="Blog pages"
            />

            <Accordion
              title="Branding elements, logos, tags"
            />


      </div>
        
      );

}

export default SpecificationsEng;