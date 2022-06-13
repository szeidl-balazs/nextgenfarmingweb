import React from 'react';


const CookieBarEng = (Cookies) => {
    
    return (

        <div className="cookie-bar">
            <div className="message"> 
                <p>Dear Visitor! In order to provide you the best user experience we use "cookies".</p>
                <p>Using this website you accept our <a href="Cookies" target="_blank" rel="noreferrer">cookie policy</a>.</p>
            </div>
            <div className="mobile">This website uses cookies, <a href="7_2_cookie_text.html" target="_blank">details</a>.</div>
            <div className="accept-btn close-cb"><label for="checkbox-cb">I ACCEPT.</label></div>
        </div>   

    );

}

export default CookieBarEng;