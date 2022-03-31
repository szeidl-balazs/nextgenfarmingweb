import {React, useState} from 'react';
import Header from './2_1_Header_hun';
import HeaderEng from './2_2_Header_eng';
import MainPage from './3_MainPage';
import Footer from './7_Footer';
import CookieBar from './9_CookieBar';


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

            <HeaderEng />

        }
            
        </div>
        
    );

}

export default GridContainer;