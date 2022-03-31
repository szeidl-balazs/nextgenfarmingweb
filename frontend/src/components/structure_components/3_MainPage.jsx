import React from 'react';
import Hero from './4_Hero'
import Benefits from './5_0_Benefits';
import Specifications from './5_1_Specifications';
import Presentations from './6_Presentations';
import BackToTopArrow from './8_BackToTopArrow';



const MainPage = () => {    

    return (
        <main className="main-page">

            <Hero />
            <Benefits />
            <Specifications />
            <Presentations />
            <BackToTopArrow />                 

        </main>

    );
}

export default MainPage;