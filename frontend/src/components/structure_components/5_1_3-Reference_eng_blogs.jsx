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
                    The objective was to develop a form in which players of a computer game can define their avatar names and select their player class.
                    </p>
                    <p className="accordion__content">
                    Highlights: Vanilla Java Script, CSS, form, user interface, computer game character selection interface.
                    </p>            
                </div>

                <div className="specification-img-wrap">
                    <div className="specification-photo" id="game-character"></div>
                </div>
        
            </div>

        </div>



    );
}

export default Blogs;