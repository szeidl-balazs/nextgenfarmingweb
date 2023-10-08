import React from 'react';
import HeroHun from './4_Hero_hun'
import Benefits from './5_0_Introduction_hun';
import AccordionHun from './5_2_Accordion_hun'
import Presentations from './6_Presentations_hun';




const MainPage = () => {    

    return (
        <main className="main-page">

            <HeroHun />
            <Benefits />
            <AccordionHun />
            <Presentations />
                           

        </main>

    );
}

export default MainPage;