import React from 'react';
import { CImage } from '@coreui/react';
import euro_vive_pure from '../images/euro_vive_pure.png';
import gocsej from '../images/gocsej.png';
import pizza from '../images/pizza.png';

const LandingPagesHun = () => {


    return (
    
        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Euro Vive Pure Liquid</p> 
                                       
                    <p className="accordion__content">  
                    Az Euro Vive Pure Liquid az Ascophyllum nodosum tengeri alga nagy tisztaságú és tömény kivonata, mely stabilan oldott állapotban tartható.
                    Kivákó hatásfokkal alkalmazható a kultúrnövények különböző fenológiai stádiumaiban.
                    A kanadai eredetű Ascophyllum nodosum alkalmazkodott az apály-dagály változásokhoz és a sós körülményekhez 
                    és az így kialakult stressztűrő képességét át tudja adni a termesztett növényeknek.
                    </p>

                    <p className="accordion__content">
                        Az Ascophyllum nodosum alkalmazásának előnyei:
                        <ul>
                            <li>
                                Elősegíti a termesztett növény maximális terméspotenciáljának elérését.                          
                            </li>
                            <li>
                                Fokozza a termesztett növény abiotikus stressztűrő képességét.
                            </li>
                            <li>
                                Gyorsítja a termesztett növény gyökérzetének fejlődését és növeli a gyökértömegét.
                            </li>
                            <li>
                                Javítja a termesztett növény vigorát és egészségi állapotát.
                            </li>
                        </ul>
                        
                        Felhasználási ajánlások:
                        <ul>
                            <li>
                            A készítmény kijuttatható permetezésekkel egy menetben, a leveleken keresztül szívódik fel.
                            </li>
                            <li>
                                Kukoricában: 
                                <li>
                                    Első kijuttatás: BBCH16 (4-6 leveles állapot) 1-1,5 liter/ha dózisban.
                                </li>
                                <li>
                                    Második kijuttatás: BBCH19 (8-10 leveles állapot) 1-1,5 liter/ha dózisban.
                                </li>
                            </li>
                            <li>
                                Őszi búzában és őszi árpában: 
                                <li>
                                    Első kijuttatás: BBCH21 (bokrosodás kezdete) 1-1,5 liter/ha dózisban.
                                </li>
                                <li>
                                    Második kijuttatás: BBCH45-47 (zászlós levél kifejlődése) 1-1,5 liter/ha dózisban.
                                </li>
                            </li>
                            <li>
                                Napraforgóban:
                                <li>
                                    Első kijuttatás: BBCH14-16 (2-4 leveles állapot) 1-1,5 liter/ha dózisban.
                                </li>
                                <li>
                                    Második kijuttatás: BBCH51-53 (virágzás előtt) 1-1,5 liter/ha dózisban.
                                </li>
                            </li>
                            <li>
                                Őszi káposztarepcében:
                                <li>
                                    Első kijuttatás: BBCH15-19 (rozettás állapotban ősszel) 1-1,5 liter/ha dózisban.
                                </li>
                                <li>
                                    Második kijuttatás: BBCH31-35 (rozettás állapotban tavasszal) 1-1,5 liter/ha dózisban.
                                </li>
                                <li>
                                    Harmadik kijuttatás: BBCH50-53 (virágzás előtt) 1-1,5 liter/ha dózisban.
                                </li>
                            </li>
                        </ul>           
                       
                    </p>           
                </div>

                <div className="product-image-wrap">
                  <CImage className="d-block w-30" src={euro_vive_pure} alt="Euro Vive Pure"/>
                </div>

            </div>

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Göcsej Természetvédelmi Alapítvány</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/landing_page/" rel="noreferrer" target="_blank">gocsej alapitvany</a></p>
                    <p className="accordion__content">
                        Részletek: Az oldal heti csapat projekt feladat volt a Code Cool frontend tanfolyamon, melyet Marosi Mártával és Arany Richárddal együtt készítettünk el. 
                        A feladat célja egy bemutatkozó céloldal készítése volt egy nonprofit szervezet (fiktív) számára HTML és CSS használatával. A designt és a wire-frame-et közösen készítettük el, az oldal szekciók programozását elosztottuk egymás között és önállóan kódoltuk őket.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: HTML, CSS, flex box.
                    </p>            
                </div>

                <div className="product-image-wrap">
                  <CImage className="d-block w-100" src={gocsej} alt="Göcsej"/>
                </div>

            </div>

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Pizza Dominium</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/table_booking/" rel="noreferrer" target="_blank" className="url--style">pizza-dominium</a></p>
                    <p className="accordion__content">
                        Részletek: Az oldal heti csapa projekt feladat volt a Code Cool frontend tanfolyamon, melyet Marosi Mártával és Arany Richárddal együtt készítettünk el. 
                        A feladat célja egy termék kínálatot bemutató céloldal készítése volt egy pizzéria (fiktív) részére email-es asztalfoglaló űrlappal. A designt és a wire-frame-et közösen készítettük el, az oldal szekciók programozását elosztottuk egymás között és önállóan kódoltuk őket.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: HTML, CSS, flex box, űrlap.
                    </p>            
                </div>

                <div className="product-image-wrap">
                  <CImage className="d-block w-100" src={pizza} alt="pizza"/>
                </div>

            </div>    
   
    

        </div>

        

    )
}

export default LandingPagesHun;