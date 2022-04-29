import React from 'react';

const ImprintEng = () => {

    return (

        <div className="imprint-wrap">
            <h1>Imprint</h1>
            <div className="imprint-grid">

                <div className="org item">Organization:</div>
                <div className="org-content item">Farkas János sole proprietorship</div>
            
                <div className="adress">Seat and correspondence address:</div>
                <div className="adress-content">Győr, Külső veszprémi út 14 B ép. 9028</div>
            
                <div className="tel">Phone number:</div>
                <div className="tel-content">🖀 +36 30 936 1899</div>
            
                <div className="email">Email:</div>
                <div className="email-content">fjuszas@gmail.com</div>

                <div className="regnum">Registration number:</div>
                <div className="regnum-content">7113188</div>

                <div className="tax">Tax number:</div>
                <div className="tax-content">72395990-1-28</div>

            </div>
            

        </div>
    );
}

export default ImprintEng;