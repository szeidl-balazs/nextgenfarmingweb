import {React, useState} from 'react';


const CookieBar = (Cookies) => {

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
                          <p>Kedves Látogató! A felhasználói élmény javítása érdekében "sütiket" (cookies) alkalmazunk.</p>
                          <p>A honlap használatával tudomásul veszi a <a href="Cookies" target="_blank" rel="noreferrer">tájékoztatónkat</a>.</p>
                        </div>
                        <div className="mobile">Ez a weboldal sütiket használ, <a href="7_2_cookie_text.html" target="_blank">részletek</a>.</div>
                        <button className="accept-btn close-cb" onClick={cookiebarCloser}>ELFOGADOM.</button>
                    </div>

                :

                null

            }

        </div>

    );

}

export default CookieBar;