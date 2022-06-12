import React from 'react';

const Blogs = () => {


    return (

        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Mantis shrimp</p>
                    <p className="accordion__content">URL: <a href="https://bszeidl.github.io/mantis_shrimps/" rel="noreferrer" target="_blank">mantis-shrimp</a></p>
                    <p className="accordion__content">  
                    Description: This site has been a homework in Code Berry Programming school to practice basic level CSS and responsivity. 
                    </p>
                    <p className="accordion__content">
                    Highlights: HTML, CSS, responsive for each display.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="mantis-shrimp"></div>
                </div>
        
            </div>



        </div>



    );
}

export default Blogs;