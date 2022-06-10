import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import "../css_files/3_3_specification.css"
import LandingPages from "./5_1_Reference_eng_landing_pages";



const Accordion = (props) => {
  
   //toggle accordion function
  const [open, setOpen] = useState(false);
     
  //switch state
  const toggleHandler = (e) => {    
    setOpen(!open);    
  };    

   //open animation with react spring
         
   const openAnimation = useSpring ({
    from: {       
      maxHeight: "25px"
    },

    to: {      
      maxHeight: open ? "1200px" : "25px"
    },

    config: { 
      duration: "2000",
      easing: easings.easeIn,
    }
  });

    

 
  
  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "var(--main-light-color)"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
    },
    config: { 
      duration: "500" 
    }
  });
  
  return (

    <div className="accordion-container" >
 
      <button className="accordion benefit-and-specs-list" onClick={toggleHandler}>
          {props.accordiontitle}
          <animated.span className="more-less-sign" style={iconAnimation}><ExpandMoreIcon/></animated.span>
      </button>      

      {
        
        open === true
        
      ?

        <animated.div className="panel" style={openAnimation}>        
          <LandingPages />
        </animated.div>
        
        : 

        null

      }

    </div>

  );
}
export default Accordion;