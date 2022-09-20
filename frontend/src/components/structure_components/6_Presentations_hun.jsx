import React from 'react';
import { CContainer } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CRow } from '@coreui/react'

const Presentations = () => {

    return (

        <div className="presentation">
          <div id="recommendation-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
          <h2>SZOLGÁLTATÁSOK</h2>

          <CContainer fluid>

          <CRow xs={{cols: 1}} sm={{cols: 2, gutterX: 5}} xxl={{cols: 4}}>

          <CCol>
            <h3>WEB OLDAL AUDIT</h3>
            <p>A web oldal üzemeltető jelenlegi weboldalának a user interface (UI) és 
            user experience (UX) felmérése, értékelése.
            </p>
            <p>Akcióterv kidolgozása a user interface (UI) és user experience (UX) fejlesztési lehetőségeire.</p>
          </CCol>

          <CCol>
            <h3>WEB OLDAL DESIGN</h3>
            <p>Új web oldal design-al kapcsolatos ügyfél igények feltérképezése.</p>
            <p>Új web odal design alternatívák vázlatának kidolgozása.</p>
          </CCol>

          <CCol>
            <h3>WEB OLDAL PROGRAMOZÁS</h3>
            <p>Az ügyfél weboldallal kapcsolatos struktúrális, tartalmi, funkcionális
             és design elképzeléseinek felmérése.</p>
            <p>Új web oldal programozása.</p>
            <p>Elsősorban érkező oldalak (landing page) programozása az ügyfél egyedi igényei alapján.</p>
          </CCol>

          <CCol>
            <h3>MÁRKA ARCULAT GRAFIKAI TERVEZÉSE</h3>
            <p>Az ügyfél márka arculattal (logók, címkék prezentáció layoutok stb.) kapcsolatos 
            igényeinek felmérése.
            </p>
            <p>A márka arculati elemek design kidolgozása</p>
          </CCol>

          </CRow>
          </CContainer>


        </div>

    );
}

export default Presentations;