import {React, useState} from 'react';
import NavigationHun from './2_Navigation_hun';
import NavigationEng from './2_Navigation_eng';
import MainPage from './3_MainPage_hun';
import MainPageEng from './3_MainPage_eng';
import Footer from './7_Footer_hun';
import FooterEng from './7_Footer_eng';
import CookieBar from './9_CookieBar_hun';
import CookieBarEng from './9_CookieBar_eng';
import Language from './14_Language_selector';


const GridContainer = () => {
    
    const [language, setLanguage] = useState("hun");

    
    const languageSelector = (e) => {
        setLanguage(e.target.value);
    }

    

    return (
        <div className="grid-container">
           
           
        <Language data={language} languageChooser={languageSelector}/>


        {

            language === "hun"

            ?
            
            <div className="grid-wrap">

                <NavigationHun />
                <MainPage />
                <Footer />
                <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
                <CookieBar />

            </div>
            
            :

            <div>

                <NavigationEng />
                <MainPageEng />
                <FooterEng />
                <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
                <CookieBarEng />

            </div>

        }
            
        </div>
        
    );

}

export default GridContainer;