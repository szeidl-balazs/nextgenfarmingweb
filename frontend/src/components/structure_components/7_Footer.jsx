import {React, useState} from 'react';

const Footer = () => {

    const [show, showGDPR] = useState(false);

    const gdprHandler = () => {
        showGDPR(!show);
    }

    return (
        <div id="contact-id" className="footer">            
        <div className="contact">Kapcsolat:
            <div>                
                <a href="mailto: fjuszas@gmail.com">✉ Email üzenet</a>
                <a href="🖀 +36 30 936 1899">🖀 +36 30 936 1899</a>
            </div>
        </div>
        <div className="copyright">Copyright © 2021. Farkas János ev. minden jog fenntartva!</div>
        <div className="gdpr"><a href="7_4_GDPR.html" target="_blank" onClick={gdprHandler}>Adatvédelem</a></div>
        <div className="cookies"><a href="7_2_cookie_text.html" target="_blank">Süti (cookie) szabályzat</a></div>
        <div className="terms-and-conditions"><a href="7_5_terms_and_conditions.html" target="_blank">Felhasználási feltételek</a></div>            
    </div>

    );
}

export default Footer;