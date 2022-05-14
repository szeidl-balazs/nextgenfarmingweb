import React from 'react';

const BenefitsEng = () => {

    return (        
        
        <div className="benefits">
            
            <div id="benefit-id" className="place-holder-under-menuline"><div className="forsale">Production license for sale!</div></div> {/*empty lane to push down the below content under menu line*/}
        
            <h2>Benefits</h2>

            <ul className="benefits-list">
                <li>Motor skills development
                    <ul className="nested-list">
                        <li>For entry level athlets: establisment of proper techniques</li>
                        <li>For advanced and professional racers: development of coordinative and conditional abilities</li>
                    </ul>
                </li>
                <li>Controlled workload</li>
                <li>Usable for rehabilitation</li>
                <li>Applicable in different sports</li>
            </ul>

        </div>            

    );
}

export default BenefitsEng;