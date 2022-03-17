import { React, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  return (
    <div className="panel">

      <button className="accordion__header" onClick={toggleHandler}>
        <h4 >{props.title}</h4>
        <i>
          <ExpandMoreIcon/>
        </i>
      </button>
      
      <div className="panel-wrap">

          <div className="panel-text">
            <p className="accordion__content">{props.text1}</p>
            <p className="accordion__content">{props.text2}</p>
            <p className="accordion__content">{props.text3}</p>
            <p className="accordion__content">{props.text4}</p>
            <p className="accordion__content">{props.text5}</p>
          </div>

          <div className="specification-img-wrap">
            <div className="specification-photo" id={props.img_id}></div>
          </div>

      </div>

    </div>


    


  );
}
export default Accordion;