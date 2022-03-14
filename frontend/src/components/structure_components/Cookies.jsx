import React from 'react';


const Cookies = () => {

    return (
        <div className="cookie_section">

            <h1>Cookie (süti) tájékoztató</h1>
            
            <div className="cookie-scope">
                <h2>A Cookie (süti) tájékoztató hatálya</h2>
                <p>Jelen szabályzat Farkas János egyéni vállalkozó (továbbiakban: Üzemeltető) kezelésében álló következő weboldalakra vonatkozik:</p>
                    <ul>
                        <li><a href="index.html" target="_blank">www.farkasgym.hu</a></li>
                    </ul>
            </div>
            
        
            <div className="cookie-definition">
                <h2>Mik azok a cookie-k vagy sütik?</h2>
                <p>Amikor a látogató a tájékoztató hatálya alá tartozó weboldalt meglátogatja, egy kisméretű adatfájlt, úgynevezett cookie (továbbiakban: cookie vagy süti) helyezünk el a számítógépére, mely többféle célt szolgálhat.</p>
                <p>Kizárólag az oldal működéséhez feltétlenül szükséges és munkamenet támogató, az egyes felhasználói munkamenetek azonosítására szolgáló, továbbá weboldalunk kényelmesebb használatát elősegítő sütiket használunk.</p>
                <p>Az általunk alkalmazott sütik egy része csak átmeneti és eltűnik a böngésző bezárásával, míg léteznek oly kényelmi sütik, melyek 1 hónapig tárolódnak számítógépén, hogyha rendszeresen látogatja weboldalunkat, akkor a böngészője megjegyezze a korábban használt beállításait, így nem szükséges minden megtekintéskor újból elfogadnia süti tájékoztatónkat vagy rendszeresen beállítania az igényei szerinti szűrési feltételeket.</p>
            </div>
        
            <div className="cookie-goal">
                <h2>A sütik célja</h2>
                <p>Egyes általunk használt sütik elengedhetetlenek az oldal megfelelő működéséhez (session cookie - munkamenet süti), mások a weboldal kényelmesebb használatának elősegéítésére szolgálnak. A látogató beállításainak, használati szokásainak rögzítésével az oldalon való navigáció és ezáltal a honlap használatának megkönnyítése.</p>
            </div>
        
            <div className="cookie-types">
                <h2>A sütik típusai</h2>
                <ol>
                    <li>
                        <p className="important">Munkamenet sütik:</p>
                        <p>A munkamenet sütik a honlap böngészéséhez, a funkciók használatához szükségesek, többek között lehetővé teszik a látogató által adott oldalon, funkcióban vagy szolgáltatásban végzett műveletek megjegyzését. A "munkamenet sütik" alkalmazása nélkül a honlap zökkenőmentes használata nem garantálható. Érvényességi idejük az adott látogatás időtartamára terjed ki, a "sütik" a munkamenet végén vagy a böngésző bezárásával automatikusan törlődnek.</p>
                    </li>
                    <li>
                        <p className="important">Használatot támogató kényelmi sütik:</p>
                        <p>Ezek a sütik lehetővé teszik, hogy honlapunk megjegyezze, hogy milyen működési módot választott (például: elfogadta a süti tájékoztatót és a kereső eredmény listájában kapott találatok milyen rendezési mód alapján kerüljenek megjelenítésre). Ez annak érdekében történik, hogy a következő látogatás alkalmával ne kelljen újra és újra elfogadnia a süti tájékoztatót vagy beállítania, hogy milyen rendezési elv szerint szeretné megtekinetni az oldalon megjelenített tartalmakat. A preferenciákat tároló sütikben lévő információk nélkül honlapunk kevésbé gördülékenyen ugyan, de működhet.</p>
                        <p>A kényelmi sütikben személyes adatokat nem rögzítünk, kizárólag egy azonosítószámot tárolunk, melyből az oldal értesül, hogy a sütitájékoztató korábban elfogadásra került. A kényelmi sütit a kliens gép böngészője tárolja 1 hónapos lejárati idővel. </p>
                    </li>
                </ol>
            </div>
        
            <div className="cookie-security">
                <h2>Biztonság</h2>
                <p className="important">Lényeges, hogy az oldal Üzemeltetője a sütik engedélyezése esetén sem jegyez meg semmilyen azonosítót vagy jelszót.</p>
                <p>A látogató a sütik elfogadása esetén is teljes biztonságban használhatja az oldal Üzemeltetőjének elektronikus szolgáltatásait.</p>
            </div>
        
            <div className="cookie-setting">
                <h2>A böngésző sütibeállításainak ellenőrzése, a sütik letiltása</h2>
                <p>A modern böngészők engedélyezik a süti beállítások módosítását. A böngészők egy része alapértelmezettként automatikusan elfogadja a sütiket, de ez a beállítás is megváltoztatható annak érdekében, hogy a jövőre nézve a felhasználó megakadályozza az automatikus elfogadást. Átállítás esetén a böngésző a továbbiakban minden alkalommal felajánlja a sütik beállításának választási lehetőségét.</p>
                <p className="alert">Felhívjuk látogatóink figyelmét, hogy mivel a sütik célja a weboldal használhatóságának és folyamatainak támogatása, valamint megkönnyítése, a sütik letiltása esetén nem tudjuk garantálni, hogy a látogató képes lesz a weboldal valamennyi funkciójának teljes körű használatára. A weboldal ez esetben a tervezettől eltérően működhet a böngészőben.</p>
                <ol>
                    <li className="important">További részletes információk az alábbi böngészők süti beállításairól</li>
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=hu" target="_blank" rel="noreferrer">Chrome</a></li>
                            <li><a href="https://support.mozilla.org/hu/kb/sutik-informacio-amelyet-weboldalak-tarolnak-szami?redirectlocale=hu&redirectslug=S%C3%BCtik+kezel%C3%A9se" target="_blank" rel="noreferrer">Firefox</a></li>
                            <li><a href="https://support.microsoft.com/hu-hu/windows/cookie-k-t%C3%B6rl%C3%A9se-%C3%A9s-kezel%C3%A9se-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noreferrer">Internet Explorer</a></li>
                            <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
                            <li><a href="https://addons.opera.com/hu/extensions/details/disable-cookies/" target="_blank" rel="noreferrer">Opera</a></li>
                            <li><a href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
                        </ul>
                    <li className="important">Tudnivalók reklámblokkoló (ad-blocker) használata esetén</li>
                    <p>Felhívjuk látogatóink figyelmét, hogy reklámblokkoló (ad-blocker) használata esetén a cookie nyilatkozatról szóló tájékoztatás nem minden esetben jelenik meg. Amennyiben szeretné megtekinteni, deaktiválja a reklámblokkoló alkalmazást!</p>
                </ol>
                <p className="alert">Felhívjuk látogatóink figyelmét, hogy reklámblokkoló (ad-blocker) használata esetén a cookie nyilatkozatról szóló tájékoztatás nem minden esetben jelenik meg. Amennyiben szeretné megtekinteni, deaktiválja a reklámblokkoló alkalmazást!</p>
            </div>
        </div>

    );
}

export default Cookies;