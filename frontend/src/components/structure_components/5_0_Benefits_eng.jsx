import React from 'react';
import { CContainer } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CRow } from '@coreui/react'

const BenefitsEng = () => {


    return (        
        
        <div className="benefits">           
            
            <div id="benefit-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
        
            <h2>INTRODUCTION</h2>

            <CContainer fluid className="benefits-list">

             <CRow xs={{cols: 1}} sm={{cols: 2, gutter: 5}} xxl={{cols: 3}}>

              <CCol >
                <p>BALOREA WEB is the frontend web site development service of BALOREA TEAM Ltd.</p>          
                <p>Web developer: Balázs Szeidl</p>
                <p>Background: marketing and sales management in international business environment, web site development. I have experience in developing and leading the implementation of sales and marketing campaigns, I have participated in multinational branding projects.</p>
              </CCol>

              <CCol>
                <p>As web developer I use HTML, CSS, JavaScript with React.</p>
                <p>I can help my clients combining my sales and marketing managment insights with web site and web site design development, furthermore new branding elements such as corporate or product logos, tags etc.</p>
              </CCol>

              <CCol>
                <p>Benefits</p> 
                <ul>
                  <p>Synergy of marketing & sales management experience with the combination of web site development.</p>
                  <p>User friendly, simple, easy to use, ergonomic site handling.</p>
                  <p>Responsive sizing, readable, recognisable, handleable at any screen size.</p>
                  <p>Fast page load, lightning quick switchning between menus and sections.</p>
                </ul>
              </CCol>      

             </CRow>

            </CContainer>

        </div>            

    );
}

export default BenefitsEng;