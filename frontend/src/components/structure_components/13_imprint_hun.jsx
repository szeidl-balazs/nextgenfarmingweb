import React from 'react';

const ImprintHun = () => {

    return (

        <div className="imprint-wrap">
            <h1>Imprint</h1>
            <div className="imprint-grid">

                <div className="org item">Szervezet:</div>
                <div className="org-content item">Farkas János egyéni vállalkozó</div>
            
                <div className="adress">Székhely és levelezési cím:</div>
                <div className="adress-content">Győr, Külső veszprémi út 14 B ép. 9028</div>
            
                <div className="tel">Telefonszám:</div>
                <div className="tel-content">🖀 +36 30 936 1899</div>
            
                <div className="email">Email cím:</div>
                <div className="email-content">fjuszas@gmail.com</div>

                <div className="regnum">Nyilvántartási száma:</div>
                <div className="regnum-content">7113188</div>

                <div className="tax">Adószáma:</div>
                <div className="tax-content">72395990-1-28</div>

            </div>
            

        </div>
    )
}

export default ImprintHun;