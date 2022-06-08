import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import "../css_files/3_3_specification.css"


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
          {props.title}
          <animated.span className="more-less-sign" style={iconAnimation}><ExpandMoreIcon/></animated.span>
      </button>

      {
        
        open === true
        
      ?

        <animated.div className="panel" style={openAnimation}>        

          <div className="panel-wrap">

            <div className="subpanel">

              <div className="panel-text">

                <p className="accordion__content">Title: {props.subtitle1}</p>
                <p className="accordion__content">URL: <a href={props.urladdress1}  rel="noreferrer" target="_blank">{props.urlname1}</a></p>
                <p className="accordion__content">Description: {props.description1}</p>
                <p className="accordion__content">Highlights: {props.highlights1}</p>
                
              </div>

              <div className="specification-img-wrap">
                <div className="specification-photo" id={props.img_id1}></div>
              </div>
                
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