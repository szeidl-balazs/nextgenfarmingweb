import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import CookieBar from './CookieBar';


const GridContainer = () => {
    
    return (
        <div className="grid-container">
            <Header />
            <MainPage />
            <Footer />
            <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
            <CookieBar />
            
        </div>
        
    );

}

export default GridContainer;