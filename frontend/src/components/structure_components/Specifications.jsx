import React, { useState } from 'react';

const Specifications = () => {

    const [show, setShow] = useState('több');

    const showHandler = () => {
        show === 'több' ? setShow('kevesebb') : setShow('több');
    }

    return (            
        <div className="specifications">
            
            <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
            
            <h2>JELLEMZŐK</h2>

            <button className="accordion benefit-and-specs-list" onClick={showHandler}>Képességfejlesztés saját testtömeggel {show}</button>
            
                

                    {
                        show === 'kevesebb'

                        ?
                        
                        <div className="panel">
                            <div className="panel-wrap">
                                <div className="panel-text">
                                    <p>Az erőfejlesztés a saját testtömeg mozgatásával történik, melynek pontos ismeretében helyes beállítással nincs korosztályi korlátozás.</p>
                                    <p>A pad dőlészöge állítható, így az erőkifejtés mértéke változtatható.</p>
                                    <p>Edzésrendszerbe állítható, azaz a szárazföldi edzés munka és a vízben elvégzett gyakorlatok szinergikusan hatnak egymásra.</p>
                                </div>

                                <div className="specification-img-wrap">
                                    <div id="adjustable-angle-img" className="specification-photo"></div>
                                </div>
                            </div>
                        </div> 
                    :

                    null

                    }


                                            

            <button className="accordion benefit-and-specs-list">Egy időben több tulajdonság fejlesztése</button>
            
            
            <div className="panel">

                <div className="panel-wrap">
                    <div className="panel-text">
                        <p>Az erőfejlesztéssel egyidejűleg a technika, azaz a mozgáskoordináció is fejleszthető, a technikai hibákat szárazföldön ki lehet javítani.</p>
                        <p>Minden úszásnemre érvényes, kialakítható a helyes lábtartás.</p>
                        <p>A végrehajtás technikája folyamatos instrukcióval javítható. Ebben a folyamatban a kommunikáció a sportoló és az edző között hatékonyabb, mintha ugyanez a vízben lévő sportoló és a medence szélén álló edző között történne.</p>
                    </div>

                    <div className="specification-img-wrap">
                        <div id="morefeatures" className="specification-photo" ></div>
                    </div>
                </div>

            </div>

            <button className="accordion benefit-and-specs-list">Speciális erősítő hatás úszók részére</button>
            
                <div className="panel">

                    <div className="panel-wrap">
                        <div className="panel-text">
                            <p>Az egyes gyakorlatok speciális, úszásnemre vonatkozó izomcsoportokat erősítenek.</p>
                            <p>Az eddigi tapasztalatok alapján a terhelési összetevők tervezett változtatása ugyanolyan élettani hatásokat vált ki, mint a medencében történő edzés során tapasztalunk.</p>
                        </div>

                        <div className="specification-img-wrap">
                            <div id="spec-swimmers" className="specification-photo" ></div>
                        </div>
                    </div>

                </div>

            <button className="accordion benefit-and-specs-list">Számítógépes vezérlés és kontrol</button>
            
                <div className="panel">

                    <div className="panel-wrap">
                        <div className="panel-text">
                            <p>Az erősítő gép számítógépes vezérléssel és kézi vezérléssel egyaránt működtethető.</p>
                            <p>A beépített számítógéppel vezérelhető a pad dőlésszögének állítása, mely a terhelés mértékét szabályozza. A beállítástól függően a számítógép automatikusan emeli, vagy süllyeszti a padot.</p>
                            <p>A számítógépes vezérléssel a gyakorlat ismétlésszáma, időtartama és a pihenő idő is beállítható.</p>  
                            <p>A beállított programnak megfelelően a pihenő idő alatt változik a dőlésszög</p>
                            <p>A gépen szenzorok érzékelik, hogy a sportoló a feladatnak megfelelően teljesít-e. A kijelző csak azt a végrehajtást számolja, amelyiknél a megtett út a beállított értéknek megfelelt, vagyis az erő kifejtés az edző által meghatározott módon lett teljesítve.</p>
                            <p>A sportoló mellkasára rögzített szívfrekvencia mérő egység adatai megjelennek a gép kijelzőjén a leadott teljesítmény Wattban kifejezett értékeivel együtt.</p>
                            <p>A képernyőről leolvasható adatok a terhelés mértékéről azonnali információt adnak.</p>
                            <p>A kijelzőről leolvasható:</p>
                                <ul className="nested-list">
                                    <li>a gyakorlat vagy pihenés során eltelt idő,</li>
                                    <li>ismétlésszám,</li>
                                    <li>a sportoló által elvégzett teljesítmény Watt-ban,</li>
                                    <li>szívfrekvencia (pulzus szám) - mellkas mérő használata esetén.</li>
                                </ul>                                
                        </div>

                        <div className="specification-img-wrap">
                            <div id="pc-control" className="specification-photo"></div>
                        </div>
                    </div>

                </div>

            <button className="accordion benefit-and-specs-list">Állítható lábtámasz</button>
                
                <div className="panel">

                    <div className="panel-wrap">
                        <div className="panel-text">
                            <p>Az alsó támasz állítása lehetőséget biztosít a lábak aktív szakaszának út és időtartam növelésére, mindez manuálisan beállítható.</p>
                            <p>Az alsó támasz a gyakorlat sorozatai után állitható.</p>
                            <p>Fejlesztés alatt van a motorral fokozatmentesen állítható lábtámasz, melynek köszönhetően a gyakorlat szettjei között gyorsan lehet változtatni a lábtámasz szögét.</p>
                        </div>

                        <div className="specification-img-wrap">
                            <div id="leg-support-img" className="specification-photo"></div>
                        </div>
                    </div>
                    
                </div>

                <button className="accordion benefit-and-specs-list">Sok sportágban alkalmazható</button>
                
                <div className="panel">

                    <div className="panel-wrap">
                        <div className="panel-text">
                            <p>A Farkas Gym edző pad úszók részére lett kifejlesztve, de más sportágakban is hatékonyan alkalmazható:</p>
                            <ul className="nested-list">
                                <li>Tenisz: láberő fejlesztés, robbanékonyság fokozás.</li>
                                <li>Labdarúgás: felugrás fejelésekhez és a megindulásokhoz az elrugaszkodás fejlesztése.</li>
                                <li>Kézilabda: felugrás átlövésekhet és a megindulásokhoz az elrugaszkodás fejlesztése.</li>
                                <li>Kosárlabda: felugrás dobásokhoz és a megindulásokhoz az elrugaszkodás fejlesztése.</li>
                                <li>Atlétika: elrugaszkodások fejlesztése ugrásokhoz, futószámokban a rajtok fejlesztése.</li>
                                <li>Vízilabda: kitaposás fejlesztése.</li>
                                <li>Síugrás: elrugaszkodás fejlesztése.</li>
                                <li>Evezés: kar, váll, hátizomzat fejlesztése.</li>
                                <li>stb.</li>
                            </ul>
                            <p>A dinamikus láb erősítő gyakorlatoknál óriási az előnye a talajról végzett felugrásokhoz képest, mert kíméli a térd és bokaízületet, ugyanis nincs becsapódás a talajra érkezésnél, így csökken a porcok és az ínszalagok sérülésének valószínűsége.</p>
                            <p>Fitnessz termekben kar-, mell-, váll-, hát- és lábizomzat erősítéshez, dinamikus kardio jellegű intervallum edzésekhez is kiválóan használható.</p>
                        </div>

                        <div className="specification-img-wrap">
                            <div id="multisport" className="specification-photo" ></div>
                        </div>
                    </div>
                    
                </div>

        </div>
    );
}

export default Specifications;