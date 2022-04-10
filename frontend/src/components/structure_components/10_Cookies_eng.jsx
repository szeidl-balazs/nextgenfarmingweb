import React from 'react';


const CookiesEng = () => {

    return (
        <div className="cookie-wrap">

            <h1>Cookie guide</h1>
            
            <div className="cookie-scope">
                <h2>The scope of cookie guide</h2>
                <p className="short-text">The current policy regards the following website managed by János Farkas s.p. - Operator -:</p>
                    <ul>
                        <li className="short-text"><a href="index.html" target="_blank">www.farkasgym.hu</a></li>
                    </ul>
            </div>
            
        
            <div className="cookie-definition long-text">
                <h2>What are cookies??</h2>
                <p>A cookie is a small text file that a website stores on your computer or mobile device when you visit the site.</p>
                <p>We implement solely cookies that are by all means necessary for the operation of this website and support operative sessions, or necessary for the identification of users' operative sessions, furthermore necesary for the convenient use of this website.</p>
                <p>Certain cookies we implement are only temporary and disappear at the time of closing the browser, whilst exist such convenience cookies that are stored 1 month on the PC or mobile device of visitors and if they regurlarly visit this website the browser stores the previous settings of visitors, therefore it is not necessary to accept our cookie guide in the beginning of each website visit again or set the preferred filtering options.</p>
            </div>
        
            <div className="cookie-goal long-text">
                <h2>The goal of cookies</h2>
                <p>Certain cookies implemented by us are indispensable for the proper operation of this website - session cookie -, others serves the facilitation of the more convenient use of this website. Storing the settings and using habits of visitors, the navigation on the website and thereby the use of this website is easier.</p>
            </div>
        
            <div className="cookie-types">
                <h2>Types of cookies</h2>
                <ol>
                    <li>
                        <p className="important">Session cookies:</p>
                        <p>A session cookie is a file containing an identifier (a string of letters and numbers) that a website server sends to a browser for temporary use during a limited timeframe. Session cookies are enabled by default. Their purpose is help individual web pages load faster and improve navigation through a website. Each time the browser requests a web page from the server, it includes the session cookie file with its request. The cookie lets the server know which page components the browser has already been sent, so the server doesn't waste time re-sending them. When the browser closes at the end of a session, the file is deleted. A session cookie is also known as transient cookie. This type of cookie is stored in temporary memory and is only available during an active browser session. End users can adjust browser settings to decline session cookies, however this often results in a poor user experience.</p>
                    </li>
                    <li>
                        <p className="important">Website use supporting convenience cookies:</p>
                        <p>This cookies enable our website to recognise which website operation mode has been selected by a website user. - e.g. user has accepted the cookie guide and in which sorting order the results of a search are displayed -. This occurs for the sake of convenience of the next website visit when a user does not have to accept again and again the cookie guide or  does not have to set that in which sorting order of a the content of a search is listed. Without the saved preferences in the cookies the website might operate but less rapidly.</p>
                        <p>We do not store personal data in convenience cookies only solely an identifier is saved, from which the web site is informed that the cookie guide has been accpeted by a user previously. The convenience cookies are stroed in the client device for a month.</p>
                    </li>
                </ol>
            </div>
        
            <div className="cookie-security">
                <h2>Security</h2>
                <p className="important">It is important that the Operator of this website in case of the acceptance of cookie policy does not store any personal data, identifier of password.</p>
                <p>Users accepting the cookie policy can use the eletronic service of the Operator under full security.</p>
            </div>
        
            <div className="cookie-setting">
                <h2>The control of cookie settings of a browser and disabling cookies</h2>
                <p>Modern browsers permit the revision of cookie settings. Certain browsers by default automatically accept cookies, but this setting can be revised in order to hinder the automatic cookie policy acceptance in the future by a user. In case of banned automatic cookie policy acceptance the browser by each visiting occasion offers the setting options of cookies.</p>
                <p className="alert">It should be noted for our visitors that as the goal of cookies are the support and facilitation of the usability and the processes of the website, in case of disabling the cookies we are not able to guarantee that the visitor will be able to use all comprehensive function of this webite. In this case the website can function dissimilar to the originally planned way in the browser.</p>
                <ol>
                    <li className="important">Further detailed information about the cookie sttings of the following browsers:</li>
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=hu" target="_blank" rel="noreferrer">Chrome</a></li>
                            <li><a href="https://support.mozilla.org/hu/kb/sutik-informacio-amelyet-weboldalak-tarolnak-szami?redirectlocale=hu&redirectslug=S%C3%BCtik+kezel%C3%A9se" target="_blank" rel="noreferrer">Firefox</a></li>
                            <li><a href="https://support.microsoft.com/hu-hu/windows/cookie-k-t%C3%B6rl%C3%A9se-%C3%A9s-kezel%C3%A9se-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noreferrer">Internet Explorer</a></li>
                            <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
                            <li><a href="https://addons.opera.com/hu/extensions/details/disable-cookies/" target="_blank" rel="noreferrer">Opera</a></li>
                            <li><a href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
                        </ul>
                    <li className="important">Information in case of advertisement-blocker use</li>
                    <p className="alert">It should be noted for our visitors that in case of advertisement-blocker use the information of cookie policy will not be displayed in every case. If this occurs please deactivate the advertisement-blocker application!</p>
                </ol>
            </div>
        </div>

    );
}

export default CookiesEng;