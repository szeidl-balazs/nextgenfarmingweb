import React from 'react';

const BenefitsEng = () => {

    return (        
        
        <div className="benefits">
            
            <div id="benefit-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
        
            <h2>INTRODUCTION</h2>

            <ul className="benefits-list">
                <li>BALOREA WEB is the web site development service of BALOREA TEAM Ltd. 
                    <ul className="nested-list">
                        <li>Web developer: Balázs Szeidl</li>
                        <li>Background: marketing and sales management, web site development</li>
                    </ul>
                </li>
                <li>Benefits 
                    <ul>
                      <li>Synergy of marketing & sales management experience with the combination of web site development.</li>
                      <li>User friendly, simple, easy to use, ergonomic site handling.</li>
                      <li>Fast page load, lightning quick switchning between menus and sections.</li>
                    </ul>
                </li>               
            </ul>

        </div>            

    );
}

export default BenefitsEng;