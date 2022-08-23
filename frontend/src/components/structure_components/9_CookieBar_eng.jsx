import {React, useState} from 'react';


const CookieBarEng = (Cookies) => {

    const [cookiebarshow, setCookiebarShow] = useState(true);

    const cookiebarCloser = (e) => {
        setCookiebarShow(false);
    }
    
    return (

        <div>

            {

              cookiebarshow === true

              ?

                <div className="cookie-bar">
                    <div className="message"> 
                      <p>Dear Visitor! In order to provide you the best user experience we use "cookies".</p>
                      <p>Using this website you accept our <a href="Cookies" target="_blank" rel="noreferrer">cookie policy</a>.</p>
                    </div>
                    <div className="mobile">This website uses cookies, <a href="7_2_cookie_text.html" target="_blank">details</a>.</div>
                    <div className="accept-btn close-cb" onClick={cookiebarCloser}><label for="checkbox-cb">I ACCEPT.</label></div>
                </div>   

                :

                null

            }

            
        </div>

    );

}

export default CookieBarEng;