import React from 'react';
import { CImage } from '@coreui/react';
import pricing from '../images/pricing_table.png';
import gamecharacter from '../images/game_character.png';

const UicomponentsHun = () => {

    return (

        <div className="panel-wrap">
            
            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Játékos választó</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/game_character/" rel="noreferrer" target="_blank">game-character</a></p>
                    <p className="accordion__content">  
                        Részletek: az oldal elkészítése a Code Cool tanfolyamon volt feladat, melynek célja
                        egy játékos vagy PC játék szereplő kiválasztásának leprogramozása volt Vanilla JavaScriptben.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: Vanilla JavaScript, CSS, JavaScript űrlap, user interface, számítógépes játékban szereplő kiválasztó felület.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={gamecharacter} alt="gamecharacter"/>
                </div>

            </div>


            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Ár táblázat</p>
                    <p className="accordion__content">URL: <a href="https://bszeidl.github.io/pricing_table_code_berry_project/" rel="noreferrer" target="_blank">pricing-table</a></p>
                    <p className="accordion__content">  
                        Részletek: a felhasználói felület elkészítése a Code Berry tanfolyamon volt feladat,
                        melyben a CSS Grid technikát kellett alkalmazni az oldal szerkezeti részeinek
                        kialakítására úgy, hogy különböző méretű megjelenítő eszközökön is olvasható legyen és
                        a táblázat részek vertikális és horizontális elhelyezkedése alkalmazkodjon a kijelző méretéhez.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: HTML, CSS, Grid, űrlap HTML külön HTML oldalon, olvasható különböző méretű megjelenítő eszközökön.
                    </p>  

                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-100" src={pricing} alt="pricing"/>
                </div>

            </div>       



        </div>

    );
}

export default UicomponentsHun;