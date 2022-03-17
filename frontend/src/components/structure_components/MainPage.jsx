import React from 'react';
import Hero from './Hero'
import Benefits from './Benefits';
import Specifications2 from './Specifications2';
import Presentations from './Presentations';
import BackToTopArrow from './BackToTopArrow';

const MainPage = () => {

    return (
        <main className="main-page">

            <Hero />
            <Benefits />
            <Specifications2 />
            <Presentations />
            <BackToTopArrow />

        </main>

    );
}

export default MainPage;