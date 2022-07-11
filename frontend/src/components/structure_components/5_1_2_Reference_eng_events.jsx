import React from 'react';
import { CImage } from '@coreui/react';
import wedding from '../images/weddingzoeandalex.png';

const Events = () => {

    return (
        
        <div className="panel-wrap">

          <div className="subpanel">
            <div className="panel-text">
                <p className="accordion__content">Title: Wedding Zoe and Alex</p>
                <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/wedding_event_template/" rel="noreferrer" target="_blank">wedding-zoe-alex</a></p>
                <p className="accordion__content">  
                    Description: this site was a project in Code Berry programming scool to practice basic level of HTML and CSS with and elegant style design.
                </p>
                <p className="accordion__content">
                    Highlights: basic HTML and CSS, practice positioning of text and images without Flex or Grid technology.
                </p>            
            </div>

            <div className="specification-img-wrap">
              <CImage className="d-block w-100" src={wedding} alt="wedding"/>
            </div>
          
          </div>

        </div>

    )
}

export default Events;