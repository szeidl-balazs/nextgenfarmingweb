import React from 'react';
import { CImage } from '@coreui/react';
import dimitris from '../images/Dimitris.jpg';

const Benefits = () => {

    return (

        <div className="benefits">
            
            <div id="benefit-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
        
            <h2>BEMUTATKOZÁS</h2>

            <div className="benefits-list">

              <div className="benefit1 benefit-item">
                <p>BALOREA WEB a BALOREA TEAM Kft. weboldal fejlesztési szolgáltatása.</p>          
                <div className="portre-wrap">
                  <p>Web fejlesztő: Szeidl Balázs</p>                
                  <CImage className="d-block portre" src={dimitris} alt="portre"/>
                </div>
                <p>Tapasztalatok: marketing és értékesítési vezetés nemzetközi üzleti környezetben, web frontend fejlesztés. Húsz éves vezetői tapasztalattal rendelkezem marketing és értékesítési kampányok tervezésében és megvalósításában országos és nemzetközi felelősségel egyaránt. Részt vettem kontinentális márka fejlesztés előkészítésében és lebonyolításában tíz országban.</p>
              </div>


              <div className="benefit2 benefit-item">
                <p>Web fejlesztőként HTML, CSS, JavaScript és React környezetben programozok.</p>
                <p>Ügyfeleimnek sokat tudok segíteni abban, hogy a web fejlesztési igényeket kombinálni tudom a marketing és értékesítési vezetői tapasztalataimmal, így az általam programozott weboldalakon ötvöződnek a modern webes megoldások ügyfélközpontúbb kivitelezésben. Az egyedi weboldal programozási igényeken túl tudok tanácsot adni meglévő weboldalak fejlesztésében valamint marketing komponensek - logók, címkék, egyedi feliratok - tervezésében is.</p>
              </div>

              <div className="benefit3 benefit-item">
                <p>Előnyök</p>                 
                <p>Nálam a webfejlesztési szempontok szinergikus kapcsolatban vannak a marketing és értékesítési vezetői célokkal.</p>
                <p>Felhasználóbarát, egyszerűen és gyorsan áttekinthető, könnyen kezelhető, ergonómikusan használható weboldalakat programozok.</p>
                <p>Oldalaim kijelző mérettől függetlenül nagyítgatás nélkül is olvashatóak és könnyen kezelhetőek.</p>
                  <p>Az alkalmazott programozási technológiáknak és a minimálisan szükséges információ megjelenítési törekvéseimnek köszönhetően az oldalak gyorsan töltődnek be és villámgyorsan lehet váltogatni a tartalmakat a menüpontok között.</p>
                <p>Több nyelven is vállalok weboldal készítést. Magyar weboldal angol változatát igény esetén lefordítom.</p>              
              </div>

            </div>

        </div>

    );
}

export default Benefits;