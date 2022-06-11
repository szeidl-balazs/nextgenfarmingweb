import React from 'react';
import HeroHun from './4_Hero_hun'
import Benefits from './5_0_Benefits_hun';
import AccordionEng from './5_2_Accordion_eng'
import Presentations from './6_Presentations_hun';
import BackToTopArrow from './8_BackToTopArrow';



const MainPage = () => {    

    return (
        <main className="main-page">

            <HeroHun />
            <Benefits />
            <AccordionEng />
            <Presentations />
            <BackToTopArrow />                 

        </main>

    );
}

export default MainPage;