import React from 'react';
import Header from './3_Header';
import MainPage from './2_MainPage';
import Footer from './7_Footer';
import CookieBar from './9_CookieBar';


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