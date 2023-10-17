import React from 'react';
import { CImage } from '@coreui/react';
import shrimp from '../images/mantis_shrimp.png';

const Blogs = () => {


    return (

        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <h2 className="accordion__content">Title: Mantis shrimp</h2>
                    <p className="accordion__content">URL: <a href="https://bszeidl.github.io/mantis_shrimps/" rel="noreferrer" target="_blank">mantis-shrimp</a></p>
                    <p className="accordion__content">  
                    Description: This site has been a homework in Code Berry Programming school to practice basic level CSS and responsivity. 
                    </p>
                    <p className="accordion__content">
                    Highlights: HTML, CSS, responsive for each display.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                <CImage className="d-block w-100" src={shrimp} alt="shrimp"/>
                </div>
        
            </div>



        </div>



    );
}

export default Blogs;