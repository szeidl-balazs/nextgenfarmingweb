import React from 'react';

const EventsHun = () => {

    return (
        
        <div className="panel-wrap">

          <div className="subpanel">
            <div className="panel-text">
                <p className="accordion__content">Címe: Wedding Zoe and Alex</p>
                <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/wedding_event_template/" rel="noreferrer" target="_blank">wedding-zoe-alex</a></p>
                <p className="accordion__content">  
                    Részletek: Az oldal a Code Berry programozó tanfolyamon volt feladat, 
                    melyben egy eskövői eseményre kellett célodalt készíteni elegáns stílusban 
                    a Flex illetve Grid technológia alkalmazása nélkül megoldva a tartalmi részek 
                    horizontális és vertikális pozícionálását.
                </p>
                <p className="accordion__content">
                    Webfejlesztési megoldások: alap HTML és CSS.
                </p>            
            </div>

            <div className="specification-img-wrap">
                    <div className="specification-photo" id="wedding-zoe-and-alex"></div>
            </div>
          
          </div>

        </div>

    )
}

export default EventsHun;