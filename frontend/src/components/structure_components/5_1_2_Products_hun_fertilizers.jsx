import React from 'react';
import { CImage } from '@coreui/react';
import eurosolids_logo from '../images/Logo_Eurosolids.png';

const EventsHun = () => {

    return (
        
        <div className="panel-wrap">

          <div className="subpanel">
            <div className="panel-text">
                <h2 className="accordion__content">Eurosolids Niseko Liquid 11-31-0+6SO3</h2>{/*product name*/}
                <h3 className="accordion__content">Folyékony ásványi műtrágya</h3>
                <p className="accordion__content">{/*product highlight*/}  
                A Niseko Liquid 11-31-0+6SO3 egy koncentrált folyékony lombtrágya, amely a növény számára könnyen hozzáférhető formában tartalmaz nitrogént, 
                foszfort és ként, így nagy mértékben hozzájárul a gyors keléshez és a kezdeti fejlődéshez a korai fenológiai stádiumokban, 
                melynek köszönhetően nagyobb gyökértömeg és nagyobb számú illetve méretű termésképlet alakul ki.
                A műtrágyában található foszfátok polifoszfátok (ortofoszfát láncvegyületek) formájában vannak jelen, 
                amelyek a növény számára könnyen felvehetők szemben a hagyományos szemcsés műtrágyákban használt MAP-al és DAP-al. 
                A nitrogént ammónium és karbamid formájában is tartalmazza a készítmény, így gyors és tartós nitrogén forrást is biztosít.
                </p>

                <h3 className="accordion__content">Felhasználási előnyök</h3>{/*product benefit*/}
                <ul>
                  <li>Gyors és egyenletes kelés.</li>
                  <li>A növények kiegyensúlyozott és egyenletes kezdeti fejlődése.</li>
                  <li>A foszfor ellátás szempontjából 30-40%-kal hatékonyabb, mint a hagyományos szemcsés műtrágyák.</li>
                  <li>Gyors és tartós nitrogén forrás.</li>
                  <li>Nem mérgező a talaj mikroorganizmusai számára.</li>
                  <li>Nagy töménységű oldat, kevesebb szállítási és tárolási költség továbbá kevesebb göngyöleg.</li>
                </ul>

                <h3 className="accordion__content">Tulajdonságok</h3>{/*product features*/}
                <ul>
                  <li>Átlátszó, stabil oldat magas foszfor koncentrációval.</li>                  
                  <li>Hatóanyag tartalom: Nitrogén 11%, foszfor 31%, Kén 6%</li>
                  <li>pH: 5,5-7,5</li>
                  <li>Kristályosodási hőmérséklet - 15C</li>
                  <li>Sűrűsége: 1,39 kg/l</li>
                  <li>Alacsony a nehézfém, klór és nátrium tartalma.</li>
                  <li>Gyártása az ISO 9001:2015 minőségbiztosítási szabványnak megfelelően történik Európában.</li>
                  <li>Más folyékony műtrágyákkal együtt kijuttatható, kivéve a kalcium tartalmúakkal, 
                    melyeket külön időpontban kell alkalmazni.</li>
                  <li>A műtrágya oldat kémhatásának pH 4 értéknél nagyobbnak kell lenni.</li>
                </ul>

                <h3>Felhasználási ajánlások</h3>    {/*using recommendations*/}
                <ul>

                  <li>Lombtrágyaként:

                    <li>Kijuttatás időzítése: 
                      <li>őszi káposztarepce, kukorica: első alkalom kelés után minél előbb, 
                        második alkalommal az első alkalmazást követően 8-10 nap múlva;
                      </li>
                      <li>kalászosok: bokrosodás alatt 1-2 alkalommal, a második kezelés az első után 8-10 nappal; </li>
                      <li>napraforgó: 3-6 leveles állapotban 1-2 alkalommal, a második kezelés az első után 8-10 nappal;</li>
                      <li>szója: 3-5 leveles állapotban 1-2 alkalommal, a második kezelés az első után 8-10 nappal;</li>
                      <li>gyümölcsösök, szőlő: termés kötődéstől gyümölcs érésig 7-10 naponta;</li>
                      <li>zöldségek: a vegetatív fejlődés alatt, legkésőbb a termés érés előtt négy héttel;</li>
                    </li>

                    <li>Javasolt kijuttatási mennyiség:                      
                      <li>őszi káposztarepce, kalászosok, kukorica, napraforgó 3-5 l/ha 0,4-0,8 %(v/v) töménységű oldatban;</li>
                      <li>szója: 2-4 l/ha %(v/v) töménységű oldatban;</li>
                      <li>gyümölcsösök, szőlő: 3-8 l/ha 0,4-1,2 %(v/v) töménységű oldatban;</li>
                      <li>zöldségek: 3-5 l/ha 0,4-1,0 %(v/v) töménységű oldatban.</li>
                    </li>

                  </li>

                  <li>talajtrágyaként:

                    <li>kijuttatás időzítése
                      <li>szántóföldi növények: vegetatív szakaszban;</li>
                      <li>szőlő: a levélrügyek megjelenése és a virágzás kezdete között;</li>
                      <li>csonthéjas gyümölcsösök: négy héttel a gyümölcsérés előtt;</li>
                      <li>zöldségek: négy héttel a gyümölcsérés előtt.</li>
                    </li>

                    <li>Javasolt kijuttatási mennyiség: 15-30 l/ha</li>

                  </li>
                </ul>        
            </div>

            <div className="specification-img-wrap">
              <CImage className="d-block w-100" src={eurosolids_logo} alt="eurosolids_logo"/>
            </div>
          
          </div>

        </div>

    )
}

export default EventsHun;