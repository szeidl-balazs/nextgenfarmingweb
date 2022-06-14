import React from 'react';

const BlogsHun = () => {


    return (

        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Cím: Sáska rák (Mantis shrimp)</p>
                    <p className="accordion__content">URL: <a href="https://bszeidl.github.io/mantis_shrimps/" rel="noreferrer" target="_blank">mantis-shrimp</a></p>
                    <p className="accordion__content">  
                        Részletek: az oldal egy feladat volt a Code Berry tanfolyamon, melyben alap HTML
                        és CSS technikákat kellett gyakorolni.
                    </p>
                    <p className="accordion__content">
                        Webfejlesztési megoldások: HTML, CSS, különböző méretű megjelenítő eszközökön is jól olvasható.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="mantis-shrimp"></div>
                </div>
        
            </div>



        </div>



    );
}

export default BlogsHun;