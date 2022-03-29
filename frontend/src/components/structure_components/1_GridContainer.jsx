import {React, useState} from 'react';
import Header from './3_Header';
import MainPage from './2_MainPage';
import Footer from './7_Footer';
import CookieBar from './9_CookieBar';


const GridContainer = () => {
    
    const [hungarian, setHungarian] = useState(true);

    const [english, setEnglish] = useState(false);

    const hunSelector = (e) => {
        setHungarian(true) && setEnglish(false);
    }

    const engSelector = (e) => {
        setEnglish(true) && setHungarian(false)
    }

    return (
        <div className="grid-container">
           
            <select className="language-selector">
                <option selected="selected" value="hun" onClick={hunSelector}>HUN</option>
                <option value="eng" onClick={engSelector}>ENG</option>
            </select>


        {

            hungarian === true

            ?
            
            <div>

                <Header />
                <MainPage />
                <Footer />
                <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
                <CookieBar />

            </div>
            
            :

            null

        }
            
        </div>
        
    );

}

export default GridContainer;