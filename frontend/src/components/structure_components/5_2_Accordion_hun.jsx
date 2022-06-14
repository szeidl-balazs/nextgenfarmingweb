import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import "../css_files/3_3_specification.css"
import LandingPagesHun from "./5_1_1_Reference_hun_landing_pages";
import EventsHun from "./5_1_2_Reference_hun_events";
import BlogsHun from "./5_1_3_Reference_hun_blogs";
import UicomponentsHun from "./5_1_4_Reference_hun_ui";
import MarketingComponentsHun from "./5_1_5_Reference_hun_marketing";


const AccordionHun = () => {
  
  //functions for landing pages 
  
  //toggle accordion function
  const [openlanding, setOpenlanding] = useState(false);

  //switch state
  const toggleHandlerLanding = (e) => {    
    setOpenlanding(!openlanding);
    setOpenEvent(false);
    setOpenBlog(false);
    setOpenMarketing(false);
    setOpenUi(false);       
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
      setOpenBlog(false);
      setOpenMarketing(false);
      setOpenUi(false);
      setOpenlanding(false);    
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

    //functions for blogs, articles

    //toggle accordion function
    const [openblog, setOpenBlog] = useState(false);

    //switch state
    const toggleHandlerBlog = (e) => {    
      setOpenBlog(!openblog);
      setOpenEvent(false);
      setOpenMarketing(false);
      setOpenUi(false);
      setOpenlanding(false); 
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
  

  //functions for UI components

    //toggle accordion function
    const [openui, setOpenUi] = useState(false);

    //switch state
    const toggleHandlerUi = (e) => {    
      setOpenUi(!openui);
      setOpenBlog(false);
      setOpenEvent(false);
      setOpenMarketing(false);
      setOpenlanding(false);   
    };    
  
     //open animation with react spring
           
     const openAnimation4 = useSpring ({
      from: {       
        maxHeight: "25px"
      },
  
      to: {      
        maxHeight: openui ? "1200px" : "25px"
      },
  
      config: { 
        duration: "2000",
        easing: easings.easeIn,
      }
    });
   
    
    //rotate animation
    const iconAnimation4 = useSpring({
      from: {
        transform: "rotate(0deg)",
        color: "var(--main-light-color)"
      },
      to: {
        transform: openui ? "rotate(180deg)" : "rotate(0deg)",
        color: openui ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
      },
      config: { 
        duration: "500" 
      }
    });


    //functions for marketing components

    //toggle accordion function
    const [openmarketing, setOpenMarketing] = useState(false);

    //switch state
    const toggleHandlerMarketing = (e) => {    
      setOpenMarketing(!openmarketing);
      setOpenBlog(false);
      setOpenEvent(false);
      setOpenUi(false);
      setOpenlanding(false);     
    };    
  
     //open animation with react spring
           
     const openAnimation5 = useSpring ({
      from: {       
        maxHeight: "25px"
      },
  
      to: {      
        maxHeight: openmarketing ? "1200px" : "25px"
      },
  
      config: { 
        duration: "2000",
        easing: easings.easeIn,
      }
    });
   
    
    //rotate animation
    const iconAnimation5 = useSpring({
      from: {
        transform: "rotate(0deg)",
        color: "var(--main-light-color)"
      },
      to: {
        transform: openmarketing ? "rotate(180deg)" : "rotate(0deg)",
        color: openmarketing ? "rgba(230, 240, 100, 1)" : "var(--main-light-color)"
      },
      config: { 
        duration: "500" 
      }
    });




  
  return (

    <div className="specifications">

      <div id="specifications-id" className="place-holder-under-menuline"></div> {/*empty lane to push down the below content under menu line*/}
          
      <h2>REFERENCIÁK</h2>          
  

      <div className="accordion-container" >

        {/*Landing page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerLanding}>
          Célodalak (landing page) szervezetek, termékek és szolgáltatások promóciójához
          <animated.span className="more-less-sign" style={iconAnimation}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openlanding === true
        
        ?

        <animated.div className="panel" style={openAnimation}>        
          <LandingPagesHun />
        </animated.div>
        
        : 

        null

        }


        {/*Event page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerEvent}>
          Céloldalak (landing page) egyedi események promóciójához
          <animated.span className="more-less-sign" style={iconAnimation2}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openevent=== true
        
        ?

        <animated.div className="panel" style={openAnimation2}>        
          <EventsHun />
        </animated.div>
        
        : 

        null

        }


      </div>


        {/*Blog page references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerBlog}>
          Blog oldalak és cikkek
          <animated.span className="more-less-sign" style={iconAnimation3}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openblog=== true
        
        ?

        <animated.div className="panel" style={openAnimation3}>        
          <BlogsHun />
        </animated.div>
        
        : 

        null

        }


        {/*UI component references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerUi}>
          Felhasználói felület (UI) komponensek
          <animated.span className="more-less-sign" style={iconAnimation4}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openui=== true
        
        ?

        <animated.div className="panel" style={openAnimation4}>        
          <UicomponentsHun />
        </animated.div>
        
        : 

        null

        }

        {/*Marketing component references*/}

        <button className="accordion benefit-and-specs-list" onClick={toggleHandlerMarketing}>
          Marketing komponensek, logók, címkék, feliratok
          <animated.span className="more-less-sign" style={iconAnimation5}><ExpandMoreIcon/></animated.span>
        </button>      

        {
        
        openmarketing=== true
        
        ?

        <animated.div className="panel" style={openAnimation5}>        
          <MarketingComponentsHun />
        </animated.div>
        
        : 

        null

        }



    </div>


  

  );
}
export default AccordionHun;