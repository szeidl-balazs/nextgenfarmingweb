import React from 'react';
import Hero from './4_Hero'
import BenefitsEng from './5_0_Benefits_eng';
import SpecificationsEng from './5_1_Specifications_eng';
import Presentations from './6_Presentations';
import BackToTopArrow from './8_BackToTopArrow';



const MainPageEng = () => {    

    return (
        <main className="main-page">

            <Hero />
            <BenefitsEng />
            <SpecificationsEng />
            <Presentations />
            <BackToTopArrow />                 

        </main>

    );
}

export default MainPageEng;