import React from 'react';

const Benefits = () => {

    return (
        <div className="benefits">
        <div id="benefit-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
        <h2>ELŐNYÖK</h2>
        <ul className="benefits-list">
            <li>Motorikus képességfejlesztés
                <ul className="nested-list">
                    <li>Oktatásnál a helyes technika kialakítása</li>
                    <li>Versenyzőknél a technika és a kondicionális tulajdonságok továbbfejlesztése</li>
                </ul>
            </li>
                <li>Kontrollált terhelés</li>
            <li>Rehabilitációhoz is használható</li>
            <li>Sok sportágban alkalmazható</li>
        </ul>
    </div>            

    );
}

export default Benefits;