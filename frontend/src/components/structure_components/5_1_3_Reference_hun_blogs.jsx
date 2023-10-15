import React from 'react';
import { CImage } from '@coreui/react';
import vextadim from '../images/vextadim.webp';

const BlogsHun = () => {


    return (

        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <h2 className="accordion__content">Vextadim 240 EC</h2>
                    <p className="accordion__content">Szelektív gyomírtószer őszi búza árvakelés ellen</p>
                    <p>Felhasználási előnyök</p>
                    <ul>
                        <li>Nagyon erős levélen keresztüli hatás kiváló szelektivitással.</li>
                        <li>Száraz körülmények között is hatékony formuláció.</li>
                        <li>Tömény hatóanyag tartalom (240 g/l), kevesebb göngyöleg.</li>
                    </ul>
                    <p>
                        Hatóanyag összetétel: 240 g/l kletodim, mely a HRAC-A acetil-koenzim-A karboxilázgátló 
                        herbicidcsoportban a hidroxi-ciklohexén-on hatóanyagcsoportba tartozik.
                    </p>
                    <p>Szerforma: emulzióképző koncentrátum (EC)</p>
                    <p>Rendeltetése: gyomírtó szer</p>
                    <p>Forgalombahozatali engedély száma: 6300/427-1/2021</p>
                    <p>Engedélyezett kultúra: őszi káposztarepce</p>
                    <p>Károsító: őszi búza árvakelés</p>
                    <p>Légi kijuttatás: nem engedélyezett.</p>
                    <p>Forgalmazási kategória: II</p>
                    <p>Agrár-környezet gazdálkodási programban felhasználható.</p>
                    <p>Ökológiai gazdálkodásban nem engedélyezett.</p>
                    <p>Méhveszélyesség: nem jelölésköteles.</p>
                    <p>Előírt növényvédelmi technológia: A készítmény egy vegetációs időszakban egy táblán csak egy alkalommal használható. Őszi
                        káposztarepcében őszi búza árvakelés ellen 0,4 liter/ha dózisban kell finom porlasztással
                        alkalmazni. Az őszi búza árvakelés 1-3 leveles állapotban a legérzékenyebb a készítményre. 
                    </p>
                    <p>Hatásmód: VextaDim 240 EC kiváló oldékonyságának köszönhetően gyorsan felszívódik a
                    kezelt növényekben, és gyorsan transzlokálódik a gyökérrendszerükben valamint a föld feletti részeikben. Az érzékeny gyomnövényeken a jellegzetes tünetek - növekedés leállása, levelek sárgulása, végül a növény pusztulása -a permetezést követő 1-2 héten belül jelentkeznek. 
                    </p>
                    <p>Technológiai tanácsok:</p>
                    <ul>
                        <li>Megfelelő dózisban és körülmények között nincs fitotoxikus hatása és nem lassítja a kultúrnövény fejlődését.</li>
                        <li>Kerülni kell minden más készítmény használatát 14 nappal a VextaDim 240 EC használata előtt és után.</li>
                        <li>Nem szabad használni rögtön fagyok után.</li>
                        <li>Amennyiben a kijuttatást követő néhány napon belül fagypont alá süllyed a hőmérséklet, fitotoxikus tünetek jelentkezhetnek a kultúrnövényen.</li>
                        <li>A tél végén is kijuttatható a repce szárbaindulása megkezdéséig (BBCH30), amikor az árvakelés növekedésnek indul.</li>
                    </ul>
                    <p>Hatékonyság:</p>
                    <p>A készítmény adjuváns nélkül is nagyon jó hatásfokú, de tapadásfokozó (VexZone 0,25 l/ha) hozzáadásával érhető el a legkiválóbb eredmény.</p>
                    <p>A VexZone felületaktív anyagokat, alkilész- ter olajat és oldódást elősegítő anyagokat tartalmaz, optimális lefedettséget és kiváló tapa- dást biztosít a leveleken, továbbá fokozza a hatóanyag gyors bejutását a belső növényi szöve- tekbe</p>
                    <p>A VextaDim 240 EC és a VexZone a VextaChem Srl. (Piazza B. Buozzi 9, Sc B, 04100 Latina LT, Italy) bejegyzett védjegye.</p>
                </div>

                <div className="specification-img-wrap">
                  <CImage className="d-block w-50" src={vextadim} alt="vextadim"/>
                </div>
        
            </div>



        </div>



    );
}

export default BlogsHun;