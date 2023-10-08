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
                <p>Tisztelt Partnerünk!</p>
                <p>Megtisztelő, hogy meglátogatta weboldalunkat és érdeklődik termékeink iránt.</p>
                <p>A NEXT GEN FARMING Kft-ét azzal a céllal alapítottam Magyarországon, hogy a legfontosabb szántóföldi és kertészeti növénykultúrákban 
                  modern technológiai megoldásokhoz biztosítsak input anyagokat, melyekkel Ön hatékonyan kezelheti az időjárás és a talajtulajdonságok 
                  által okozott növénytermesztési kihívásokat.
                </p>
                <p>Termékkínálatunk kialakításakor összpontosítunk a legfontosabb és leghatékonyabb alap termékekre, melyek használata nélkülözhetetlen
                   a biztonságos növénytermesztéshez, továbbá folyamatosan keressük a legújabb fejlesztéseket, melyekkel Ön magasabb színvonalon és kiszámíthatóbban tud gazdálkodni.
                </p>    
                <p>Forgalmazóink kiválasztásakor törekedünk arra, hogy a legrövidebb logisztikai láncon gyorsan juttasuk el Önhöz a megrendelt árut, hogy időben az Ön rendelkezésére álljon, 
                  illetve az Önt kiszolgáló forgalmazó a kedvező árak mellett kiszolgálásban is pontosan tudja teljesíteni az Ön elvárásait.
                </p>      
              </div>


              <div className="benefit2 benefit-item">
              <p>Vállalkozásához sok sikert kívánok bízva a sikeres együttműködésben!</p>
              <div className="portre-wrap">                                 
                  <CImage className="d-block portre" src={dimitris} alt="portre"/>
                  <p>Dr. Dimitrios Drisis</p>
              </div>
           
              </div>

            </div>

        </div>

    );
}

export default Benefits;