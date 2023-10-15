import React from 'react';
import { CContainer } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CRow } from '@coreui/react'

const DealersEng = () => {

    return (

        <div className="presentation">
            <div id="recommendation-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
            
            <h2>SERVICES</h2>

            <CContainer fluid>

            <CRow xs={{cols: 1}} sm={{cols: 2, gutterX: 5}} xxl={{cols: 4}}>

            <CCol>
            <h3>WEB SITE AUDIT</h3>
            <p>Auditing current web site focusing on user interface (UI) and user experience (UX).</p>
            <p>Developing action plan to improve the user interface and user experience of current web site.</p>
            </CCol>

            <CCol>
            <h3>WEB SITE DESIGN</h3>
            <p>Surveying client's need regarding new web site.</p>
            <p>Developing new web site designs and drafting proposals.</p>
            </CCol>

            <CCol>
            <h3>WEB SITE PROGRAMMING</h3>
            <p>Surveying client's need regarding new web site.</p>
            <p>Programming new web sites.</p>
            <p>Focus service is the customised programming of landing pages according to clients' individual needs.</p>
            </CCol>

            <CCol>
            <h3>BRANDING ELEMENT DESIGN</h3>
            <p>Surveying client's need regarding branding elements' need such as logos, tags etc.</p>
            <p>Developing the design of branding elements.</p>
            </CCol>

            </CRow>
            </CContainer>
        </div>

    );
}

export default DealersEng;