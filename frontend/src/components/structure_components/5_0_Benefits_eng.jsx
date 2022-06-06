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
                        <li>Background: marketing and sales management, web site development:
                            <ul>
                                <li>I worked as country and international marketing manager of various multinational companies in agricultural business.</li>
                                <li>I have been responsible for business (annual budget and long range planning) and marketing campaign planning in ten countries.</li>
                                <li>I have been participated in international brand development campaign and I have been responsible for the implementation of new branding guidelines in ten countries.</li>
                                <li>As national sales manager I have been responsible for: 
                                    <ul>
                                        <li>key performance indicator (KPI) planning and monitoring,</li>
                                        <li>customer relationship management (CRM) system,</li>
                                        <li>sales representative coaching and mentoring.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>As web developer I use HTML, CSS, JavaScript with React.</li>
                        <li>I can help my clients combining my sales and marketing managment insights with web site and web site design development, furthermore new branding elements such as corporate or product logos, tags etc.</li>
                        
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