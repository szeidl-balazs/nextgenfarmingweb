import React from 'react';

const Blogs = () => {


    return (

        <div className="panel-wrap">

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Game character</p>
                    <p className="accordion__content">URL: <a href="https://szeidl-balazs.github.io/game_character/" rel="noreferrer" target="_blank">game-character</a></p>
                    <p className="accordion__content">  
                    Description: This site has been a homework in Code Cool Programming school to practice Vanilla JavaScript programming focusing on data form development. 
                    The objective was to develop a form in which computer gamers can define their avatar names and select their player class.
                    </p>
                    <p className="accordion__content">
                    Highlights: Vanilla Java Script, CSS, form, user interface, computer game character selection interface.
                    </p>            
            </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="game-character"></div>
                </div>

            </div>


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

            <div className="subpanel">

                <div className="panel-text">
                    <p className="accordion__content">Title: Pricing table</p>
                    <p className="accordion__content">URL: <a href="https://bszeidl.github.io/pricing_table_code_berry_project/" rel="noreferrer" target="_blank">pricing-table</a></p>
                    <p className="accordion__content">  
                    Description: This site has been a homework in Code Berry Programming school to practice CSS Grid and responsivity. 
                    </p>
                    <p className="accordion__content">
                    Highlights: HTML, CSS, Grid, responsive for each display.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="pricing-table"></div>
                </div>

            </div>


        </div>



    );
}

export default Blogs;