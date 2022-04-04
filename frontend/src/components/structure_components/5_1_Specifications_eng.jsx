import Accordion from './5_2_Accordion';

const SpecificationsEng = () => {

    return (

      <div className="specifications">

        <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
        <h2>SPECIFICATIONS</h2>          

            <Accordion
              title="Skill development with own weight"
              text1="The strength development occurs with the move of own body weight of which accurate knowing there is no age group limitation during work out."
              text2="The angular offset of the bench is adjustable, therefore the level of power is alterable."
              text3="The work outs with the bench can be integrated into training system, that is, the bench training and the sport specific work outs have synergic effect to each other e.g. breast srtoke kicking on the bench and breast stroke kicking in the water."
              img_id="adjustable-angle-img"
            />

            <Accordion
              title="Simultaneous development of different skills"
              text1="Simultaneously with the strength development the coordination can be improved as well, the technical mistakes can be corrected on the bench which is easier than in the water in case of swimming or on the sports ground in case of other sports."
              text2="The proper leg or arm technique can be established in many sports."
              text3="During the workout the proper technique can be improved with continuous instructions of a coach. In this process the communication between athlets and coaches are more efficient compered to an original athlet - coach situation when an athlet is on a sports ground or in a swimming pool and a coach is further from him or her."     
              img_id="morefeatures"
            />

            <Accordion
              title="Sport specific strength development effect"
              text1="A particular work out strengthens specific muscle groups."
              text2="According to our experience till now the planed alteration of charging components results same training effects that could be gained on sports grounds or in a swimming pool."
              img_id="spec-swimmers"           
            />

            <Accordion
              title="PC control and monitoring"
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

            <Accordion 
              title="Adjustable foot support"
              text1="The lower foot support is adjustable which enables coaches to modify the active displacement of the leg workouts."
              text2="The lower foot support can be adjusted with an engine controlled by the onboard computer between the sets of a workout."
              img_id="leg-support-img"            
            />

            <Accordion 
              title="Applicable in many sports"
              text1="The Farkas Gym training bench originally has been developed for swimmers although it can be effectively implemented in many other sports as well."
              text2="- Tennis: leg power development, explosiveness increase."
              text3="- Football: development of jumping to head the ball or starts."
              text4="- Handball: development of vertical jump shots and starts."
              text5="- Basketball: development of vertical jump shots and starts."
              text6="- Athletics: development of leg push off for long jump or high jump, in running events the development of start."
              text7="- Waterpolo: development of the vertical eggbeaeter kick."
              text8="- Ski-jumping: development of legs push off."
              text9="- Rowing: arm, shoulder and back power development."
              text10="- etc."
              img_id="multisport"            
            />

      </div>
        
      );

}

export default SpecificationsEng;