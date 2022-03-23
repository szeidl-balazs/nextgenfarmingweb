import React from 'react';
import Hero from './4_Hero'
import Benefits from './3_Benefits';
import Specifications2 from './5_1_Specifications';
import Presentations from './6_Presentations';
import BackToTopArrow from './8_BackToTopArrow';
import GDPR from './11_GDPR';

const MainPage = () => {

    return (
        <main className="main-page">

            <Hero />
            <Benefits />
            <Specifications2 />
            <Presentations />
            <BackToTopArrow />
            <GDPR/>

        </main>

    );
}

export default MainPage;