import React from 'react';
import Hero from './Hero'
import Benefits from './Benefits';
import Specifications from './Specifications';
import Presentations from './Presentations';
import BackToTopArrow from './BackToTopArrow';

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