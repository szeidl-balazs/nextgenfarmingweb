import Accordion from './5_2_Accordion';

const SpecificationsEng = () => {

    return (

      <div className="specifications">

        <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
        <h2>SPECIFICATIONS</h2>          

            <Accordion
              title="Skill development with own weight"
              text1="The strength development occurs with the move of own body weight of which accurate knowing there is no age group limitation during work out."
              text2="The angular offset of the bench is adjustable, therefore the level of power alterable."
              text3="The work outs with the bench can be integrated into training system, that is, the bench training and the sport specific work outs have synergic effect to each other e.g. breast srtoke kicking on the bench and breast stroke kicking in the water."
              img_id="adjustable-angle-img"
            />

            <Accordion
              title="Simultaneous development of different skills"
              text1="Az erőfejlesztéssel egyidejűleg a technika, azaz a mozgáskoordináció is fejleszthető, a technikai hibákat szárazföldön ki lehet javítani."
              text2="Minden úszásnemre érvényes, kialakítható a helyes lábtartás."
              text3="A végrehajtás technikája folyamatos instrukcióval javítható. Ebben a folyamatban a kommunikáció a sportoló és az edző között hatékonyabb, mintha ugyanez a vízben lévő sportoló és a medence szélén álló edző között történne."     
              img_id="morefeatures"
            />

            <Accordion
              title="Sport specific strength development effect"
              text1="Az egyes gyakorlatok speciális, úszásnemre vonatkozó izomcsoportokat erősítenek."
              text2="Az eddigi tapasztalatok alapján a terhelési összetevők tervezett változtatása ugyanolyan élettani hatásokat vált ki, mint a medencében történő edzés során tapasztalunk."
              img_id="spec-swimmers"           
            />

            <Accordion
              title="PC control and monitoring"
              text1="Az erősítő gép számítógépes vezérléssel és kézi vezérléssel egyaránt működtethető."
              text2="A beépített számítógéppel vezérelhető a pad dőlésszögének állítása, mely a terhelés mértékét szabályozza. A beállítástól függően a számítógép automatikusan emeli, vagy süllyeszti a padot."
              text3="A számítógépes vezérléssel a gyakorlat ismétlésszáma, időtartama és a pihenő idő is beállítható."
              text4="A beállított programnak megfelelően a pihenő idő alatt változik a dőlésszög."
              text5="A gépen szenzorok érzékelik, hogy a sportoló a feladatnak megfelelően teljesít-e. A kijelző csak azt a végrehajtást számolja, amelyiknél a megtett út a beállított értéknek megfelelt, vagyis az erő kifejtés az edző által meghatározott módon lett teljesítve."
              text6="A sportoló mellkasára rögzített szívfrekvencia mérő egység adatai megjelennek a gép kijelzőjén a leadott teljesítmény Wattban kifejezett értékeivel együtt."
              text7="A képernyőről leolvasható adatok a terhelés mértékéről azonnali információt adnak."
              text8="A kijelzőről leolvasható: a gyakorlat vagy pihenés során eltelt idő, az ismétlésszám, a sportoló által elvégzett teljesítmény Watt-ban, a szívfrekvencia (pulzus szám) - mellkas mérő használata esetén."  
              img_id="pc-control"
            />

            <Accordion 
              title="Adjustable foot support"
              text1="Az alsó támasz állítása lehetőséget biztosít a lábak aktív szakaszának út és időtartam növelésére, mindez manuálisan beállítható."
              text2="Az alsó támasz a gyakorlat sorozatai után állitható."
              text3="Fejlesztés alatt van a motorral fokozatmentesen állítható lábtámasz, melynek köszönhetően a gyakorlat szettjei között gyorsan lehet változtatni a lábtámasz szögét."
              img_id="leg-support-img"            
            />

            <Accordion 
              title="Applicable in many sports"
              text1="A Farkas Gym edző pad úszók részére lett kifejlesztve, de más sportágakban is hatékonyan alkalmazható:"
              text2="- Tenisz: láberő fejlesztés, robbanékonyság fokozás."
              text3="- Labdarúgás: felugrás fejelésekhez és a megindulásokhoz az elrugaszkodás fejlesztése."
              text4="- Kézilabda: felugrás átlövésekhet és a megindulásokhoz az elrugaszkodás fejlesztése."
              text5="- Kosárlabda: felugrás dobásokhoz és a megindulásokhoz az elrugaszkodás fejlesztése."
              text6="- Atlétika: elrugaszkodások fejlesztése ugrásokhoz, futószámokban a rajtok fejlesztése."
              text7="- Vízilabda: kitaposás fejlesztése."
              text8="- Síugrás: elrugaszkodás fejlesztése."
              text9="- Evezés: kar, váll, hátizomzat fejlesztése."
              text10="- stb."
              img_id="multisport"            
            />

      </div>
        
      );

}

export default SpecificationsEng;