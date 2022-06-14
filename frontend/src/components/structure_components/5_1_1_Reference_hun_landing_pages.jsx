import React from 'react';

const LandingPagesHun = () => {


    return (
    
        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Farkas Gym</p>
                    <p className="accordion__content">URL: <a href="https://farkasgym.hu/" rel="noreferrer" target="_blank">www.farkasgym.hu</a></p>
                    <p className="accordion__content">  
                        Részletek: A céloldal a Farkas Gym innovatív fitneszgép bemutatása érdekében készült elsősorban a gyártási jogok értékesítése céljából magyar és külföldi potenciális gyártók részére. Sajnos a megrendelő nem tudott minőségi fotókat a rendelkezésemre bocsátani a magasabb színvonalú vizuális megjelenítéshez.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: React keretrendszer, Material UI ikonok, Use Spring animáció, magyar - angol tartalom, 
                        rögzített navigációs sáv menü ikonnal és logóval a könnyű azonosíthatóság és oldalrészek közötti navigálás érdekében, minimalista design - részletek (mnüpontok is) megjelenítése csak kattintásra, 
                        villámgyors oldal betöltés, villámgyors váltás oldal részek és az angol - magyar tartalmak között, minden kijelző méretben könnyen olvasható nagyítgatás nélkül.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="farkasgym1"></div>
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

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="gocsej"></div>
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

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="pizza-dominium"></div>
                </div>

            </div>    
   
    

        </div>

        

    )
}

export default LandingPagesHun;