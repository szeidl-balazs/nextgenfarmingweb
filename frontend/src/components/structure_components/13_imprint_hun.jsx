import React from 'react';

const ImprintHun = () => {

    return (

        <div className="imprint-wrap">
            <h1>Imprint</h1>
            <div className="imprint-grid">

                <div className="org item">Szervezet:</div>
                <div className="org-content item">BALOREA TEAM Kft.</div>
            
                <div className="adress">Székhely és levelezési cím:</div>
                <div className="adress-content">2900 Komárom, Babits Mihály utca 24.</div>
            
                <div className="tel">Telefonszám:</div>
                <div className="tel-content">🖀 +36 20 323 1179</div>
            
                <div className="email">Email cím:</div>
                <div className="email-content">szeidl.balazs@hotmail.com</div>

                <div className="regnum">Nyilvántartási száma:</div>
                <div className="regnum-content">11 09 023316</div>

                <div className="tax">Adószáma:</div>
                <div className="tax-content">25090620111</div>

            </div>
            

        </div>
    );
}

export default ImprintHun;