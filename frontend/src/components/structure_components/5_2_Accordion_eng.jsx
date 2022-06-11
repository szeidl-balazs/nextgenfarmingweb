import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import "../css_files/3_3_specification.css"
import LandingPages from "./5_1_1_Reference_eng_landing_pages";
import Events from "./5_1_2_Reference_eng_events";
import Blogs from "./5_1_3-Reference_eng_blogs";



const AccordionEng = (props) => {
  
  //functions for landing pages 
  
  //toggle accordion function
  const [openlanding, setOpenlanding] = useState(false);

  //switch state
  const toggleHandlerLanding = (e) => {    
    setOpenlanding(!openlanding);    
  };    

   //open animation with react spring
         
   const openAnimation = useSpring ({
    from: {       
      maxHeight: "25px"
    },

    to: {      
      maxHeight: openlanding ? "1200px" : "25px"
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
      transform: openlanding ? "rotate(180deg)" : "rotate(0deg)",
      color: openlanding ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
    },
    config: { 
      duration: "500" 
    }
  });


  //functions for events

    //toggle accordion function
    const [openevent, setOpenEvent] = useState(false);

    //switch state
    const toggleHandlerEvent = (e) => {    
      setOpenEvent(!openevent);    
    };    
  
     //open animation with react spring
           
     const openAnimation2 = useSpring ({
      from: {       
        maxHeight: "25px"
      },
  
      to: {      
        maxHeight: openevent ? "1200px" : "25px"
      },
  
      config: { 
        duration: "2000",
        easing: easings.easeIn,
      }
    });
   
    
    //rotate animation
    const iconAnimation2 = useSpring({
      from: {
        transform: "rotate(0deg)",
        color: "var(--main-light-color)"
      },
      to: {
        transform: openevent ? "rotate(180deg)" : "rotate(0deg)",
        color: openevent ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
      },
      config: { 
        duration: "500" 
      }
    });

    //functions for blogs

    //toggle accordion function
    const [openblog, setOpenBlog] = useState(false);

    //switch state
    const toggleHandlerBlog = (e) => {    
      setOpenBlog(!openblog);    
    };    
  
     //open animation with react spring
           
     const openAnimation3 = useSpring ({
      from: {       
        maxHeight: "25px"
      },
  
      to: {      
        maxHeight: openblog ? "1200px" : "25px"
      },
  
      config: { 
        duration: "2000",
        easing: easings.easeIn,
      }
    });
   
    
    //rotate animation
    const iconAnimation3 = useSpring({
      from: {
        transform: "rotate(0deg)",
        color: "var(--main-light-color)"
      },
      to: {
        transform: openblog ? "rotate(180deg)" : "rotate(0deg)",
        color: openblog ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
      },
      config: { 
        duration: "500" 
      }
    });
  


  
  return (

    <div className="specifications">

      <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
      <h2>REFERENCE PROJECTS</h2>          
  

      <div className="accordion-container" >

        {/*Landing page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerLanding}>
          Landing pages promoting organizations, products or services
          <animated.span className="more-less-sign" style={iconAnimation}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openlanding === true
        
        ?

        <animated.div className="panel" style={openAnimation}>        
          <LandingPages />
        </animated.div>
        
        : 

        null

        }


        {/*Event page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerEvent}>
          Landing pages promoting events
          <animated.span className="more-less-sign" style={iconAnimation2}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openevent=== true
        
        ?

        <animated.div className="panel" style={openAnimation2}>        
          <Events />
        </animated.div>
        
        : 

        null

        }


      </div>


        {/*Blog page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerBlog}>
          Blog pages, user interfaces
          <animated.span className="more-less-sign" style={iconAnimation3}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openblog=== true
        
        ?

        <animated.div className="panel" style={openAnimation3}>        
          <Blogs />
        </animated.div>
        
        : 

        null

        }


    </div>


  

  );
}
export default AccordionEng;