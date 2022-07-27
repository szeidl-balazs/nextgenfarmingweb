import React from 'react';
import { CImage } from '@coreui/react';
import szb from '../images/SZB_202207261.jpg';


const BenefitsEng = () => {


    return (        
        
        <div className="benefits">
          <div id="benefit-id" className="place-holder-under-menuline">
          </div> {/*empty lane to push down the below content under menu line*/}
            
          <h2>INTRODUCTION</h2>

          <div className="benefits-list">

              <div className="benefit1 benefit-item">
                <p>BALOREA WEB is the frontend web site development service of BALOREA TEAM Ltd.</p>          
                <div className="portre-wrap">
                  <p>Web developer: Balázs Szeidl</p>                
                  <CImage className="d-block portre" src={szb} alt="portre"/>
                </div>
                <p>Background: marketing and sales management in international business environment, web site development. I have experience in developing and leading the implementation of sales and marketing campaigns, I have participated in multinational branding projects.</p>
              </div>


              <div className="benefit2 benefit-item">
                <p>As web developer I use HTML, CSS, JavaScript with React.</p>
                <p>I can help my clients combining my sales and marketing managment insights with web site and web site design development, furthermore new branding elements such as corporate or product logos, tags etc.</p>
              </div>

              <div className="benefit3 benefit-item">
                <p>Benefits:</p>                 
                <p>Synergy of marketing & sales management experience with the combination of web site development.</p>
                <p>User friendly, simple, easy to use, ergonomic site handling.</p>
                <p>Responsive sizing, readable, recognisable, handleable at any screen size.</p>
                <p>Fast page load, lightning quick switching between menus and sections.</p>              
              </div>

          </div>
          
        </div>            

    );
}

export default BenefitsEng;