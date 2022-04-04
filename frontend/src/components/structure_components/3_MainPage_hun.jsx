import React from 'react';
import Hero from './4_Hero'
import Benefits from './5_0_Benefits_hun';
import Specifications from './5_1_Specifications_hun';
import Presentations from './6_Presentations_hun';
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