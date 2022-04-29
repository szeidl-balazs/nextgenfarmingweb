import React from 'react';


const CookieBar = (Cookies) => {

    return (

        <div className="cookie-bar">
            <div className="message"> 
                <p>Kedves Látogató! A felhasználói élmény javítása érdekében "sütiket" (cookies) alkalmazunk.</p>
                <p>A honlap használatával tudomásul veszi a <a href="Cookies" target="_blank" rel="noreferrer">tájékoztatónkat</a>.</p>
            </div>
            <div className="mobile">Ez a weboldal sütiket használ, <a href="7_2_cookie_text.html" target="_blank">részletek</a>.</div>
            <div className="accept-btn close-cb"><label for="checkbox-cb">ELFOGADOM.</label></div>
        </div>
    );

}

export default CookieBar;