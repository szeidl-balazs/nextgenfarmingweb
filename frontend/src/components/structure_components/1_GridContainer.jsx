import {React, useState} from 'react';
import Header from './2_Header_hun';
import HeaderEng from './2_Header_eng';
import MainPage from './3_MainPage_hun';
import MainPageEng from './3_MainPage_eng';
import Footer from './7_Footer_hun';
import FooterEng from './7_Footer_eng';
import CookieBar from './9_CookieBar_hun';
import CookieBarEng from './9_CookieBar_eng';


const GridContainer = () => {
    
    const [language, setLanguage] = useState("hun");

    
    const languageSelector = (e) => {
        setLanguage(e.target.value);
    }

    

    return (
        <div className="grid-container">
           
            <select className="language-selector" value={language} onChange={languageSelector} >
                <option value="hun" >HUN</option>
                <option value="eng">ENG</option>
            </select>


        {

            language === "hun"

            ?
            
            <div>

                <Header />
                <MainPage />
                <Footer />
                <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
                <CookieBar />

            </div>
            
            :

            <div>

                <HeaderEng />
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