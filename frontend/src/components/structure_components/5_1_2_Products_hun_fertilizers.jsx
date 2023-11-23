import React from 'react';
import { CImage } from '@coreui/react';
import wedding from '../images/weddingzoeandalex.png';

const EventsHun = () => {

    return (
        
        <div className="panel-wrap">

          <div className="subpanel">
            <div className="panel-text">
                <h2 className="accordion__content">Niseko Liquid 11-31-0+6SO3</h2>{/*product name*/}
                <h3 className="accordion__content">Folyékony ásványi műtrágya</h3>
                <p className="accordion__content">{/*product highlight*/}  
                A Niseko Liquid 11-31-0+6SO3 egy koncentrált folyékony lombtrágya, amely a növény számára könnyen hozzáférhető formában tartalmaz nitrogént, 
                foszfort és ként, így nagy mértékben hozzájárul a gyors keléshez és fejlődéshez a korai fenológiai stádiumokban. 
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
                  <li>Hatóanyag tartalom: Nitrogén 11%, foszfor 31%, Kén 6%</li>
                  <li>pH: 5,5-7,5</li>
                  <li>Kristályosodási hőmérséklet - 15C</li>
                  <li>Sűrűsége: 1,39 kg/l</li>
                </ul>

                <h3>Felhasználási ajánlások</h3>    {/*using recommendations*/}
                <ul>
                  <li>Lombrtágyaként: javasolt kijuttatási mennyiség:  1 vagy 2 alkalommal 3 l/ha. A második alkalmazást 8-10 nap múlva kell elvégezni.</li>
                  <li></li>
                  <li></li>
                </ul>        
            </div>

            <div className="specification-img-wrap">
              <CImage className="d-block w-100" src={wedding} alt="wedding"/>
            </div>
          
          </div>

        </div>

    )
}

export default EventsHun;