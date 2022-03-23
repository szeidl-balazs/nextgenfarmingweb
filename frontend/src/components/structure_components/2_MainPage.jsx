import React from 'react';
import Hero from './4_Hero'
import Benefits from './3_Benefits';
import Specifications from './5_1_Specifications';
import Presentations from './6_Presentations';
import BackToTopArrow from './8_BackToTopArrow';
import GDPR from './11_GDPR';


const MainPage = ({show}) => {    

    return (
        <main className="main-page">

            <Hero />
            <Benefits />
            <Specifications />
            <Presentations />
            <BackToTopArrow />

            {
                show
                ? 
                <GDPR/>
                :
                null
            }
            

        </main>

    );
}

export default MainPage;