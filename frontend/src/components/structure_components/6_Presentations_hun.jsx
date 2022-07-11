import React from 'react';

const Presentations = () => {

    return (

        <div className="presentation">
          <div id="recommendation-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
          <h2>SZOLGÁLTATÁSOK</h2>

          <h3>WEB SITE AUDIT</h3>
          <p>A weboldal üzemeltető jelenlegi weboldalának a user interface (UI) és 
            user experience (UX) felmérése, értékelése.
          </p>
          <p>Akcióterv kidolgozása a user interface (UI) és user experience (UX) fejlesztési lehetőségeire.</p>
          <h3>WEB SITE DESIGN</h3>
          <p>Surveying client's need regarding new web site.</p>
          <p>Developing new web site designs and drafting proposals.</p>
          <h3>WEB SITE PROGRAMMING</h3>
          <p>Surveying client's need regarding new web site.</p>
          <p>Programming new web sites.</p>
          <p>Focus service is the customised programming of landing pages according to clients' individual needs.</p>
          <h3>BRANDING ELEMENT DESIGN</h3>
          <p>Surveying client's need regarding branding elements' need such as logos, tags etc.</p>
          <p>Developing the design of branding elements.</p>

        </div>

    );
}

export default Presentations;