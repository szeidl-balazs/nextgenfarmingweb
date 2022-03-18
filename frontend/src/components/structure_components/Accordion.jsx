import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = (props) => {
  
   //toggle accordion function
  const [open, setOpen] = useState(false);
 
  
  //switch state
  const toggleHandler = (e) => {    
    setOpen(!open);
  };

  return (


    <div>
 
      <button className="accordion benefit-and-specs-list" onClick={toggleHandler}>
          {props.title}
          <span className="more-less-sign"><ExpandMoreIcon/></span>
      </button>

      {
        
        open === true
        
        ?

        <div className="panel">        

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

        </div>

        : 

        null

      }

    </div>

  );
}
export default Accordion;