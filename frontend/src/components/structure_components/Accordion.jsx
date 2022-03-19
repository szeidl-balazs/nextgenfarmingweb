import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated } from "react-spring";


const Accordion = (props) => {
  
   //toggle accordion function
  const [open, setOpen] = useState(false);
 
  
  //switch state
  const toggleHandler = (e) => {    
    setOpen(!open);
  };

   //open animation with react spring
   const openAnimation = useSpring({
    from: { 
      opacity: "0", 
      maxHeight: "500px" 
    },
    to: { 
      opacity: "1", 
      maxHeight: open ? "1200px" : "25px"
    },
    config: { 
      duration: "2000"
    }
  });
  
  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#00ffff"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "rgba(230, 240, 100, 1)" : "#00ffff"
    },
    config: { duration: "300" }
  });
  
  return (


    <div className="accordion-container">
 
      <button className="accordion benefit-and-specs-list" onClick={toggleHandler}>
          {props.title}
          <animated.span className="more-less-sign" style={iconAnimation}><ExpandMoreIcon/></animated.span>
      </button>

      {
        
        open === true
        
        ?

        <animated.div className="panel" style={openAnimation}>        

          <div className="panel-wrap">

            <div className="panel-text">
              <p className="accordion__content">{props.text1}</p>
              <p className="accordion__content">{props.text2}</p>
              <p className="accordion__content">{props.text3}</p>
              <p className="accordion__content">{props.text4}</p>
              <p className="accordion__content">{props.text5}</p>
              <p className="accordion__content">{props.text6}</p>
              <p className="accordion__content">{props.text7}</p>
              <p className="accordion__content">{props.text8}</p>
            </div>

            <div className="specification-img-wrap">
              <div className="specification-photo" id={props.img_id}></div>
            </div>

          </div>

        </animated.div>

        : 

        null

      }

    </div>

  );
}
export default Accordion;