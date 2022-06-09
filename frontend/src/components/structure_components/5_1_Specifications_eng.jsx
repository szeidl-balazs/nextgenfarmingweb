import Accordion from './5_2_Accordion';

const SpecificationsEng = () => {

    return (

      <div className="specifications">

        <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
        <h2>REFERENCE PROJECTS</h2>          

            <Accordion
              title="Landing pages promoting organizations, products & services"
              subtitle1="Farkas Gym"
              urlname1="www.farkasgym.hu"
              urladdress1="https://farkasgym.hu/"
              description1="Farkas Gym has been dedicated for introduction and promotion of an innovative fitness machine."
              highlights1="React technology, Material UI icons, Use Spring animation, bilingual, 
              fix header section with menu icon - main title - logo, minimalist design - details only on click, 
              lightening fast page load - section and language toggling, fully responsive in each device size readable."
              img_id1="farkasgym1"

              subtitle2="Göcsej Természetvédelmi Alapítvány"
              urlname2="gocsej-alapitvany"
              urladdress2="https://szeidl-balazs.github.io/landing_page/"
              description2="The site has been a team project work in Code Cool frontend course where I created this site with Márta Marosi and Richárd Arany. 
              The task has been to develop a web page for a nonprofit organization."
              highlights2="HTML, CSS, flex box, border styling."
              img_id2="farkasgym1"

            />

            <Accordion
              title="Landing pages promoting events"
              subtitle1="Wedding event: Zoe and Alex"
              description1="The site was a project task in CodeBerry Programming School to practice aligning content without flex or grid technology and styling in elegant way."
              urlname1="wedding-zoe-and-alex"
              urladdress1="https://szeidl-balazs.github.io/wedding_event_template/"
              highlights1="HTML and CSS basics, align without flex or grid, responsive in each display size."     
              img_id1="wedding-zoe-and-alex"
            />

            <Accordion
              title="Blog pages"
              text1="A particular work out strengthens specific muscle groups."
              text2="According to our experience till now the planed alteration of charging components results same training effects that could be gained on sports grounds or in a swimming pool."
              img_id="spec-swimmers"           
            />

            <Accordion
              title="Branding elements, logos, tags"
              text1="Farkas Gym machine operates with computer and manual control, too."
              text2="The angular offset of the bench can be controlled by the onboard computer. The level of workload can be settled by the angular offset. Depending on the coach's settings the onboard computer automatically raises or lowers the angular offset of the bench."
              text3="The repetion, the duration of the work phase and the rest phase of workouts can be programmed with the onboard computer as well."
              text4="Within a workout set the angular offset of the bench can be modified during the rest phase between two workout repetitions according to the settings."
              text5="There are sensors on the bench which monitors the performance of athlets whether a workout is carried out properly. The display counts only that repetition in which the performed route on the bench is at least as long as it has been set on the onboard computer by a coach. Namely the level of the performed power of an athlet is in line with the definition of coaches."
              text6="The data of a heart rate monitor which is mounted on the breast of an athlet are displayed on the onboard computer together with the performance value in Watt."
              text7="There are immediate information about the performance of athlets on the display of onboard computer."
              text8="The display of onboard computer shows: the duration of the work and the rest phase, the count of repetitions, the performance of athlet in Watt, heart rate in case of breast mounted sensor."  
              img_id="pc-control"
            />


      </div>
        
      );

}

export default SpecificationsEng;