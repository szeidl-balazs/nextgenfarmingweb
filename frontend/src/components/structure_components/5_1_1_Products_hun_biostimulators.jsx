import React from 'react';
import { CImage } from '@coreui/react';
import euro_vive_pure from '../images/euro_vive_pure.png';


const BiostimulatorsHun = () => {


    return (
    
        <div className="panel-wrap">

            <div className="subpanel"> {/*This is one unit to comprise one product*/}

                <div className="panel-text">
                    <h2 className="accordion__content">Euro Vive Pure Liquid</h2> 
                                       
                    <p className="accordion__content">  
                    Az Euro Vive Pure Liquid az Ascophyllum nodosum tengeri alga nagy tisztaságú és tömény kivonata, mely stabilan oldott állapotban tartható.
                    Kiváló hatásfokkal alkalmazható a kultúrnövények különböző fenológiai stádiumaiban.
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
                  <CImage className="d-block w-50" src={euro_vive_pure} alt="Euro Vive Pure"/>
                </div>

            </div>



        </div>

        

    )
}

export default BiostimulatorsHun;